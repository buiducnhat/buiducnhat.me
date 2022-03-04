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
              'text-primary-500 dark:text-primary-300 font-bold ' +
              'hover:bg-gradient-to-tr hover:from-primary-500 hover:to-secondary-500 ' +
              'dark:hover:from-primary-700 dark:hover:to-secondary-700 ' +
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
