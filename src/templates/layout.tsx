import { ReactNode } from 'react';

import Navbar from '@/components/commons/navbar';
import Footer from '@/components/commons/footer';

interface LayoutProps {
  meta: ReactNode;
  children?: ReactNode;
}

function Layout(props: LayoutProps) {
  const { meta, children } = props;

  return (
    <>
      {meta}
      <Navbar />
      <div
        className={
          'bg-primary-50 dark:bg-dracula-bg dark:text-dracula-fg ' +
          "min-h-[calc(100vh-theme('spacing.20')-theme('spacing.16'))]"
        }
      >
        <div className="container-layout py-12">{children}</div>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
