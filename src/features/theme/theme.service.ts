import { ThemeState } from './theme.model';

export const loadFromLocal = (): ThemeState => {
  const theme: ThemeState = { type: 'dark' };
  const fromLocal = localStorage.getItem('theme');
  if (!fromLocal) {
    return theme;
  }
  const result = JSON.parse(fromLocal) as ThemeState;
  if (
    (result && result?.type && result.type === 'light') ||
    result.type === 'dark'
  ) {
    theme.type = result.type;
  }
  return theme;
};

export const setToLocal = (theme: ThemeState): void => {
  localStorage.setItem('theme', JSON.stringify(theme));
};
