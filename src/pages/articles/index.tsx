import { useEffect, useState } from 'react';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { query, collection, getDocs } from 'firebase/firestore';

import Layout from '@/templates/layout';
import { Article } from '@/models/article.model';
import PageHeading from '@/components/commons/page-heading';
import SearchArticlesInput from '@/components/articles/search-input';
import ArticleList from '@/components/articles/article-list';
import useTrans from '@/hooks/useTrans';
import { firestore } from '@/configs/firebase.config';

const ArticlesPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (
  props
) => {
  const i18n = useTrans();

  const [articles, setArticles] = useState(props.articles);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    setArticles(
      props.articles.filter((article) =>
        article.title.toLowerCase().includes(searchInput.toLowerCase())
      )
    );
  }, [props.articles, searchInput]);

  return (
    <Layout title={i18n.article.title} description={i18n.article.description}>
      <div className="flex flex-col">
        <div className="mb-3 flex flex-wrap space-y-3 sm:space-y-0">
          <div className="basis-full sm:basis-1/3">
            <PageHeading>{i18n.article.heading}</PageHeading>
          </div>
          <div className="basis-full sm:basis-0 sm:ml-auto">
            <SearchArticlesInput
              value={searchInput}
              setValue={setSearchInput}
            />
          </div>
        </div>

        <div className="mt-8">
          <ArticleList articles={articles} />
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<{
  articles: Article[];
}> = async () => {
  const q = query(collection(firestore, 'articles'));
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

export default ArticlesPage;
