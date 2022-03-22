export const route = {
  home: { path: '/', title: 'home' },
  articles: { path: '/articles', title: 'article' },
  projects: { path: '/projects', title: 'project' },
  skills: { path: '/skills', title: 'skills' },
  about: { path: '/about', title: 'about' },
};

type RouteTitle = 'home' | 'article' | 'project' | 'skills' | 'about';

export const routes = Object.values(route) as Array<{
  path: string;
  title: RouteTitle;
}>;
