import React from 'react';
import { motion, Variants } from 'framer-motion';

import { curveTransition } from '@/components/animations/transitions';
import { fadeUpVariants } from '@/components/animations/variants';

function Avatar() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover={{ scale: 1.2, transition: curveTransition }}
      variants={fadeUpVariants}
      style={{ backgroundImage: 'url(/assets/images/avatar.jpg)' }}
      className={
        'card-shadow w-32 h-32 bg-cover bg-center rounded-full ' +
        'border-2 border-dracula-purple'
      }
    />
  );
}

export default Avatar;
