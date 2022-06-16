import React from 'react';
import { format } from 'date-fns';

import { Article } from '@/models/article.model';
import { route } from '@/configs/routes.config';
import NoScrollLink from '@/components/commons/no-scroll-link';

interface ArticleCardProps {
  article: Article;
}

function ArticleCard({ article }: ArticleCardProps) {
  return (
    <>
      <div
        className="p-5 w-full md:w-3/4
          bg-gradient-to-tr
          from-dracula-purple-100 to-dracula-light-50
          dark:from-dracula-darker-900 dark:to-dracula-darker-800"
      >
        <NoScrollLink
          passHref
          href={`${route.articles.path}/${article.slug}`}
          scroll={false}
        >
          <h2
            className="break-words leading-5
              text-lg sm-text:xl md:text-2xl font-bold
              text-dracula-pink hover:text-dracula-pink-500
              dark:hover:text-dracula-pink-500
              cursor-pointer duration-100"
          >
            {article.title}
          </h2>
        </NoScrollLink>

        <div className="mt-3 flex flex-wrap space-x-3">
          {article.tags.map((tag: string, key: number) => (
            <div
              key={key}
              className="text-sm md:text-base
                font-mono font-semibold tracking-tighter
                text-dracula-purple-400 dark:text-dracula-purple
                border-b-2 border-dracula-purple-400 dark:border-dracula-purple"
            >
              <span>{tag}</span>
            </div>
          ))}
        </div>

        <div>
          <p
            className="text-ellipsis whitespace-nowrap overflow-hidden
              text-sm md:text-base
              text-dracula-blue-500 dark:text-dracula-blue-400"
          >
            {article.description}
          </p>
        </div>
        <div className="mt-3">
          <span
            className="text-sm md:text-base
              text-dracula-blue-400 dark:text-dracula-blue-500"
          >
            {format(new Date(article.createdAt), 'yyyy MMM, dd')}
          </span>
        </div>
      </div>

      <div
        style={{
          background: `url(${
            article.thumbnailUrl || '/images/placeholder.png'
          })`,
        }}
        className="hidden md:block md:w-1/4"
      >
        {
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={article.thumbnailUrl || '/images/placeholder.png'}
            alt="background"
            className="w-full h-full
              bg-no-repeat backdrop-blur object-contain"
          />
        }
      </div>
    </>
  );
}

export default ArticleCard;
