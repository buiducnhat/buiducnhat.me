import { motion } from 'framer-motion';
import { ButtonProps, DivProps } from 'react-html-props';

export const MotionDiv = motion<DivProps>('div');

export const MotionButton = motion<ButtonProps>('button');
