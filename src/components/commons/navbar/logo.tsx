import React from 'react';
import Image from 'next/image';

import { route } from '@/configs/routes.config';
import NoScrollLink from '@/components/commons/no-scroll-link';

function Logo() {
  return (
    <NoScrollLink href={route.home.path}>
      <a
        className={
          'p-2 rounded-xl ' +
          'hover:shadow-xl hover:bg-gradient-to-tr ' +
          'hover:from-dracula-purple-200 hover:to-dracula-pink-200'
        }
      >
        <Image
          src="/assets/images/logo.svg"
          width={36}
          height={36}
          alt="logo"
        />
      </a>
    </NoScrollLink>
  );
}

export default Logo;
