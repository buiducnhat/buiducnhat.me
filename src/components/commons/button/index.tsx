import React from 'react';

import styles from './button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className={
        styles.ripple +
        ' ' +
        'inline-block px-6 py-2.5 rounded-xl ' +
        'text-white font-medium text-sm uppercase ' +
        'bg-dracula-purple-400 ' +
        'shadow-md shadow-dracula-purple-400 dark:shadow-dracula-purple-800 ' +
        'hover:shadow-lg hover:shadow-dracula-purple-400 dark:shadow-dracula-purple-800 ' +
        'duration-300'
      }
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
