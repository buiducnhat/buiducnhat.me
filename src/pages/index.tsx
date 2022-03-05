import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import Meta from '@/templates/meta';
import Layout from '@/templates/layout';
import Avatar from '@/components/home/avatar';
import IntroText from '@/components/home/intro-text';
import ArticleCard from '@/components/articles/article-card';
import { Article } from '@/models/article.model';
import { route } from '@/configs/routes.config';

const HomePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  articles,
}) => {
  return (
    <Layout
      meta={
        <Meta title="Home | Gerpan" description="Gerpan personal website" />
      }
    >
      <div className="flex-col space-y-10 md:space-y-16">
        <div
          className={
            'flex flex-wrap md:flex-nowrap ' +
            'items-center ' +
            'space-y-5 md:space-y-0 md:space-x-20 ' +
            'justify-center md:justify-start'
          }
        >
          <div className="flex-grow-1">
            <Avatar />
          </div>
          <div className="flex-grow-3">
            <IntroText />
          </div>
        </div>

        <div>
          <h1
            className={
              'inline text-3xl md:text-4xl font-bold ' +
              'text-primary-500 border-b-4 ' +
              'border-primary-500'
            }
          >
            Popular articles
          </h1>

          <div className="mt-8 flex flex-col space-y-8">
            {articles?.slice(0, 3).map((article: any, key: number) => (
              <ArticleCard key={key} index={key} article={article} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href={route.articles.path}>
              <a className="text-xl text-primary-500 hover:text-primary-600">
                More articles
              </a>
            </Link>
          </div>
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

export default HomePage;
