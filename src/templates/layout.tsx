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
    <div
      id="main"
      className="bg-primary-50 dark:bg-gray-900 dark:text-gray-100"
    >
      {meta}
      <Navbar />
      <div className="max-w-7xl mx-auto px-2 py-4 sm:p-6 lg:p-8">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
