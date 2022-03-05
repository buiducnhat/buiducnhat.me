import { useState } from 'react';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { FaSearch as SearchIcon } from 'react-icons/fa';

import Meta from '@/templates/meta';
import Layout from '@/templates/layout';
import ArticleCard from '@/components/articles/article-card';
import { Article } from '@/models/article.model';
import Button from '@/components/commons/button';
import SearchModal from '@/components/articles/search-modal';

const ArticlePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  articles,
}) => {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <Layout
      meta={
        <Meta title="Home | Gerpan" description="Gerpan personal website" />
      }
    >
      <SearchModal show={openSearch} setShow={setOpenSearch} />

      <div className="flex flex-col">
        <div className="mb-3 space-x-5">
          <h1
            className={
              'inline text-3xl md:text-4xl font-bold ' +
              'text-dracula-pink border-b-4 ' +
              'border-dracula-pink'
            }
          >
            My articles
          </h1>
          <Button onClick={() => setOpenSearch(true)}>
            <SearchIcon className="text-xl" />
          </Button>
        </div>

        <div className="mt-8 flex flex-col space-y-8">
          {articles?.slice(0, 3).map((article: any, key: number) => (
            <ArticleCard key={key} index={key} article={article} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<{
  articles: Article[];
}> = async () => {
  const files = fs.readdirSync(path.join('src/data/articles'));
  const articles = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join('src/data/articles', filename),
      'utf-8'
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      ...frontMatter,
      slug: filename.split('.')[0],
    };
  }) as Article[];
  return {
    props: {
      articles,
    },
  };
};

export default ArticlePage;
