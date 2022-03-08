import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';

import Layout from '@/templates/layout';
import Meta from '@/templates/meta';
import Button from '@/components/commons/button';
import { route } from '@/configs/routes.config';

const NotFoundPage: NextPage = () => {
  const router = useRouter();

  const handleBackButton = () => {
    router.push(route.home.path);
  };

  return (
    <Layout
      meta={<Meta title="404 | Not found" description="Page not found" />}
    >
      <div className="flex flex-col items-center space-y-5">
        <Image
          src="/assets/images/not-found.svg"
          width={386}
          height={386}
          alt="not found image"
        />

        <Button onClick={handleBackButton}>Go back home</Button>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
