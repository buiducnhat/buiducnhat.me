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
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import SyntaxHighlighter from 'react-syntax-highlighter';

import Layout from '@/templates/layout';
import Meta from '@/templates/meta';
import { Article } from '@/models/article.model';
import Button from '@/components/commons/button';

const ArticlePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  article,
}) => {
  return (
    <Layout
      meta={<Meta title={article?.title} description={article?.description} />}
    >
      <div
        className={
          'prose prose-slate dark:prose-invert ' +
          'prose-headings:text-primary-700 dark:prose-headings:text-primary-400 ' +
          'prose-a:text-primary-600'
        }
      >
        <MDXRemote
          {...article.content}
          components={{ Button, SyntaxHighlighter }}
        />
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
  } as unknown as Article;
  return {
    props: { article },
  };
};
export default ArticlePage;
