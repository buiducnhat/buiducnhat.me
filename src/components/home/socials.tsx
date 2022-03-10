import React from 'react';
import {
  FaFacebook as FacebookIcon,
  FaGithub as GithubIcon,
  FaLinkedin as LinkedinIcon,
} from 'react-icons/fa';
import { motion } from 'framer-motion';

import { fadeRightVariants } from '@/components/animations/variants';
import { curveTransition } from '@/components/animations/transitions';
import NoScrollLink from '@/components/commons/no-scroll-link';

const socialsData = [
  {
    link: 'https://github.com/gerpann',
    icon: <GithubIcon />,
  },
  {
    link: 'https://facebook.com/gerpan.4701',
    icon: <FacebookIcon />,
  },
  {
    link: 'https://linkedin.com/in/nhat-bui-a97373158',
    icon: <LinkedinIcon />,
  },
];

function Socials() {
  return (
    <div
      className="flex space-x-4 text-xl sm:text-2xl 
      text-dracula-purple-400 dark:text-dracula-purple"
    >
      {socialsData.map((socialData, key) => (
        <NoScrollLink key={key} href={socialData.link} passHref>
          <motion.a
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2, transition: { ...curveTransition } }}
            variants={fadeRightVariants}
            custom={1 - key / 5}
            target="_blank"
          >
            {socialData.icon}
          </motion.a>
        </NoScrollLink>
      ))}
    </div>
  );
}

export default Socials;
