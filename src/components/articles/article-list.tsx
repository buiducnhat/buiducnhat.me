import React from 'react';

import { Article } from '@/models/article.model';
import { MotionDiv } from '@/components/animations';
import { fadeUpVariants } from '@/components/animations/variants';
import ArticleCard from '@/components/articles/article-card';
import { curveTransition } from '../animations/transitions';

interface ArticleListProps {
  articles: Article[];
}

function ArticleList({ articles }: ArticleListProps) {
  return (
    <MotionDiv
      transition={{
        ...curveTransition,
        delayChildren: 0.5,
        staggerChildren: 0.1,
      }}
      initial="hidden"
      animate="show"
      className="flex flex-col space-y-8"
    >
      {articles?.length ? (
        articles?.map((article, key) => (
          <MotionDiv
            key={key}
            variants={{
              hidden: { opacity: 0, x: -50 },
              show: { opacity: 1, x: 0 },
            }}
            className="w-full h-48 flex rounded-xl overflow-hidden card-shadow"
          >
            <ArticleCard article={article} />
          </MotionDiv>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </MotionDiv>
  );
}

export default ArticleList;
