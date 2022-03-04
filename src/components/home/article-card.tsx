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
        'w-full min-h-[10rem] ' + 'flex ' + 'rounded-xl ' + 'card-shadow'
      }
    >
      <div
        className={
          'p-5 rounded-xl md:rounded-r-none w-full md:basis-4/5 ' +
          'bg-gradient-to-r ' +
          'from-primary-200 to-primary-100 ' +
          'dark:from-gray-900 dark:to-gray-800 ' +
          'hover:bg-gradient-to-tr'
        }
      >
        <Link passHref href={`${route.articles.path}/${article.slug}`}>
          <h2
            className={
              'mb-3 inline ' +
              'text-2xl md:text-3xl font-bold ' +
              'text-primary-500 dark:text-primary-500 ' +
              'hover:text-primary-700 dark:hover:text-primary-300 ' +
              'cursor-pointer'
            }
          >
            {article.title}
          </h2>
        </Link>

        <div className="flex flex-wrap space-x-3">
          {article.tags.map((tag: string, key: number) => (
            <div key={key} className="px-1 border-b-2 border-primary-500">
              <span>{tag}</span>
            </div>
          ))}
        </div>

        <div>
          <h3 className="truncate text-base md:text-xl">
            {article.description}
          </h3>
        </div>
        <div className="mt-3">
          <span className="text-slate-600 dark:text-slate-400">
            {article.date}
          </span>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url('/images/placeholder.png')` }}
        className="z-0 basis-0 md:basis-1/5 rounded-r-xl bg-cover invisible md:visible"
      />
    </motion.div>
  );
}

export default ArticleCard;
