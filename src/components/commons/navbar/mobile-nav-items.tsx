import React from 'react';
import Link from 'next/link';

export interface MobileNavbarProps {
  open: boolean;
}

const MobileNavItems: React.FC<MobileNavbarProps> = ({ open }) => {
  return (
    <div className={`${open ? '' : 'hidden'} lg:hidden w-full pb-3`}>
      <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
        <Link href="/">
          <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 text-center rounded text-primary-600 dark:text-primary-primary-300 font-bold items-center justify-center hover:bg-primary-600 hover:text-white ">
            Home
          </a>
        </Link>
        <Link href="/">
          <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 text-center rounded text-primary-600 dark:text-primary-primary-300 font-bold items-center justify-center hover:bg-primary-600 hover:text-white">
            Services
          </a>
        </Link>
        <Link href="/">
          <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 text-center rounded text-primary-600 dark:text-primary-primary-300 font-bold items-center justify-center hover:bg-primary-600 hover:text-white">
            About us
          </a>
        </Link>
        <Link href="/">
          <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 text-center rounded text-primary-600 dark:text-primary-primary-300 font-bold items-center justify-center hover:bg-primary-600 hover:text-white">
            Contact us
          </a>
        </Link>
      </div>
    </div>
  );
};

export default MobileNavItems;
