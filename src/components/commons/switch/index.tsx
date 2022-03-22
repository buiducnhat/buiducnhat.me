import React from 'react';
import { InputProps } from 'react-html-props';

import styles from './switch.module.css';

interface SwitchProps extends InputProps {
  id: string;
  checked: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Switch({ id, children, checked, onChange, ...rest }: SwitchProps) {
  return (
    <label htmlFor={id} className="flex items-center cursor-pointer relative">
      <input
        type="checkbox"
        id={id}
        className="sr-only"
        checked={checked}
        onChange={onChange}
        {...rest}
      />
      <div
        className={`${styles.toggleBg}
          h-5 w-9 lg:h-6 lg:w-11 rounded-full
          bg-gray-100 border-2 border-dracula-purple-100
          duration-300`}
      />
      {children}
    </label>
  );
}

export default Switch;
