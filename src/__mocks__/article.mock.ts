import { Article } from '@/models/article.model';

export const articleMock: Article = {
  id: 1,
  title: 'My first article',
  slug: 'my-first-article-1',
  category: 'Category 1',
  tags: ['Tag 1', 'Tag 2'],
  cover: 'https://phocode.com/wp-content/uploads/2020/10/placeholder-1-1.png',
  content: '# Hello',
  description: 'Null',
  createdAt: '2022-03-02',
};

export const articlesMock: Article[] = [];
for (let i = 0; i < 10; ++i) {
  articlesMock.push({
    id: i,
    title: 'My first article',
    slug: 'my-first-article-' + i,
    category: 'Category 1',
    tags: ['Tag 1', 'Tag 2'],
    cover: 'https://phocode.com/wp-content/uploads/2020/10/placeholder-1-1.png',
    content: '# Hello',
    description: 'Features CRUD operations Responsiveness Beautiful animations Image slider',
    createdAt: '2022-03-02',
  });
}
