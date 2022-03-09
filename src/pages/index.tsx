import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import Layout from '@/templates/layout';
import Avatar from '@/components/home/avatar';
import IntroText from '@/components/home/intro-text';
import ArticleCard from '@/components/articles/article-card';
import { Article } from '@/models/article.model';
import { route } from '@/configs/routes.config';
import PageHeading from '@/components/commons/page-heading';
import NoScrollLink from '@/components/commons/no-scroll-link';

const HomePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  articles,
}) => {
  return (
    <Layout title="Home | Gerpan" description="Gerpan personal website">
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
          <PageHeading>Popular articles</PageHeading>

          <div className="mt-8 flex flex-col space-y-8">
            {articles?.slice(0, 3).map((article: any, key: number) => (
              <ArticleCard key={key} index={key} article={article} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <NoScrollLink href={route.articles.path}>
              <a className="text-xl text-dracula-purple hover:text-dracula-purple-600">
                More articles
              </a>
            </NoScrollLink>
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
