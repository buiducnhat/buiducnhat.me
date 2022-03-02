import React from 'react';
import Link from 'next/link';

function NavItems() {
  return (
    <div className="hidden w-full lg:inline-flex lg:flex-grow lg:w-auto">
      <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
        <Link href="/">
          <a className="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded duration-300 text-primary-600 dark:text-primary-300 font-bold items-center justify-center hover:bg-primary-600 hover:text-white dark:hover:text-white">
            Home
          </a>
        </Link>
        <Link href="/">
          <a className="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded duration-300 text-primary-600 dark:text-primary-300 font-bold items-center justify-center hover:bg-primary-600 hover:text-white dark:hover:text-white">
            Blog
          </a>
        </Link>
        <Link href="/">
          <a className="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded duration-300 text-primary-600 dark:text-primary-300 font-bold items-center justify-center hover:bg-primary-600 hover:text-white dark:hover:text-white">
            Projects
          </a>
        </Link>
        <Link href="/">
          <a className="lg:inline-flex lg:w-auto w-full px-5 py-2 rounded duration-300 text-primary-600 dark:text-primary-300 font-bold items-center justify-center hover:bg-primary-600 hover:text-white dark:hover:text-white">
            About
          </a>
        </Link>
      </div>
    </div>
  );
}

export default NavItems;
