import React from 'react';
import Link from 'next/link';

import { Article } from '@/models/article.model';
import { route } from '@/configs/routes.config';
import { MotionDiv } from '@/components/animations';
import { fadeUpVariants } from '../animations/variants';

interface ArticleCardProps {
  article: Article;
  index?: number;
}

function ArticleCard({ article, index }: ArticleCardProps) {
  index = index || 0;

  return (
    <MotionDiv
      variants={{ ...fadeUpVariants, hovering: { translateY: '-5%' } }}
      custom={index / 5}
      initial="initial"
      animate="animate"
      whileHover="hovering"
      className={'w-full flex rounded-xl overflow-hidden ' + 'card-shadow'}
    >
      <div
        className={
          'p-5 w-full md:w-3/4 ' +
          'bg-gradient-to-tr ' +
          'from-dracula-purple-100 to-dracula-light-50 ' +
          'dark:from-dracula-darker-900 dark:to-dracula-darker-800'
        }
      >
        <Link passHref href={`${route.articles.path}/${article.slug}`}>
          <h2
            className={
              'break-words leading-5 ' +
              'text-lg sm-text:xl md:text-2xl font-bold ' +
              'text-dracula-pink ' +
              'hover:text-dracula-pink-500 dark:hover:text-dracula-pink-500 ' +
              'cursor-pointer duration-100 '
            }
          >
            {article.title}
          </h2>
        </Link>

        <div className="mt-3 flex flex-wrap space-x-3">
          {article.tags.map((tag: string, key: number) => (
            <div
              key={key}
              className={
                'text-sm md:text-base font-mono font-semibold tracking-tighter ' +
                'text-dracula-purple-400 dark:text-dracula-purple ' +
                'border-b-2 border-dracula-purple-400 dark:border-dracula-purple'
              }
            >
              <span>{tag}</span>
            </div>
          ))}
        </div>

        <div>
          <p
            className={
              'text-ellipsis whitespace-nowrap overflow-hidden text-sm md:text-base ' +
              'text-dracula-blue-500 dark:text-dracula-blue-400'
            }
          >
            {article.description}
          </p>
        </div>
        <div className="mt-3">
          <span className="text-sm md:text-base text-dracula-blue-400 dark:text-dracula-blue-500">
            {article.date}
          </span>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${
            article.thumbnailUrl || '/images/placeholder.png'
          })`,
        }}
        className="bg-cover invisible md:visible md:w-1/4"
      />
    </MotionDiv>
  );
}

export default ArticleCard;
