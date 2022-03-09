import React from 'react';

import { INTRO_TEXT } from '@/configs/constants/intro-text.constant';
import { MotionDiv } from '@/components/animations';
import { curveTransition } from '@/components/animations/transitions';
import { fadeLeftVariants } from '@/components/animations/variants';

function IntroText() {
  const { pText1, pText2, pText3 } = INTRO_TEXT;

  return (
    <MotionDiv
      initial="initial"
      animate="animate"
      whileHover={{ scale: 1.05, transition: curveTransition }}
      variants={fadeLeftVariants}
      custom={0.25}
      className={
        'flex-column p-5 space-y-4 rounded-xl select-none ' +
        'text-white ' +
        'card-shadow ' +
        'bg-gradient-to-tr from-dracula-purple to-dracula-pink ' +
        'dark:from-dracula-purple-600 dark:to-dracula-pink-600 ' +
        'hover:bg-gradient-to-bl dark:hover:bg-gradient-to-bl'
      }
    >
      <p className="text-xl md:text-2xl">{pText1}</p>
      <p className="text-lg md:text-xl">{pText2}</p>
      <p className="text-lg md:text-xl">{pText3}</p>
    </MotionDiv>
  );
}

export default IntroText;
