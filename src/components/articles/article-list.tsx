import React from 'react';

import { Article } from '@/models/article.model';
import { MotionDiv } from '@/components/animations';
import { fadeUpVariants } from '@/components/animations/variants';
import ArticleCard from '@/components/articles/article-card';

interface ArticleListProps {
  articles: Article[];
}

function ArticleList({ articles }: ArticleListProps) {
  return (
    <>
      {articles?.length ? (
        articles?.map((article, key) => (
          <MotionDiv
            key={key}
            variants={{ ...fadeUpVariants, hovering: { translateY: '-5%' } }}
            custom={0.5 + key * 0.2}
            initial="initial"
            animate="animate"
            whileHover="hovering"
            className="w-full h-48 flex rounded-xl overflow-hidden card-shadow"
          >
            <ArticleCard article={article} />
          </MotionDiv>
        ))
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}

export default ArticleList;
