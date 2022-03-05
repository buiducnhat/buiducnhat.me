import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import NavItems from './nav-items';
import MobileNavItems from './mobile-nav-items';
import SwitchThemeModeButton from '@/components/commons/switch-theme-mode';
import MobileMenuButton from './mobile-menu-button';
import { route } from '@/configs/routes.config';

const Navbar = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  const handleOpenMobileNav = () => setOpenMobileNav(!openMobileNav);

  return (
    <nav
      className={
        'w-full shadow-md z-[1000] sticky top-0 ' +
        'bg-primary-50 dark:bg-dracula-bg ' +
        'shadow-primary-200 dark:shadow-gray-900'
      }
    >
      <div
        className={
          "container-layout min-h-0 md:min-h-[theme('spacing.16')] " +
          'flex items-center flex-wrap'
        }
      >
        <Link href={route.home.path}>
          <a>
            <Image src="/images/logo.svg" width={40} height={40} alt="logo" />
          </a>
        </Link>

        <NavItems />

        <div className="ml-auto">
          <SwitchThemeModeButton />
        </div>

        <MobileMenuButton onClick={handleOpenMobileNav} />
        <MobileNavItems open={openMobileNav} />
      </div>
    </nav>
  );
};

export default Navbar;
