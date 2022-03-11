import fs from 'fs';
import { basename, join } from 'path';
import matter from 'gray-matter';
import glob from 'glob';
import { Article, ArticleField } from 'services/types';

export const articlesDirectory = join(process.cwd(), '_articles');

export function getArticleByAbsolutePath(path: string, fields: ArticleField[] = []) {
  const slug = basename(path).replace(/\.mdx$/, '');
  const category = basename(join(path, '..'));

  const fileContents = fs.readFileSync(path, 'utf-8');

  const { data, content } = matter(fileContents);

  const items = {} as Article;

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });

  items.category = category;

  return items;
}

function getArticlePaths(directory: string, category?: string) {
  const categoryGlobPattern = category ?? '**';

  const files = glob.sync(`${directory}/${categoryGlobPattern}/*.mdx`);
  return files;
}

export function getArticles(fields: ArticleField[] = [], category?: string) {
  const paths = getArticlePaths(articlesDirectory, category);

  const articles = paths
    .map((slug) => getArticleByAbsolutePath(slug, fields))
    // sort articles by date in descending order
    .sort((article1, article2) => (article1.date > article2.date ? -1 : 1));
  return articles;
}

export function getCategories() {
  return fs.readdirSync(articlesDirectory);
}
