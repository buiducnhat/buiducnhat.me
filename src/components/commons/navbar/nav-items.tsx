import React from 'react';
import Link from 'next/link';

import { routes } from '@/configs/routes.config';

function NavItems() {
  return (
    <div className="hidden w-full lg:inline-flex lg:flex-grow lg:w-auto">
      <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
        {routes.map((route, key) => (
          <Link key={key} href={route.path}>
            <a className="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded-xl duration-300 text-primary-600 dark:text-primary-300 font-bold items-center justify-center hover:bg-primary-600 hover:text-white dark:hover:text-white">
              {route.title}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NavItems;
