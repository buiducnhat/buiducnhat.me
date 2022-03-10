import React from 'react';
import {
  FaFacebook as FacebookIcon,
  FaGithub as GithubIcon,
  FaLinkedin as LinkedinIcon,
  FaEnvelope as EmailIcon,
} from 'react-icons/fa';

import NoScrollLink from '@/components/commons/no-scroll-link';

function Socials() {
  return (
    <div className="flex space-x-4 text-xl sm:text-2xl text-dracula-purple-400 dark:text-dracula-purple">
      <NoScrollLink href="https://github.com/gerpann">
        <a target="_blank" className="hover:scale-125 duration-200">
          <GithubIcon />
        </a>
      </NoScrollLink>
      <NoScrollLink href="https://facebook.com/gerpan.4701">
        <a target="_blank" className="hover:scale-125 duration-200">
          <FacebookIcon />
        </a>
      </NoScrollLink>
      <NoScrollLink href="https://linkedin.com/in/nhat-bui-a97373158">
        <a target="_blank" className="hover:scale-125 duration-200">
          <LinkedinIcon />
        </a>
      </NoScrollLink>
    </div>
  );
}

export default Socials;
