import React, { useContext } from 'react';
import { ThemeContext } from '@/features/theme/theme.context';
import { usePalette } from 'react-palette';
import NextLink from 'next/link';

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
    <NextLink href={url} passHref>
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
          className="relative 
            rounded-xl
            min-w-[theme('spacing.16')] p-2
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
          <img className="w-12 h-12" src={imgUrl} alt={`${title} logo`} />
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
    </NextLink>
  );
}

export default SkillCard;
