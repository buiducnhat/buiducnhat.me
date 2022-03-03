import React from 'react';
import { motion, Variants } from 'framer-motion';

const pText1 = 'Hey!👋';
const pText2 =
  'My name is Nhat and I am a Full Stack Developer and an open source lover from Vietnam.';
const pText3 =
  "This is my portfolio, where I write about the things I'm working on and share my experience.";
const variants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

function IntroText() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ type: 'spring', duration: 2 }}
      whileHover={{ scale: 1.05 }}
      variants={variants}
      className={
        'flex-column p-5 space-y-4 rounded-xl select-none ' +
        'text-white ' +
        'bg-gradient-to-tr from-primary-600 to-secondary-600 ' +
        'dark:from-primary-700 dark:to-secondary-700 ' +
        'hover:to-primary-500 hover:from-secondary-500 ' +
        'dark:hover:to-primary-800 dark:hover:from-secondary-800 '
      }
    >
      <p className="text-3xl md:text-4xl">{pText1}</p>
      <p className="text-xl md:text-2xl">{pText2}</p>
      <p className="text-xl md:text-2xl">{pText3}</p>
    </motion.div>
  );
}

export default IntroText;
