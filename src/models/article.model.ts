export interface Article {
  id: number | string;
  slug: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  category: string;
  content: string;
  tags: string[];
  date: string;
}