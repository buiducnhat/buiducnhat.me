import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import Layout from '@/templates/layout';
import Avatar from '@/components/home/avatar';
import IntroText from '@/components/home/intro-text';
import { Article } from '@/models/article.model';
import { route } from '@/configs/routes.config';
import PageHeading from '@/components/commons/page-heading';
import NoScrollLink from '@/components/commons/no-scroll-link';
import Socials from '@/components/home/socials';
import ArticleList from '@/components/articles/article-list';
import useTrans from '@/hooks/useTrans';

const HomePage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  articles,
}) => {
  const i18n = useTrans();

  return (
    <Layout title={i18n.home.title} description={i18n.home.description}>
      <div className="flex-col space-y-10 md:space-y-16">
        <div
          className="flex flex-wrap md:flex-nowrap
            space-y-5 md:space-y-0 md:space-x-20
            items-center justify-center md:justify-start"
        >
          <div className="flex-grow-1 flex flex-col space-y-3 items-center">
            <Avatar />
            <Socials />
          </div>
          <div className="flex-grow-3">
            <IntroText />
          </div>
        </div>

        <div>
          <PageHeading>{i18n.home.popularArticles}</PageHeading>

          <div className="mt-8">
            <ArticleList articles={articles} />
          </div>

          <div className="mt-10 text-center">
            <NoScrollLink href={route.articles.path}>
              <a
                className="text-xl duration-200
                  hover:font-bold
                  text-dracula-purple hover:text-dracula-pink"
              >
                {i18n.home.moreArticles}
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

  articles.sort(
    (a1, a2) => new Date(a2.date).getTime() - new Date(a1.date).getTime()
  );
  return {
    props: {
      articles: articles.slice(0, 3),
    },
  };
};

export default HomePage;
