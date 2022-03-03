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
    <footer className="w-full bg-primary-200 dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-20 flex items-center">
        <span className="text-xl text-primary-600 dark:text-primary-300 font-bold">
          © 2022 Gerpan
        </span>

        <div className="flex ml-auto space-x-4">
          <Link href="https://github.com/gerpann">
            <a
              target="_blank"
              className="text-2xl text-slate-900 dark:text-white hover:scale-110 duration-200"
            >
              <GithubIcon />
            </a>
          </Link>
          <Link href="https://facebook.com/gerpan.4701">
            <a
              target="_blank"
              className="text-2xl text-sky-500 bg-white rounded-full hover:scale-110 duration-200"
            >
              <FacebookIcon />
            </a>
          </Link>
          <Link href="https://linkedin.com/in/nhat-bui-a97373158">
            <a
              target="_blank"
              className="text-2xl text-sky-600 bg-white hover:scale-110 duration-200"
            >
              <LinkedinIcon />
            </a>
          </Link>
          <Link href="mail:nhaths4701@gmail.com">
            <a
              target="_blank"
              className="text-2xl text-slate-500 dark:text-gray-50 hover:scale-110 duration-200"
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
