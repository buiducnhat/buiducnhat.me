import React from 'react';
import { motion, Variants } from 'framer-motion';

import { INTRO_TEXT } from '@/configs/constants/intro-text.constant';

function IntroText() {
  const { pText1, pText2, pText3 } = INTRO_TEXT;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ type: 'spring', duration: 1 }}
      whileHover={{ scale: 1.05 }}
      variants={{
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
      }}
      className={
        'flex-column p-5 space-y-4 rounded-xl select-none ' +
        'text-white ' +
        'card-shadow ' +
        'bg-gradient-to-tr from-dracula-pink to-dracula-purple ' +
        'dark:from-dracula-pink-600 dark:to-dracula-purple-600 ' +
        'hover:bg-gradient-to-bl dark:hover:bg-gradient-to-bl'
      }
    >
      <p className="text-2xl md:text-3xl">{pText1}</p>
      <p className="text-xl md:text-2xl">{pText2}</p>
      <p className="text-xl md:text-2xl">{pText3}</p>
    </motion.div>
  );
}

export default IntroText;
