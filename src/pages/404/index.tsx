import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Image from 'next/image';

import Layout from '@/templates/layout';
import { route } from '@/configs/routes.config';
import Button from '@/components/commons/button';
import useTrans from '@/hooks/useTrans';

const NotFoundPage: NextPage = () => {
  const router = useRouter();

  const i18n = useTrans();

  const handleBackButton = () => {
    router.push(route.home.path);
  };

  return (
    <Layout title={i18n[404].title} description={i18n[404].description}>
      <div className="flex flex-col items-center space-y-5">
        <Image
          src="/assets/images/not-found.svg"
          width={386}
          height={386}
          alt="not found image"
        />

        <Button onClick={handleBackButton}>{i18n[404].backHome}</Button>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
