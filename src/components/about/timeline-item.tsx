import React from 'react';

interface TimelineItemProps {
  title: string;
  subtitle?: string;
  image?: string;
  time?: string;
  detail?: string;
}

function TimelineItem({ title, subtitle, time, detail }: TimelineItemProps) {
  return (
    <>
      <span
        className="flex absolute -ml-9
          justify-center items-center
          w-6 h-6 rounded-full
          bg-dracula-purple-100 dark:bg-dracula-darker-700
          ring-8 ring-dracula-purple-50 dark:ring-dracula-darker-800"
      >
        <svg
          className="w-3 h-3 text-dracula-purple-600 dark:text-dracula-purple-300"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 
              00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
            clipRule="evenodd"
          ></path>
        </svg>
      </span>

      <div className="flex space-x-3 mb-1">
        <h3
          className="text-base md:text-xl font-semibold
            text-dracula-blue-800 dark:text-dracula-blue-50"
        >
          {title}
        </h3>
        <span
          className="bg-dracula-pink-50 dark:bg-dracula-blue-700
            text-xs md:text-sm font-normal
            flex items-center
            px-3 py-0.5 rounded-md
            text-dracula-pink-300 dark:text-dracula-pink-300"
        >
          {subtitle}
        </span>
      </div>

      <time
        className="block mb-2 text-sm leading-none
          text-dracula-blue-500 dark:text-dracula-blue-300"
      >
        {time}
      </time>
      <p
        className="mb-4 text-sm md:text-base font-light 
          text-dracula-dark-500 dark:text-dracula-dark-300"
      >
        {detail}
      </p>
    </>
  );
}

export default TimelineItem;
