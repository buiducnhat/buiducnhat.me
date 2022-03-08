import React from 'react';
import { ButtonProps } from 'react-html-props';

function ButtonGradient({ children, ...rest }: ButtonProps) {
  return (
    <button
      className={
        'inline-block px-6 py-2.5 rounded-xl ' +
        'text-white font-medium text-sm uppercase ' +
        'bg-gradient-to-tr ' +
        'from-dracula-purple to-dracula-pink ' +
        'shadow-md shadow-dracula-purple-300 dark:shadow-dracula-purple-900 ' +
        'hover:bg-gradient-to-bl ' +
        'hover:shadow-lg hover:shadow-dracula-purple-300 dark:shadow-dracula-purple-900 ' +
        'duration-200'
      }
      {...rest}
    >
      {children}
    </button>
  );
}

export default ButtonGradient;
