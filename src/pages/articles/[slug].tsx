import React from 'react';
import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';

import Layout from '@/templates/layout';
import { Article } from '@/models/article.model';
import MDXRender from '@/components/articles/mdx-render';
import Toc from '@/components/articles/toc';
import { MY_NAME } from '@/configs/constants/common.constant';

const ArticlePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  article,
}) => {
  return (
    <Layout
      title={`${article?.title} | ${MY_NAME}`}
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
                article.thumbnailUrl || '/images/placeholder.png'
              })`,
            }}
          >
            {
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={article.thumbnailUrl || '/images/placeholder.png'}
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
  const files = fs.readdirSync(path.join('src/data/articles'));
  const paths = [
    ...files.map((filename) => ({
      params: {
        slug: filename.replace('.mdx', ''),
        locale: 'en',
      },
    })),
    ...files.map((filename) => ({
      params: {
        slug: filename.replace('.mdx', ''),
        locale: 'vi',
      },
    })),
  ];

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps<{
  article: Article;
}> = async (context) => {
  const { slug } = context.params as { slug: string };
  const markdownWithMeta = fs.readFileSync(
    path.join('src/data/articles', slug + '.mdx'),
    'utf-8'
  );
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug],
    },
  });
  const article = {
    ...frontMatter,
    slug,
    content: mdxSource,
  } as Article;
  return {
    props: { article },
  };
};

export default ArticlePage;
