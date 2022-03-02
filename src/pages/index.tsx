import type { NextPage } from 'next';

import { Meta } from '@/templates/meta';
import Layout from '@/templates/layout'

const Home: NextPage = () => {
  return (
    <Layout
      meta={<Meta title="Home | Gerpan" description="Gerpan personal website" />}
    >
      
    </Layout>
  );
};

export default Home;
