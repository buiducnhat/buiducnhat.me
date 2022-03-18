import React from 'react';
import Image from 'next/image';

import { curveTransition } from '@/components/animations/transitions';
import { fadeRightVariants } from '@/components/animations/variants';
import { MotionDiv } from '@/components/animations';

function Avatar() {
  return (
    <MotionDiv
      initial="initial"
      animate="animate"
      whileHover={{ scale: 1.1, transition: curveTransition }}
      variants={fadeRightVariants}
      custom={0.5}
      className="card-shadow w-32 h-32
        overflow-hidden
        bg-cover bg-center rounded-full
        border-2 border-dracula-purple"
    >
      <Image
        src="/assets/images/avatar.jpg"
        width={256}
        height={256}
        objectFit="cover"
        alt="avatar"
      />
    </MotionDiv>
  );
}

export default Avatar;
