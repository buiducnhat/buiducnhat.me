import React from 'react';
import { H2Props } from 'react-html-props';

function SubHeading({ children, ...rest }: H2Props) {
  return (
    <h2
      className="mb-5 text-lg md:text-xl font-bold
      text-dracula-purple-600 dark:text-dracula-purple-300"
      {...rest}
    >
      {children}
    </h2>
  );
}

export default SubHeading;
