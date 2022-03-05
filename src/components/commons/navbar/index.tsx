import React, { useState } from 'react';

import NavItems from './nav-items';
import MobileNavItems from './mobile-nav-items';
import SwitchThemeModeButton from '@/components/commons/switch-theme-mode';
import MobileMenuButton from './mobile-menu-button';
import Logo from './logo';

const Navbar = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  const handleOpenMobileNav = () => setOpenMobileNav(!openMobileNav);

  return (
    <nav
      className={
        'w-full shadow-md z-[1000] sticky top-0 ' +
        'bg-dracula-pink-50 dark:bg-dracula-darker-800 ' +
        'shadow-dracula-pink-200 dark:shadow-dracula-darker-900'
      }
    >
      <div
        className={
          "container-layout min-h-0 md:min-h-[theme('spacing.16')] " +
          'flex items-center flex-wrap'
        }
      >
        <Logo />

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
