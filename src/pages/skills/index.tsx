import type { NextPage } from 'next';

import Layout from '@/templates/layout';
import PageHeading from '@/components/commons/page-heading';
import { MotionDiv } from '@/components/animations';
import { curveTransition } from '@/components/animations/transitions';
import { TOOL_SKILLS, WEB_DEV_SKILLS } from '@/data/skills';
import SkillCard from '@/components/skills/skill-card';
import SubHeading from '@/components/commons/page-heading/sub-heading';

const SkillsPage: NextPage = () => {
  return (
    <Layout title="Skills | Gerpan" description="Gerpan personal website">
      <PageHeading>My skills</PageHeading>

      <div className="mt-8">
        <SubHeading>Web Development</SubHeading>
        <MotionDiv
          transition={{
            ...curveTransition,
            delayChildren: 0.5,
            staggerChildren: 0.2,
          }}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-6"
        >
          {WEB_DEV_SKILLS.map((item, key) => (
            <MotionDiv
              key={key}
              variants={{
                hidden: { opacity: 0, x: -50 },
                show: { opacity: 1, x: 0 },
              }}
              whileHover={{ translateY: '-5%' }}
            >
              <SkillCard {...item} />
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>

      <div className="mt-8">
        <SubHeading>Tools</SubHeading>
        <MotionDiv
          transition={{
            ...curveTransition,
            delayChildren: 0.5,
            staggerChildren: 0.2,
          }}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-6"
        >
          {TOOL_SKILLS.map((item, key) => (
            <MotionDiv
              key={key}
              variants={{
                hidden: { opacity: 0, x: -50 },
                show: { opacity: 1, x: 0 },
              }}
              whileHover={{ translateY: '-5%' }}
            >
              <SkillCard {...item} />
            </MotionDiv>
          ))}
        </MotionDiv>
      </div>
    </Layout>
  );
};

export default SkillsPage;
