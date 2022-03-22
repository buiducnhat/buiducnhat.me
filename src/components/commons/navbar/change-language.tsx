import React, { useState } from 'react';
import { MotionDiv } from '@/components/animations';
import { fadeUpVariants } from '@/components/animations/variants';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useDetectClickOutside } from 'react-detect-click-outside';

import useTrans from '@/hooks/useTrans';

const languages = [
  { label: '🇬🇧 English', value: 'en' },
  { label: '🇻🇳 Tiếng Việt', value: 'vi' },
];

function ChangeLanguageBtn() {
  const i18n = useTrans();

  const router = useRouter();
  const { pathname, asPath, query } = router;

  const dropdownRef = useDetectClickOutside({
    onTriggered: () => setOpen(false),
  });

  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-30 lg:w-32" ref={dropdownRef}>
      <motion.button
        className="font-bold rounded-t-xl w-full
          hover:bg-dracula-purple-100 hover:dark:bg-dracula-darker-700
          text-sm px-4 py-2.5
          inline-flex items-center justify-end
          text-dracula-purple-300 hover:text-dracula-purple-500
          dark:text-dracula-purple-300"
        onClick={() => setOpen(!open)}
      >
        {i18n.navbar.language}
        <svg
          className="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </motion.button>

      <AnimatePresence>
        {open && (
          <MotionDiv
            variants={{ ...fadeUpVariants, exit: { y: 100, opacity: 0 } }}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute top-12 right-0 overflow-hidden
              z-10 w-30 lg:w-32
              text-base list-none
              rounded-b-xl shadow-lg
              divide-y divide-gray-100
              bg-dracula-purple-50 dark:bg-dracula-darker-800"
          >
            <ul>
              {languages.map((lang, index) => (
                <li
                  key={index}
                  className="block py-2 px-4 text-sm
                    cursor-pointer
                    text-dracula-dark dark:text-dracula-light
                    hover:bg-dracula-purple-100 dark:hover:bg-dracula-darker-600"
                  onClick={() =>
                    router.push({ pathname, query }, asPath, {
                      locale: lang.value,
                    })
                  }
                >
                  {lang.label}
                </li>
              ))}
            </ul>
          </MotionDiv>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ChangeLanguageBtn;
