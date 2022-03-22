import type { NextPage } from 'next';

import Layout from '@/templates/layout';
import TimelineItem from '@/components/about/timeline-item';
import PageHeading from '@/components/commons/page-heading';
import SubHeading from '@/components/commons/page-heading/sub-heading';
import { MotionLi, MotionUl } from '@/components/animations';
import { curveTransition } from '@/components/animations/transitions';
import { CAREER_DATA, EDUCATION_DATA } from '@/data/about';
import { MY_NAME } from '@/configs/constants/common.constant';

const AboutPage: NextPage = () => {
  return (
    <Layout title={`About | ${MY_NAME}`} description="Bùi Đức Nhật information">
      <PageHeading>About me</PageHeading>

      <div className="mt-8">
        <SubHeading>Career</SubHeading>
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
          {CAREER_DATA.map((item, key) => (
            <MotionLi
              key={key}
              variants={{
                hidden: { opacity: 0, x: -50 },
                show: { opacity: 1, x: 0 },
              }}
              className="mb-10 ml-6"
            >
              <TimelineItem {...item} />
            </MotionLi>
          ))}
        </MotionUl>

        <SubHeading>Education</SubHeading>
        <MotionUl
          transition={{
            ...curveTransition,
            delayChildren: 0.5 + CAREER_DATA.length * 0.2,
            staggerChildren: 0.2,
          }}
          initial="hidden"
          animate="show"
          className="relative border-l ml-2
            border-dracula-dark-100
            dark:border-dracula-dark-800"
        >
          {EDUCATION_DATA.map((item, key) => (
            <MotionLi
              key={key}
              variants={{
                hidden: { opacity: 0, x: -50 },
                show: { opacity: 1, x: 0 },
              }}
              className="mb-10 ml-6"
            >
              <TimelineItem {...item} />
            </MotionLi>
          ))}
        </MotionUl>
      </div>
    </Layout>
  );
};

export default AboutPage;
