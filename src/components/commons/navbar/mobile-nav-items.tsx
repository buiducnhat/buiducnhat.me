import React from 'react';
import Link from 'next/link';

import { routes } from '@/configs/routes.config';

export interface MobileNavbarProps {
  open: boolean;
}

const MobileNavItems: React.FC<MobileNavbarProps> = ({ open }) => {
  return (
    <div
      className={
        `${open ? '' : 'hidden '} ` + 'flex flex-col md:hidden w-full pb-3 '
      }
    >
      {routes.map((route, key) => (
        <Link key={key} href={route.path}>
          <a className="w-full px-3 py-2 text-center rounded-xl text-dracula-purple font-bold">
            {route.title}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default MobileNavItems;
