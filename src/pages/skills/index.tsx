import type { NextPage } from 'next';
import { H2Props } from 'react-html-props';

import Layout from '@/templates/layout';
import PageHeading from '@/components/commons/page-heading';
import { MotionLi, MotionUl } from '@/components/animations';
import { curveTransition } from '@/components/animations/transitions';
import { WEB_DEV_SKILLS } from '@/data/skills';

const SubHeadingText = ({ children, ...rest }: H2Props) => (
  <h2
    className="mb-5 text-xl md:text-2xl font-bold
      text-dracula-purple-600 dark:text-dracula-purple-300"
    {...rest}
  >
    {children}
  </h2>
);

const SkillsPage: NextPage = () => {
  return (
    <Layout title="Skills | Gerpan" description="Gerpan personal website">
      <PageHeading>My skills</PageHeading>

      <div className="mt-8">
        <SubHeadingText>Web Development</SubHeadingText>
        <MotionUl
          transition={{
            ...curveTransition,
            delayChildren: 0.5,
            staggerChildren: 0.2,
          }}
          initial="hidden"
          animate="show"
          className="relative border-l ml-2
            border-dracula-dark-100
            dark:border-dracula-dark-800"
        >
          {WEB_DEV_SKILLS.map((webDevSkill, key) => (
            <MotionLi
              key={key}
              variants={{
                hidden: { opacity: 0, x: -50 },
                show: { opacity: 1, x: 0 },
              }}
              className="mb-10 ml-6"
            >
              <div>{webDevSkill.title}</div>
            </MotionLi>
          ))}
        </MotionUl>
      </div>
    </Layout>
  );
};

export default SkillsPage;
