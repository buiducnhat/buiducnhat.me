import { CAREER_DATA, EDUCATION_DATA } from '@/data/about';
import { SKILLS_DATA } from '@/data/skills';

const en = {
  navbar: {
    home: 'Home',
    article: 'Article',
    project: 'Project',
    skills: 'Skills',
    about: 'About',
    language: 'Language',
  },
  home: {
    title: 'Home',
    description:
      "Bùi Đức Nhật's personal website, contains knowledge, experience and projects for developers",
    hello: "Hello, I'm Nhat 👋",
    intro1:
      'I am a Software developer and an open source lover from Vietnam 🇻🇳🇻🇳🇻🇳.',
    intro2:
      "This is my portfolio, where I write about the things I'm working on and share my experience.",
    popularArticles: 'Popular Articles',
    moreArticles: 'More Articles',
  },
  article: {
    title: 'Articles',
    description:
      'Articles of Bùi Đức Nhật, developer articles, tutorials, etc.',
    heading: 'My articles',
  },
  skill: {
    title: 'Skills',
    heading: 'My skills',
    description: 'My skills and knowledge',
    skillData: SKILLS_DATA.en,
  },
  about: {
    title: 'About me',
    heading: 'About me',
    description: 'About Bùi Đức Nhật, contact, careers, education,...',
    career: 'Career',
    education: 'Education',
    careerData: CAREER_DATA.en,
    educationData: EDUCATION_DATA.en,
  },
};

export default en;
