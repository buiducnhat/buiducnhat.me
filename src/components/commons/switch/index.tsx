import React from 'react';
import { InputProps } from 'react-html-props';

import styles from './switch.module.css';

interface SwitchProps extends InputProps {
  id: string;
  checked: boolean;
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
        className={
          `${styles.toggleBg} ` +
          'h-6 w-11 rounded-full ' +
          'bg-gray-100 border-2 border-dracula-purple-100 ' +
          'duration-300'
        }
      ></div>
      {children}
    </label>
  );
}

export default Switch;
