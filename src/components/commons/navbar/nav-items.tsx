import React from 'react';
import Link from 'next/link';

import { routes } from '@/configs/routes.config';

function NavItems() {
  return (
    <div className={'hidden md:flex space-x-1 ml-auto'}>
      {routes.map((route, key) => (
        <Link key={key} href={route.path}>
          <a
            className={
              'px-5 py-2 rounded-xl ' +
              'text-dracula-pink font-bold ' +
              'hover:bg-gradient-to-tr hover:from-dracula-pink-500 hover:to-dracula-purple-500 ' +
              'dark:hover:from-dracula-pink-600 dark:hover:to-dracula-purple-600 ' +
              'hover:text-white dark:hover:text-white ' +
              'duration-300'
            }
          >
            {route.title}
          </a>
        </Link>
      ))}
    </div>
  );
}

export default NavItems;
