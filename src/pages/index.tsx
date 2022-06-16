import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { getDocs, collection, orderBy, limit, query } from 'firebase/firestore';

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
import { firestore } from '@/configs/firebase.config';

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
  const q = query(
    collection(firestore, 'articles'),
    orderBy('createdAt', 'desc'),
    limit(3)
  );
  const snapshots = await getDocs(q);
  const articles = snapshots.docs.map((snapshot) => ({
    ...snapshot.data(),
    createdAt: snapshot.data().createdAt.toMillis(),
  })) as Article[];

  return {
    props: {
      articles,
    },
  };
};

export default HomePage;
