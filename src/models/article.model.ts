export interface Article {
  id: number | string;
  slug: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  category: string;
  content: any;
  tags: string[];
  createdAt: Date | string | number;
  published: boolean;
}
