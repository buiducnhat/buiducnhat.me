import { Variants } from 'framer-motion';

import { curveTransition, pageTransition } from './transitions';

export const fadeUpVariants: Variants = {
  initial: { opacity: 0, y: 100 },
  animate: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { ...curveTransition, delay },
  }),
};

export const fadeLeftVariants: Variants = {
  initial: { opacity: 0, x: 100 },
  animate: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { ...curveTransition, delay },
  }),
};

export const fadeRightVariants: Variants = {
  initial: { opacity: 0, x: -100 },
  animate: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { ...curveTransition, delay },
  }),
};

export const pageVariants: Variants = {
  hidden: { opacity: 1, x: -200, y: 0 },
  enter: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { ...pageTransition, staggerChildren: 0.5 },
  },
  exit: {
    opacity: 0,
    x: 0,
    y: 100,
    transition: pageTransition,
  },
};
