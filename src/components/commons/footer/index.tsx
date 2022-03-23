import React from 'react';
import {
  FaFacebook as FacebookIcon,
  FaGithub as GithubIcon,
  FaLinkedin as LinkedinIcon,
  FaEnvelope as EmailIcon,
} from 'react-icons/fa';

import { MY_NAME } from '@/configs/constants/common.constant';

function Footer() {
  return (
    <footer className="w-full">
      <div className="container-layout min-h-[theme('spacing.20')] flex items-center">
        <span className="text-sm sm:text-base text-dracula-purple font-bold">
          © 2022 {MY_NAME}
        </span>

        <div className="flex ml-auto space-x-4 text-xl sm:text-2xl">
          <a
            target="_blank"
            href="https://github.com/gerpann"
            className="text-slate-900 dark:text-white hover:scale-110 duration-200"
            rel="noreferrer"
          >
            <GithubIcon />
          </a>
          <a
            target="_blank"
            href="https://facebook.com/gerpan.4701"
            className="text-sky-500 bg-white rounded-full hover:scale-110 duration-200"
            rel="noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            target="_blank"
            href="https://linkedin.com/in/nhat-bui-a97373158"
            className="text-sky-600 bg-white hover:scale-110 duration-200"
            rel="noreferrer"
          >
            <LinkedinIcon />
          </a>
          <a
            target="_blank"
            href="mail:nhaths4701@gmail.com"
            className="text-dracula-blue dark:text-dracula-light hover:scale-110 duration-200"
            rel="noreferrer"
          >
            <EmailIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
