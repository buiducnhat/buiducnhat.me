import { Transition } from 'framer-motion';

export const curveTransition: Transition = {
  type: 'spring',
  stiffness: 400,
  damping: 30,
  duration: 0.5,
};

export const pageTransition: Transition = {
  type: 'spring',
};
