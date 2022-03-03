import { useEffect, useState } from 'react';

type ThemeModes = 'light' | 'dark' | 'os';

function useGetThemeMode() {
  const [theme, setTheme] = useState<ThemeModes>('light');

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      setTheme('dark');
    } else if (
      !('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [theme]);

  return { theme };
}

export default useGetThemeMode;
