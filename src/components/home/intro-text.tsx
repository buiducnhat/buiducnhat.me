import React from 'react';
import { motion, Variants } from 'framer-motion';

const h1Text = 'Hey!👋';
const pText1 =
  'My name is Nhat and I am a Full Stack Developer and an open source lover from Vietnam.';
const pText2 =
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
      variants={variants}
      className={
        'flex-column p-5 space-y-4 rounded-xl ' +
        'bg-gradient-to-r from-purple-300 to-pink-300 ' +
        'dark:from-purple-600 dark:to-pink-600 ' +
        'hover:to-purple-400 hover:from-pink-400 ' +
        'dark:hover:to-purple-700 dark:hover:from-pink-700 '
      }
    >
      <h1 className="text-4xl">{h1Text}</h1>
      <p className="text-2xl">{pText1}</p>
      <p className="text-2xl">{pText2}</p>
    </motion.div>
  );
}

export default IntroText;
