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
              'text-dracula-purple font-bold ' +
              'hover:bg-gradient-to-tr hover:from-dracula-purple-500 hover:to-dracula-pink-500 ' +
              'dark:hover:from-dracula-purple-600 dark:hover:to-dracula-pink-600 ' +
              'hover:text-white dark:hover:text-white hover:shadow-lg ' +
              'hover:shadow-dracula-pink-200 dark:hover:shadow-dracula-pink-900 ' +
              'duration-200'
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
