import React from 'react';
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import Layout from '@/templates/layout';
import { Article } from '@/models/article.model';
import MDXRender from '@/components/articles/mdx-render';
import Toc from '@/components/articles/toc';
import {
  MY_NAME,
  PLACEHOLDER_IMG_URL,
} from '@/configs/constants/common.constant';

import { getDocs, getDoc, collection, doc } from 'firebase/firestore';
import { firestore } from '@/configs/firebase.config';

const ArticlePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  article,
}) => {
  return (
    <Layout
      title={`${article?.title} | ${MY_NAME}'s website | Developer`}
      description={article?.description}
    >
      <div className="flex space-x-5">
        <div
          className="basis-full lg:basis-2/3
            rounded-xl
            flex flex-col items-center space-y-10
            shadow-lg dark:shadow-dracula-darker"
        >
          <div
            className="h-56 w-full rounded-t-xl
              bg-cover bg-center bg-no-repeat
              overflow-hidden"
            style={{
              backgroundImage: `url(${
                article?.thumbnailUrl || PLACEHOLDER_IMG_URL
              })`,
            }}
          >
            {
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={article?.thumbnailUrl || PLACEHOLDER_IMG_URL}
                alt="background"
                className="w-full h-full
                  bg-no-repeat backdrop-blur object-contain"
              />
            }
          </div>
          <MDXRender article={article} />
        </div>

        <div className="hidden lg:block lg:basis-1/3">
          <Toc />
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const snapshots = await getDocs(collection(firestore, 'articles'));
  const slugs: string[] = snapshots.docs.map(
    (snapshot) => snapshot.data().slug
  );

  const paths = [
    ...slugs.map((slug) => ({
      params: {
        slug,
        locale: 'en',
      },
    })),
    ...slugs.map((slug) => ({
      params: {
        slug,
        locale: 'vi',
      },
    })),
  ];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  article: Article;
}> = async (context) => {
  const { slug } = context.params as { slug: string };
  const id = slug.split('-').slice(-1)[0];

  const snapshot = await getDoc(doc(firestore, 'articles', id));
  const article = snapshot.data() as Article;
  article.createdAt = snapshot.data()?.createdAt.toMillis();

  const mdxSource = await serialize(article.content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug],
    },
  });
  article.content = mdxSource;

  return {
    props: {
      article,
    },
  };
};

export default ArticlePage;
