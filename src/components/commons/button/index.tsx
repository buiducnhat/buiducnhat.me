import React, { ReactNode } from 'react';

function Button({ children }: { children: ReactNode }) {
  return (
    <button
      className={
        'inline-block px-6 py-2.5 ' +
        'bg-primary-600 text-white font-medium text-sm uppercase ' +
        'rounded-xl shadow-md shadow-primary-400 dark:shadow-primary-900 ' +
        'hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-400 dark:shadow-primary-900 ' +
        'active:bg-primary-500 ' +
        'duration-200'
      }
    >
      {children}
    </button>
  );
}

export default Button;
