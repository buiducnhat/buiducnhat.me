import React from 'react';
import Link from 'next/link';

import { routes } from '@/configs/routes.config';

export interface MobileNavbarProps {
  open: boolean;
}

const MobileNavItems: React.FC<MobileNavbarProps> = ({ open }) => {
  return (
    <div className={`${open ? '' : 'hidden'} lg:hidden w-full pb-3`}>
      <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
        {routes.map((route, key) => (
          <Link key={key} href={route.path}>
            <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 text-center rounded-xl text-primary-600 dark:text-primary-primary-300 font-bold items-center justify-center hover:bg-primary-600 hover:text-white ">
              {route.title}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileNavItems;
