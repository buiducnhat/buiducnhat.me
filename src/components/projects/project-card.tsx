import { motion } from 'framer-motion';
import React from 'react';
import { MotionDiv } from '../animations';
import { curveTransition } from '@/components/animations/transitions';

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
      className="relative flex items-center h-96"
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
          w-full md:w-1/2
          flex flex-col space-y-3"
      >
        <motion.h2
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
        </motion.h2>

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

      <a href={url} target="_blank" rel="noreferrer">
        {
          // eslint-disable-next-line @next/next/no-img-element
          <motion.img
            variants={{
              initial: { opacity: 0, y: 100 },
              animate: { opacity: 1, y: 0 },
            }}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.5 }}
            className="absolute top-0 ltr:right-0 rtl:left-0
              h-96 w-2/3
              rounded-xl
              brightness-75 dark:brightness-50 blur-[1px]
              hover:brightness-100 dark:hover:brightness-100 
              hover:blur-none hover:scale-105
              ring-1 ring-dracula-pink
              object-cover
              duration-200"
            src={image}
            alt={name}
          />
        }
      </a>
    </div>
  );
}

export default ProjectCard;
