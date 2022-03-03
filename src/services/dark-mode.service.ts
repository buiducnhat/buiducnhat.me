export const toLightMode = () => {
  localStorage.setItem('theme', 'light');
  document.documentElement.classList.remove('dark');
};

export const toDarkMode = () => {
  localStorage.setItem('theme', 'dark');
  document.documentElement.classList.add('dark');
};

export const toOsMode = () => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
};
