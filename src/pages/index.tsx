import type { NextPage } from 'next';
import Image from 'next/image';

import { Meta } from '@/templates/meta';
import Layout from '@/templates/layout';
import Avatar from '@/components/home/avatar';
import IntroText from '@/components/home/intro-text';

const Home: NextPage = () => {
  return (
    <Layout
      meta={
        <Meta title="Home | Gerpan" description="Gerpan personal website" />
      }
    >
      <div className="flex items-center space-x-20 min-h-[calc(100vh-200px)]">
        <Avatar />
        <IntroText />
      </div>
    </Layout>
  );
};

export default Home;
