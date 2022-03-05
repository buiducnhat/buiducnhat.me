import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { route } from '@/configs/routes.config';

function Logo() {
  return (
    <Link href={route.home.path}>
      <a
        className={
          'p-2 rounded-xl ' +
          'hover:shadow-xl hover:bg-gradient-to-tr ' +
          'hover:from-dracula-purple-200 hover:to-dracula-purple-200'
        }
      >
        <Image src="/images/logo.svg" width={36} height={36} alt="logo" />
      </a>
    </Link>
  );
}

export default Logo;
