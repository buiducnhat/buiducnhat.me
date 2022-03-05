import React, { Ref, useEffect, useRef } from 'react';
import { FaSearch as SearchIcon } from 'react-icons/fa';

interface SearchModalProps {
  show: boolean;
  setShow: any;
}

function useOutsideAlerter(ref: any, setShow: any) {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref?.current && !ref.current.contains(event.target)) {
        setShow(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, setShow]);
}

function SearchModal({ show, setShow }: SearchModalProps) {
  const ref = useRef(null);
  useOutsideAlerter(ref, setShow);
  return (
    <div
      className={
        (show ? '' : 'hidden ') +
        'fixed z-[1001] inset-0 ' +
        ' bg-dracula-darker-800 bg-opacity-60 backdrop-blur-sm ' +
        'overflow-y-auto h-full w-full ' +
        'flex items-center justify-center'
      }
    >
      <div ref={ref} className="max-w-xl flex items-center text-xl">
        <input
          type="text"
          placeholder="Search for anything..."
          className={
            'form-input px-4 py-3 bg-transparent text-xl ' +
            'border-0 outline-none focus:ring-0 ' +
            'border-b-2 border-dracula-pink ' +
            'focus:border-dracula-purple'
          }
        />
        <SearchIcon />
      </div>
    </div>
  );
}

export default SearchModal;
