import React, { useEffect, useRef } from 'react';

interface ModalProps extends React.BaseHTMLAttributes<HTMLDivElement> {
  show: boolean;
  handleClose: () => void;
}

function Modal({ show, handleClose, children, ...props }: ModalProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Handle click outside main div
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (wrapperRef?.current && !wrapperRef.current.contains(event.target)) {
        handleClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef, handleClose]);

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
      <div ref={wrapperRef} {...props}>
        {children}
      </div>
    </div>
  );
}

export default Modal;
