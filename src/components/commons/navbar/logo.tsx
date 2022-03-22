import React from 'react';
import Image from 'next/image';

import { route } from '@/configs/routes.config';
import NoScrollLink from '@/components/commons/no-scroll-link';

function Logo() {
  return (
    <NoScrollLink href={route.home.path}>
      <a
        className="p-2 rounded-xl
          h-10 w-10 sm:h-12 sm:w-12
          hover:shadow-xl hover:bg-gradient-to-tr
          hover:from-dracula-purple-200 hover:to-dracula-pink-200"
      >
        <Image
          src="/assets/images/logo.svg"
          width={64}
          height={64}
          alt="logo"
        />
      </a>
    </NoScrollLink>
  );
}

export default Logo;
