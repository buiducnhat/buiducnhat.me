import React from 'react';

import { routes } from '@/configs/routes.config';
import NoScrollLink from '@/components/commons/no-scroll-link';
import useTrans from '@/hooks/useTrans';

export interface MobileNavbarProps {
  open: boolean;
}

const MobileNavItems: React.FC<MobileNavbarProps> = ({ open }) => {
  const i18n = useTrans();

  return (
    <div
      className={
        `${open ? '' : 'hidden '} ` + 'flex flex-col md:hidden w-full pb-3'
      }
    >
      {routes.map((route, key) => (
        <NoScrollLink key={key} href={route.path}>
          <a
            className="w-full px-3 py-2 text-center rounded-xl
              text-sm
              text-dracula-purple font-bold
              hover:bg-gradient-to-tr
              hover:from-dracula-purple-500 hover:to-dracula-pink-500
              dark:hover:from-dracula-purple-600 dark:hover:to-dracula-pink-600
              hover:text-white dark:hover:text-white hover:shadow-lg"
          >
            {i18n.navbar[route.title]}
          </a>
        </NoScrollLink>
      ))}
    </div>
  );
};

export default MobileNavItems;
