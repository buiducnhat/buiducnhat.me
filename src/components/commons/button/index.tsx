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
        'bg-dracula-pink ' +
        'shadow-md shadow-dracula-pink-300 dark:shadow-dracula-pink-900 ' +
        'hover:shadow-lg hover:shadow-dracula-pink-300 dark:shadow-dracula-pink-900 ' +
        'duration-200'
      }
    >
      {children}
    </button>
  );
}

export default Button;
