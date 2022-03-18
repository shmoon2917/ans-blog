import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export type Article = {
  slug: string;
  title: string;
  date: string;
  category: string;
  content: string | MDXRemoteSerializeResult;
  description?: string;
  readingTime?: string;
};

export type ArticleField = keyof Article;
