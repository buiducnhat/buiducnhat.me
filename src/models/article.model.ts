export interface Article {
  id: number | string;
  slug: string;
  title: string;
  description: string;
  cover: string;
  category: string;
  content: string;
  tags: string[];
  createdAt: string;
}