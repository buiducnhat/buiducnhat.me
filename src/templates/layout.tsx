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
      <div className="bg-primary-100 dark:bg-gray-900 dark:text-gray-100">
        <div className="container-layout py-12">{children}</div>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
