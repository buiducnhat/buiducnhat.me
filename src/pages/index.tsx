import type { NextPage } from 'next';
import Link from 'next/link';

import { Meta } from '@/templates/meta';
import Layout from '@/templates/layout';
import Avatar from '@/components/home/avatar';
import IntroText from '@/components/home/intro-text';
import { articlesMock } from '@/__mocks__/article.mock';
import ArticleCard from '@/components/home/article-card';

const Home: NextPage = () => {
  return (
    <Layout
      meta={
        <Meta title="Home | Gerpan" description="Gerpan personal website" />
      }
    >
      <div className="min-h-[calc(100vh-200px)] flex-col space-y-20">
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
          <h1 className="inline text-4xl font-bold text-primary-600 border-b-4 border-primary-500">
            Popular articles
          </h1>

          <div className="mt-10 flex flex-col space-y-8">
            {articlesMock.slice(0, 3).map((article, key) => (
              <ArticleCard key={key} index={key} article={article} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/blogs">
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

export default Home;
