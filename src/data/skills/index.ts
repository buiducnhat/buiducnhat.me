import { WEB_APP_SKILLS } from './web-dev';
import { TOOL_SKILLS } from './tool';
import { DATABASE_SKILLS } from './database';
import { DEVOPS_SKILLS } from './devops';
import { PROGRAMMING_LANGUAGE_SKILLS } from './programming-language';

export const SKILLS_DATA = {
  en: [
    {
      title: 'Programming Languages',
      data: PROGRAMMING_LANGUAGE_SKILLS,
    },
    {
      title: 'Web-App Development',
      data: WEB_APP_SKILLS,
    },
    {
      title: 'Database',
      data: DATABASE_SKILLS,
    },
    {
      title: 'DevOps',
      data: DEVOPS_SKILLS,
    },
    {
      title: 'Tools and OS',
      data: TOOL_SKILLS,
    },
  ],
  vi: [
    {
      title: 'Ngôn ngữ',
      data: PROGRAMMING_LANGUAGE_SKILLS,
    },
    {
      title: 'Phát triển Web App',
      data: WEB_APP_SKILLS,
    },
    {
      title: 'Cơ sở dữ liệu',
      data: DATABASE_SKILLS,
    },
    {
      title: 'DevOps',
      data: DEVOPS_SKILLS,
    },
    {
      title: 'Công cụ và hệ điều hành',
      data: TOOL_SKILLS,
    },
  ],
};
