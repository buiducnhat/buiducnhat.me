import React, { ReactNode } from 'react';

import styles from './button.module.css';

function Button({ children }: { children: ReactNode }) {
  return (
    <button
      className={
        styles.ripple +
        ' ' +
        'inline-block px-6 py-2.5 rounded-xl ' +
        'text-white font-medium text-sm uppercase ' +
        'bg-primary-600 ' +
        'shadow-md shadow-primary-300 dark:shadow-primary-900 ' +
        'hover:shadow-lg hover:shadow-primary-300 dark:shadow-primary-900 ' +
        'duration-200'
      }
    >
      {children}
    </button>
  );
}

export default Button;
