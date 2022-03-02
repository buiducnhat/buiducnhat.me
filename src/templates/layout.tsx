import { ReactNode } from 'react';

import Navbar from '@/components/commons/navbar';

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
      {children}
    </>
  );
}

export default Layout;
