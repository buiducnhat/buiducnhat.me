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

import Layout from '@/templates/layout';
import Meta from '@/templates/meta';
import { Article } from '@/models/article.model';
import MDXRender from '@/components/articles/mdx-render';

const ArticlePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  article,
}) => {
  return (
    <Layout
      meta={<Meta title={article?.title} description={article?.description} />}
    >
      <MDXRender article={article} />
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

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as { slug: string };
  const markdownWithMeta = fs.readFileSync(
    path.join('src/data/articles', slug + '.mdx'),
    'utf-8'
  );
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);
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
