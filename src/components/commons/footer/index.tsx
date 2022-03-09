import React from 'react';
import {
  FaFacebook as FacebookIcon,
  FaGithub as GithubIcon,
  FaLinkedin as LinkedinIcon,
  FaEnvelope as EmailIcon,
} from 'react-icons/fa';
import NoScrollLink from '@/components/commons/no-scroll-link';

function Footer() {
  return (
    <footer className="w-full bg-dracula-purple-50 dark:bg-dracula-darker-800">
      <div className="container-layout min-h-[theme('spacing.20')] flex items-center">
        <span className="text-sm sm:text-base text-dracula-purple font-bold">
          © 2022 Gerpan
        </span>

        <div className="flex ml-auto space-x-4 text-xl sm:text-2xl">
          <NoScrollLink href="https://github.com/gerpann">
            <a
              target="_blank"
              className="text-slate-900 dark:text-white hover:scale-110 duration-200"
            >
              <GithubIcon />
            </a>
          </NoScrollLink>
          <NoScrollLink href="https://facebook.com/gerpan.4701">
            <a
              target="_blank"
              className="text-sky-500 bg-white rounded-full hover:scale-110 duration-200"
            >
              <FacebookIcon />
            </a>
          </NoScrollLink>
          <NoScrollLink href="https://linkedin.com/in/nhat-bui-a97373158">
            <a
              target="_blank"
              className="text-sky-600 bg-white hover:scale-110 duration-200"
            >
              <LinkedinIcon />
            </a>
          </NoScrollLink>
          <NoScrollLink href="mail:nhaths4701@gmail.com">
            <a
              target="_blank"
              className="text-dracula-blue dark:text-dracula-light hover:scale-110 duration-200"
            >
              <EmailIcon />
            </a>
          </NoScrollLink>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
