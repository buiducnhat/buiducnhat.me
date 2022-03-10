import { ReactNode } from 'react';

import Navbar from '@/components/commons/navbar';
import Footer from '@/components/commons/footer';
import { MotionMain } from '@/components/animations';
import Meta from './meta';
import { pageTransition } from '@/components/animations/transitions';
import { pageVariants } from '@/components/animations/variants';

interface LayoutProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

function Layout(props: LayoutProps) {
  const { title, description, children } = props;

  return (
    <>
      <Meta title={title} description={description || ''} />

      <Navbar />

      <MotionMain
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={pageVariants}
        transition={pageTransition}
        className={
          "min-h-[calc(100vh-theme('spacing.20')-theme('spacing.16'))]"
        }
      >
        <div className="container-layout py-12">{children}</div>
      </MotionMain>

      <Footer />
    </>
  );
}

export default Layout;
