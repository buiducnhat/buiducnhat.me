import { Variants } from 'framer-motion';

import { curveTransition } from './transitions';

export const fadeUpVariants: Variants = {
  initial: { opacity: 0, y: 50 },
  animate: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { ...curveTransition, delay },
  }),
};

export const fadeLeftVariants: Variants = {
  initial: { opacity: 0, x: 50 },
  animate: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { ...curveTransition, delay },
  }),
};
