import type { AppProps } from 'next/app';

import '@/styles/globals.css';
import useLoadThemeMode from '@/hooks/use-load-theme-mode';

function MyApp({ Component, pageProps }: AppProps) {
  useLoadThemeMode();

  return <Component {...pageProps} />;
}

export default MyApp;
