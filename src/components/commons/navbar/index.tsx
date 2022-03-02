import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import NavItems from './nav-items';
import MobileNavItems from './mobile-nav-items';
import SwitchThemeModeButton from '@/components/commons/switch-theme-mode';

const Navbar = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false);

  const handleOpenMobileNav = () => setOpenMobileNav(!openMobileNav);

  return (
    <nav className="w-full bg-primary-50 dark:bg-gray-800 shadow-primary-200 dark:shadow-gray-900 shadow-md z-[1000] sticky top-0">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 min-h-16 flex items-center flex-wrap">
        {/**Brand */}
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            <Image src="/images/logo.svg" width={40} height={40} alt="logo" />
          </a>
        </Link>

        {/* Nav items on desktop */}
        <NavItems />

        <div className="ml-auto">
          <SwitchThemeModeButton />
        </div>

        {/* Mobile responsive button */}
        <button
          className="inline-flex p-3 hover:bg-primary-100 rounded lg:hidden text-white hover:text-primary-500 outline-none"
          onClick={handleOpenMobileNav}
        >
          <svg
            className="w-6 h-6 text-primary-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* Nav items on mobile */}
        <MobileNavItems open={openMobileNav} />
      </div>
    </nav>
  );
};

export default Navbar;
