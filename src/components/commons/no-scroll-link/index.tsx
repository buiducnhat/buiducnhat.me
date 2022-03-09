import React from 'react';
import Link, { LinkProps } from 'next/link';

interface NoScrollLinkProps extends LinkProps {
  children: React.ReactNode;
}

function NoScrollLink({ children, ...props }: NoScrollLinkProps) {
  return (
    <Link {...props} scroll={false}>
      {children}
    </Link>
  );
}

export default NoScrollLink;
