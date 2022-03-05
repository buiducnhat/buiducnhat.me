import React from 'react';

interface MobileMenuButtonProps {
  onClick: () => void;
}

function MobileMenuButton({ onClick }: MobileMenuButtonProps) {
  return (
    <button
      className={
        'md:hidden inline-flex p-3 rounded-xl ' +
        'text-white hover:text-dracula-purple outline-none ' +
        'focus:bg-dracula-purple-100 dark:focus:bg-slate-900'
      }
      onClick={onClick}
    >
      <svg
        className="w-6 h-6 text-dracula-purple"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  );
}

export default MobileMenuButton;
