import React, { ReactNode } from 'react';

interface PageHeadingProps {
  children: ReactNode;
}

function PageHeading({ children }: PageHeadingProps) {
  return (
    <h1
      className={
        'inline text-xl sm:text-2xl md:text-3xl font-bold text-transparent select-none ' +
        'border-b-4 border-dracula-purple ' +
        'bg-clip-text bg-gradient-to-tr ' +
        'from-dracula-purple to-dracula-pink ' +
        'hover:bg-gradient-to-bl'
      }
    >
      {children}
    </h1>
  );
}

export default PageHeading;
