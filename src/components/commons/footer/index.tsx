import React from 'react';
import Link from 'next/link';
import {
  FaFacebook as FacebookIcon,
  FaGithub as GithubIcon,
  FaLinkedin as LinkedinIcon,
  FaEnvelope as EmailIcon,
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="w-full bg-dracula-purple-50 dark:bg-dracula-darker-800">
      <div className="container-layout min-h-[theme('spacing.20')] flex items-center">
        <span className="text-base sm:text-xl text-dracula-purple font-bold">
          © 2022 Gerpan
        </span>

        <div className="flex ml-auto space-x-4 text-xl sm:text-2xl">
          <Link href="https://github.com/gerpann">
            <a
              target="_blank"
              className="text-slate-900 dark:text-white hover:scale-110 duration-200"
            >
              <GithubIcon />
            </a>
          </Link>
          <Link href="https://facebook.com/gerpan.4701">
            <a
              target="_blank"
              className="text-sky-500 bg-white rounded-full hover:scale-110 duration-200"
            >
              <FacebookIcon />
            </a>
          </Link>
          <Link href="https://linkedin.com/in/nhat-bui-a97373158">
            <a
              target="_blank"
              className="text-sky-600 bg-white hover:scale-110 duration-200"
            >
              <LinkedinIcon />
            </a>
          </Link>
          <Link href="mail:nhaths4701@gmail.com">
            <a
              target="_blank"
              className="text-slate-500 dark:text-gray-50 hover:scale-110 duration-200"
            >
              <EmailIcon />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
