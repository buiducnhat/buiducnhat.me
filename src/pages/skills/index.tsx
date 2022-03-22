import type { NextPage } from 'next';

import Layout from '@/templates/layout';
import PageHeading from '@/components/commons/page-heading';
import { MotionDiv } from '@/components/animations';
import { curveTransition } from '@/components/animations/transitions';
import { SKILLS_DATA } from '@/data/skills';
import SkillCard from '@/components/skills/skill-card';
import SubHeading from '@/components/commons/page-heading/sub-heading';
import { MY_NAME } from '@/configs/constants/common.constant';

const SkillsPage: NextPage = () => {
  return (
    <Layout
      title={`Skills | ${MY_NAME}`}
      description="Bùi Đức Nhật skills page"
    >
      <PageHeading>My skills</PageHeading>

      <div className="mt-8 flex flex-col space-y-12">
        {SKILLS_DATA.map((skill, index) => (
          <div key={index}>
            <SubHeading>{skill.title}</SubHeading>
            <MotionDiv
              transition={{
                ...curveTransition,
                delayChildren:
                  0.5 + (index ? SKILLS_DATA[index - 1].data.length * 0.05 : 0),
                staggerChildren: 0.05,
              }}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-6"
            >
              {skill.data.map((item, key) => (
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
        ))}
      </div>
    </Layout>
  );
};

export default SkillsPage;
