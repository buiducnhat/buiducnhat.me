import { motion } from 'framer-motion';
import {
  ButtonProps,
  DivProps,
  H1Props,
  H2Props,
  ImgProps,
  LIProps,
  PProps,
  ULProps,
} from 'react-html-props';

export const MotionDiv = motion<DivProps>('div');

export const MotionMain = motion<DivProps>('main');

export const MotionButton = motion<ButtonProps>('button');

export const MotionH1 = motion<H1Props>('h1');

export const MotionH2 = motion<H2Props>('h2');

export const MotionP = motion<PProps>('p');

export const MotionUl = motion<ULProps>('ul');

export const MotionLi = motion<LIProps>('li');

export const MotionImg = motion<ImgProps>('img');
