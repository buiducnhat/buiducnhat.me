import React, { RefObject, useEffect, useRef } from 'react';
import { FaSearch as SearchIcon } from 'react-icons/fa';

interface SearchModalProps {
  show: boolean;
  handleClose: () => void;
}

function useOutsideClose(
  ref: RefObject<HTMLDivElement>,
  handleClose: () => void
) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref?.current && !ref.current.contains(event.target)) {
        handleClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handleClose]);
}

function SearchModal({ show, handleClose }: SearchModalProps) {
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClose(ref, handleClose);

  return (
    <div
      className={
        (show ? '' : 'hidden ') +
        'fixed z-[1001] inset-0 ' +
        ' bg-dracula-darker-200 dark:bg-dracula-darker-900 ' +
        'bg-opacity-50 dark:bg-opacity-50 backdrop-blur-sm ' +
        'overflow-y-auto h-full w-full ' +
        'flex items-center justify-center'
      }
    >
      <div
        ref={ref}
        className="max-w-xl flex items-center text-base sm:text-xl md:text-2xl"
      >
        <input
          type="text"
          placeholder="Search for anything..."
          className={
            'form-input p-2 bg-transparent text-base sm:text-xl md:text-2xl ' +
            'text-dracula-purple-600 dark:text-dracula-purple ' +
            'border-0 outline-none focus:ring-0 ' +
            'border-b-2 border-dracula-pink ' +
            'focus:border-dracula-purple-600 dark:focus:border-dracula-purple'
          }
        />
        <SearchIcon className="text-dracula-purple-600 dark:text-dracula-purple" />
      </div>
    </div>
  );
}

export default SearchModal;
