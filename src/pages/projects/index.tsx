import type { NextPage } from 'next';

import Layout from '@/templates/layout';
import PageHeading from '@/components/commons/page-heading';
import useTrans from '@/hooks/useTrans';
import ProjectCard from '@/components/projects/project-card';

const ProjectsPage: NextPage = () => {
  const i18n = useTrans();

  return (
    <Layout title={i18n.project.title} description={i18n.project.description}>
      <PageHeading>{i18n.project.heading}</PageHeading>

      <div className="mt-8 flex flex-col space-y-8">
        {i18n.project.data.map((project, key) => (
          <div key={key}>
            <ProjectCard index={key} {...project} />
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default ProjectsPage;
