import React from 'react';

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
      <div
        className="z-10
          w-full md:w-1/2
          flex flex-col space-y-3"
      >
        <h2
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
        </h2>
        <div
          className="p-3
            rounded-xl
            bg-dracula-pink-50 dark:bg-dracula-pink-900
            text-dracula-pink-900 dark:text-dracula-pink-50
            ltr:text-left rtl:text-right
            shadow-lg"
        >
          <p>{description}</p>
        </div>

        <div className="flex space-x-2">
          {tags.map((tag, key) => (
            <div
              key={key}
              className="px-3 py-1 rounded-xl
                text-sm
                text-dracula-purple-900 dark:text-dracula-purple-50
                bg-dracula-purple-100 dark:bg-dracula-purple-900"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      <a href={url} target="_blank" rel="noreferrer">
        {
          // eslint-disable-next-line @next/next/no-img-element
          <img
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
