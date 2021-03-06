import React from 'react';

import { MotionDiv } from '@/components/animations';
import { curveTransition } from '@/components/animations/transitions';
import { fadeLeftVariants } from '@/components/animations/variants';
import useTrans from '@/hooks/useTrans';

function IntroText() {
  const t = useTrans();

  return (
    <MotionDiv
      initial="initial"
      animate="animate"
      whileHover={{ scale: 1.05, transition: curveTransition }}
      variants={fadeLeftVariants}
      custom={0.5}
      className={
        'flex-column p-5 space-y-4 rounded-xl select-none ' +
        'text-white ' +
        'card-shadow ' +
        'bg-gradient-to-tr from-dracula-purple to-dracula-pink ' +
        'dark:from-dracula-purple-600 dark:to-dracula-pink-600 ' +
        'hover:bg-gradient-to-bl dark:hover:bg-gradient-to-bl'
      }
    >
      <p className="text-2xl md:text-3xl text-center">{t.home.hello}</p>
      <p className="text-lg md:text-xl text-center">{t.home.intro1}</p>
      <p className="text-lg md:text-xl text-center">{t.home.intro2}</p>
    </MotionDiv>
  );
}

export default IntroText;
