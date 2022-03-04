import fs from 'fs';
import { basename, join } from 'path';
import matter from 'gray-matter';
import { Article } from 'services/types';

export const articlesDirectory = join(process.cwd(), '_articles');

export function getArticleSlugs() {
  return fs.readdirSync(articlesDirectory);
}

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

function getAllAbsoluteArticles(directory: string) {
  let files: string[] = [];

  fs.readdirSync(directory).forEach((file) => {
    const absolutePath = join(directory, file);

    if (fs.statSync(absolutePath).isDirectory()) {
      files = [...files, ...getAllAbsoluteArticles(absolutePath)];
    } else {
      files.push(absolutePath);
    }
  });

  return files;
}

export function getAllArticles(fields: string[] = []) {
  // const slugs = getArticleSlugs();
  const slugs = getAllAbsoluteArticles(articlesDirectory);

  const articles = slugs
    .map((slug) => getArticleByAbsolutePath(slug, fields))
    // sort articles by date in descending order
    .sort((article1, article2) => (article1.date > article2.date ? -1 : 1));
  return articles;
}
