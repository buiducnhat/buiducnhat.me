import type { NextPage } from 'next';
import { H2Props } from 'react-html-props';

import Layout from '@/templates/layout';
import TimelineItem from '@/components/about/timeline-item';
import PageHeading from '@/components/commons/page-heading';
import { MotionLi, MotionUl } from '@/components/animations';
import { curveTransition } from '@/components/animations/transitions';
import {
  careerData,
  educationData,
} from '@/configs/constants/about-data.constants';

const SubHeadingText = ({ children, ...rest }: H2Props) => (
  <h2
    className="mb-5 text-xl md:text-2xl font-bold
      text-dracula-purple-600 dark:text-dracula-purple-300"
    {...rest}
  >
    {children}
  </h2>
);

const HomePage: NextPage = () => {
  return (
    <Layout title="About | Gerpan" description="Gerpan personal website">
      <PageHeading>About me</PageHeading>

      <div className="mt-8">
        <SubHeadingText>Career</SubHeadingText>
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
          {careerData.map((career, key) => (
            <MotionLi
              key={key}
              variants={{
                hidden: { opacity: 0, x: -50 },
                show: { opacity: 1, x: 0 },
              }}
              className="mb-10 ml-6"
            >
              <TimelineItem {...career} />
            </MotionLi>
          ))}
        </MotionUl>

        <SubHeadingText>Education</SubHeadingText>
        <MotionUl
          transition={{
            ...curveTransition,
            delayChildren: 0.5 + careerData.length * 0.2,
            staggerChildren: 0.2,
          }}
          initial="hidden"
          animate="show"
          className="relative border-l ml-2
            border-dracula-dark-100
            dark:border-dracula-dark-800"
        >
          {educationData.map((career, key) => (
            <MotionLi
              key={key}
              variants={{
                hidden: { opacity: 0, x: -50 },
                show: { opacity: 1, x: 0 },
              }}
              className="mb-10 ml-6"
            >
              <TimelineItem {...career} />
            </MotionLi>
          ))}
        </MotionUl>
      </div>
    </Layout>
  );
};

export default HomePage;
