import React, { HTMLProps, InputHTMLAttributes } from 'react';

import styles from './switch.module.css';

interface SwitchProps extends HTMLProps<HTMLInputElement> {
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
        className={`${styles.toggleBg} bg-gray-200 border-2 border-primary-200 h-6 w-11 rounded-full duration-300`}
      ></div>
      {children}
    </label>
  );
}

export default Switch;
