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

import Layout from '@/templates/layout';
import { Article } from '@/models/article.model';
import MDXRender from '@/components/articles/mdx-render';
import Toc from '@/components/articles/toc';

const ArticlePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  article,
}) => {
  return (
    <Layout
      title={`${article?.title} | Gerpan`}
      description={article?.description}
    >
      <div className="flex space-x-5">
        <div className="basis-full lg:basis-2/3 flex flex-col space-y-10">
          <div
            className="h-56 rounded-xl bg-cover bg-center"
            style={{ backgroundImage: `url(${article.thumbnailUrl})` }}
          />
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
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }));

  return {
    paths,
    fallback: false,
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
