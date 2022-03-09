import { ReactNode } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';

import Navbar from '@/components/commons/navbar';
import Footer from '@/components/commons/footer';
import { MotionDiv } from '@/components/animations';
import Meta from './meta';

interface LayoutProps {
  title: string;
  description?: string;
  children?: ReactNode;
}

function Layout(props: LayoutProps) {
  const { title, description, children } = props;

  const variants: Variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: -100 },
  };

  return (
    <>
      <Meta title={title} description={description || ''} />
      <Navbar />
      <AnimatePresence
        exitBeforeEnter
        presenceAffectsLayout={true}
        // onExitComplete={() => window.scrollTo(0, 0)}
      >
        <main
          className={
            'bg-dracula-purple-50 dark:bg-dracula-darker-800 dark:text-dracula-light ' +
            "min-h-[calc(100vh-theme('spacing.20')-theme('spacing.16'))]"
          }
        >
          <MotionDiv
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ type: 'spring', duration: 1 }}
            className="container-layout py-12"
          >
            {children}
          </MotionDiv>
        </main>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default Layout;
