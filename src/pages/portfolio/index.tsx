import Translate from '@docusaurus/Translate';
import Layout from '@theme/Layout';
import React from 'react';

import SkillCard from './_components/skill-card';
import { technicalSkills } from './_data/technical-skills';

function PortfolioPage() {
  return (
    <Layout
      title="Portfolio"
      description="Personal website of Bùi Đức Nhật, a developer, sharing about programming, technology, and life.">
      <div className="min-h-[70vh] bg-gradient-to-br md:bg-gradient-to-tr from-primary-50 to-gray-50 dark:from-primary-900 dark:to-gray-900">
        <div className="container py-5">
          <h1 className="text-bold text-primary-900 dark:text-primary-50">
            <Translate>Porfolio</Translate>
          </h1>

          <div className="p-5 rounded-md">
            <h2 className="text-center text-primary-800 dark:text-primary-100">
              <Translate>Technical skills</Translate>
            </h2>

            <div className="w-full flex justify-center">
              <div className="max-w-3xl flex flex-wrap justify-center">
                {technicalSkills.map((x, index) => {
                  return <SkillCard key={index} img={x.img} name={x.name} url={x.url} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default PortfolioPage;
