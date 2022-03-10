import React from 'react';

import { curveTransition } from '@/components/animations/transitions';
import { fadeRightVariants } from '@/components/animations/variants';
import { MotionDiv } from '@/components/animations';

function Avatar() {
  return (
    <MotionDiv
      initial="initial"
      animate="animate"
      whileHover={{ scale: 1.2, transition: curveTransition }}
      variants={fadeRightVariants}
      custom={0.5}
      style={{ backgroundImage: 'url(/assets/images/avatar.jpg)' }}
      className={
        'card-shadow w-32 h-32 bg-cover bg-center rounded-full ' +
        'border-2 border-dracula-purple'
      }
    />
  );
}

export default Avatar;
