import React from 'react';
import { motion, Variants } from 'framer-motion';

function Avatar() {
  const variants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    hover: { scale: 1.2 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      whileHover="hover"
      variants={variants}
      transition={{ type: 'spring', duration: 1 }}
      style={{ backgroundImage: 'url(/images/avatar.jpg)' }}
      className={
        'card-shadow w-32 h-32 bg-cover bg-center rounded-full ' +
        'border-2 border-primary-800 dark:border-primary-900'
      }
    />
  );
}

export default Avatar;
