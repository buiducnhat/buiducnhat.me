import type { NextPage } from 'next';

import Layout from '@/templates/layout';
import TimelineItem from '@/components/about/timeline-item';
import PageHeading from '@/components/commons/page-heading';
import SubHeading from '@/components/commons/page-heading/sub-heading';
import { MotionLi, MotionUl } from '@/components/animations';
import { curveTransition } from '@/components/animations/transitions';
import { MY_NAME } from '@/configs/constants/common.constant';
import useTrans from '@/hooks/useTrans';

const AboutPage: NextPage = () => {
  const i18n = useTrans();

  return (
    <Layout
      title={`${i18n.about.title} | ${MY_NAME}`}
      description={i18n.about.description}
    >
      <PageHeading>{i18n.about.heading}</PageHeading>

      <div className="mt-8">
        <SubHeading>{i18n.about.career}</SubHeading>
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
          {i18n.about.careerData.map((item, key) => (
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

        <SubHeading>{i18n.about.education}</SubHeading>
        <MotionUl
          transition={{
            ...curveTransition,
            delayChildren: 0.5 + i18n.about.careerData.length * 0.2,
            staggerChildren: 0.2,
          }}
          initial="hidden"
          animate="show"
          className="relative border-l ml-2
            border-dracula-dark-100
            dark:border-dracula-dark-800"
        >
          {i18n.about.educationData.map((item, key) => (
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
