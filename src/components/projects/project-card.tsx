import React from 'react';

import { curveTransition } from '@/components/animations/transitions';
import { MotionDiv, MotionH2, MotionImg } from '@/components/animations';
import { fadeUpVariants } from '../animations/variants';

interface ProjectCardProps {
  index: number;
  name: string;
  description?: string;
  image: string;
  url: string;
  tags: string[];
}

function ProjectCard({
  index,
  name,
  description,
  image,
  url,
  tags,
}: ProjectCardProps) {
  return (
    <div
      className="relative flex items-center
        h-fit sm:h-96
        bg-dracula-purple-100 dark:bg-dracula-blue-900
        sm:bg-inherit dark:sm:bg-inherit
        p-3 sm:p-0
        rounded-xl sm:rounded-none"
      dir={index % 2 === 0 ? 'rtl' : 'ltr'}
    >
      <MotionDiv
        transition={{
          ...curveTransition,
          delayChildren: 0.5,
          staggerChildren: 0.2,
        }}
        initial="initial"
        animate="animate"
        className="z-10
          w-full sm:w-1/2
          flex flex-col space-y-3"
      >
        <MotionH2
          variants={{
            initial: { opacity: 0, y: 50 },
            animate: { opacity: 1, y: 0 },
          }}
          className="text-lg md:text-xl font-bold mb-1
              text-dracula-dark dark:text-dracula-light"
        >
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="hover:text-dracula-purple duration-200"
          >
            {name}
          </a>
        </MotionH2>

        <MotionDiv
          variants={{
            initial: { opacity: 0, y: 50 },
            animate: { opacity: 1, y: 0 },
          }}
          className="p-3
            rounded-xl
            bg-dracula-pink-50 dark:bg-dracula-pink-900
            text-dracula-pink-900 dark:text-dracula-pink-50
            ltr:text-left rtl:text-right
            shadow-lg"
        >
          <p>{description}</p>
        </MotionDiv>

        <MotionDiv
          variants={{
            initial: { opacity: 0, y: 50 },
            animate: { opacity: 1, y: 0 },
          }}
          className="flex"
        >
          {tags.map((tag, key) => (
            <div
              key={key}
              className="mx-1 px-3 py-1 rounded-xl
                text-sm
                text-dracula-purple-900 dark:text-dracula-purple-50
                bg-dracula-purple-100 dark:bg-dracula-purple-900"
            >
              {tag}
            </div>
          ))}
        </MotionDiv>
      </MotionDiv>

      <a
        className="hidden sm:block"
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        {
          <MotionImg
            variants={fadeUpVariants}
            custom={0.5}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.05 }}
            className="absolute top-0 ltr:right-0 rtl:left-0
              h-96 w-2/3
              rounded-xl
              brightness-75 dark:brightness-50 blur-[1px]
              hover:brightness-100 dark:hover:brightness-100 
              hover:blur-none
              ring-1 ring-dracula-pink
              object-cover
              duration-100"
            src={image}
            alt={name}
          />
        }
      </a>
    </div>
  );
}

export default ProjectCard;
