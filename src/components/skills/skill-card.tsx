import React, { useContext } from 'react';
import { usePalette } from 'react-palette';

import { ThemeContext } from '@/features/theme/theme.context';
import Image from 'next/image';

interface SkillCardProps {
  title: string;
  description: string;
  url: string;
  imgUrl: string;
}

function SkillCard({ title, description, url, imgUrl }: SkillCardProps) {
  const { data: background } = usePalette(imgUrl);

  const [theme] = useContext(ThemeContext);

  return (
    <a href={url} target="_blank" rel="noreferrer">
      <div
        className="p-5 flex space-x-4
          rounded-xl
          bg-gradient-to-tr
          from-dracula-purple-100 to-dracula-light-50
          dark:from-dracula-darker-900 dark:to-dracula-darker-800
          cursor-pointer
          card-shadow"
      >
        <div
          className="flex items-center justify-center
            relative 
            rounded-xl
            min-w-[theme('spacing.16')] p-2
            bg-dracula-light
            overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-25"
            style={{
              background:
                theme.type === 'light'
                  ? background.lightVibrant
                  : background.darkVibrant,
            }}
          />
          <Image src={imgUrl} alt={`${title} logo`} width={48} height={48} />
        </div>

        <div className="flex flex-col">
          <h3
            className="text-base
            font-bold 
          text-dracula-pink"
          >
            {title}
          </h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </a>
  );
}

export default SkillCard;
