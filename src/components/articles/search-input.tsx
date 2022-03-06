import React, { Dispatch, SetStateAction, useRef } from 'react';
import { FaSearch as SearchIcon } from 'react-icons/fa';

interface SearchArticlesInputProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

function SearchArticlesInput({ value, setValue }: SearchArticlesInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex items-center space-x-3">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search for anything..."
        className={
          'form-input p-2 pl-0 sm:py-2 sm:px-4 bg-transparent text-base sm:text-lg ' +
          'text-dracula-purple-600 dark:text-dracula-purple ' +
          'border-0 outline-none focus:ring-0 ' +
          'border-b-2 border-dracula-pink ' +
          'sm:rounded-xl sm:border-2 ' +
          'sm:border-transparent ' +
          'focus:border-dracula-purple-600 dark:focus:border-dracula-purple ' +
          'sm:focus:border-dracula-purple-600/50 sm:dark:focus:border-dracula-purple/50'
        }
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <SearchIcon className="text-dracula-purple-600 dark:text-dracula-purple" />
    </div>
  );
}

export default SearchArticlesInput;
