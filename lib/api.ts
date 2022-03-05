import fs from 'fs';
import { basename, join } from 'path';
import matter from 'gray-matter';
import glob from 'glob';

export const articlesDirectory = join(process.cwd(), '_articles');

export function getArticleByAbsolutePath(path: string, fields: string[] = []) {
  // const realSlug = slug.replace(/\.mdx$/, '');
  const realSlug = basename(path).replace(/\.mdx$/, '');

  const fullPath = join(articlesDirectory, `${realSlug}.mdx`);

  // const fileContents = fs.readFileSync(fullPath, 'utf8');
  const fileContents = fs.readFileSync(path, 'utf-8');

  const { data, content } = matter(fileContents);

  const items: Record<string, any> = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }
    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

function getAbsoluteArticles(directory: string, category?: string) {
  const categoryGlobPattern = category === null ? '**' : category;

  const files = glob.sync(`${directory}/${categoryGlobPattern}/*.mdx`).reduce<string[]>((acc, cur) => [...acc, cur], []);

  return files;
}

export function getArticles(fields: string[] = [], category?: string) {
  // const slugs = getArticleSlugs();
  const paths = getAbsoluteArticles(articlesDirectory, category);

  const articles = paths
    .map((slug) => getArticleByAbsolutePath(slug, fields))
    // sort articles by date in descending order
    .sort((article1, article2) => (article1.date > article2.date ? -1 : 1));
  return articles;
}

export function getCategories() {
  return fs.readdirSync(articlesDirectory);
}
