import { useEffect } from 'react';

import useGetThemeMode from './use-get-theme-mode';

function useThemeMode() {
  const { theme } = useGetThemeMode();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  }, []);
}

export default useThemeMode;
