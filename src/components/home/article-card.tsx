import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { Article } from '@/models/article.model';
function ArticleCard({ article, index }: { article: Article; index: number }) {
  return (
    <motion.div
      initial={{ y: 50 }}
      animate={{
        y: 0,
        transition: { type: 'spring', delay: index / 5, duration: 2 },
      }}
      whileHover={{ y: -10, transition: { type: 'spring', duration: 0.5 } }}
      className={
        'w-full h-40 ' +
        'flex ' +
        'rounded-xl ' +
        'shadow-xl shadow-primary-300 dark:shadow-md dark:shadow-primary-900'
      }
    >
      <div
        className={
          'p-5 rounded-l-xl md:basis-4/5 ' +
          'bg-gradient-to-l ' +
          'from-primary-200 to-primary-100 ' +
          'dark:from-gray-800 dark:to-gray-700 ' +
          'hover:border-l-4 hover:border-primary-500 duration-200'
        }
      >
        <Link passHref href={article.slug}>
          <h2
            className={
              'mb-3 ' +
              'text-3xl font-bold ' +
              'text-primary-500 dark:text-primary-500 ' +
              'hover:text-primary-700 dark:hover:text-primary-300 ' +
              'cursor-pointer'
            }
          >
            {article.title}
          </h2>
        </Link>
        <h3 className="text-xl">{article.description}</h3>
      </div>

      <div
        style={{ backgroundImage: `url('/images/placeholder.png')` }}
        className="h-full z-0 basis-0 md:basis-1/5 w-auto rounded-r-xl bg-cover invisible md:visible"
      ></div>
    </motion.div>
  );
}

export default ArticleCard;
