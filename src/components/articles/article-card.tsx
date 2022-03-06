import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { Article } from '@/models/article.model';
import { route } from '@/configs/routes.config';

function ArticleCard({ article, index }: { article: Article; index: number }) {
  return (
    <motion.div
      initial={{ y: 50 }}
      animate={{
        y: 0,
        transition: { type: 'spring', delay: index / 5, duration: 0.6 },
      }}
      whileHover={{ y: -10 }}
      className={
        'w-full min-h-[10rem] ' +
        'flex overflow-hidden ' +
        'rounded-xl ' +
        'card-shadow'
      }
    >
      <div
        className={
          'p-5 basis-full md:basis-4/5 ' +
          'bg-gradient-to-tr ' +
          'from-dracula-purple-100 to-dracula-light-50 ' +
          'dark:from-dracula-darker-900 dark:to-dracula-darker-800'
        }
      >
        <Link passHref href={`${route.articles.path}/${article.slug}`}>
          <h2
            className={
              'inline ' +
              'text-xl sm:text-2xl md:text-3xl font-bold ' +
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
                'text-sm sm:text-base font-mono font-semibold tracking-tighter ' +
                'text-dracula-purple-400 dark:text-dracula-purple ' +
                'border-b-2 border-dracula-purple-400 dark:border-dracula-purple'
              }
            >
              <span>{tag}</span>
            </div>
          ))}
        </div>

        <div>
          <h3
            className={
              'truncate text-sm sm:text-base md:text-lg ' +
              'text-dracula-blue-500 dark:text-dracula-blue-400'
            }
          >
            {article.description}
          </h3>
        </div>
        <div className="mt-3">
          <span className="text-sm sm:text-base text-dracula-blue-400 dark:text-dracula-blue-500">
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
        className="basis-0 md:basis-1/5 rounded-r-xl bg-cover invisible md:visible"
      />
    </motion.div>
  );
}

export default ArticleCard;
