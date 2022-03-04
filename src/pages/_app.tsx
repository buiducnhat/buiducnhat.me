import type { AppProps } from 'next/app';

import '@/styles/globals.css';
import ThemeProvider from '@/features/theme/theme.context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
