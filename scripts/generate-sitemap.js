const fs = require('fs');
const globby = require('globby');
const prettier = require('prettier');

const DOMAIN = 'https://moonerd.dev';

const formatted = (sitemap) => prettier.format(sitemap, { parser: 'html' });

(async () => {
  const staticPages = await globby([
    // include
    '_articles/**/*.mdx',
    'pages/**/*.tsx',
    'pages/*.tsx',
    // exclude
    '!pages/articles/*',
    '!pages/_app.tsx',
    '!pages/_document.tsx',
    '!pages/_error.tsx',
    '!pages/404.tsx',
    '!pages/og.tsx',
    '!pages/api/*',
  ]);

  const pagesSitemap = `
    ${staticPages
      .map((page) => {
        const path = page
          .replace('_articles/', 'articles/')
          .replace('pages/', '')
          .replace(/.tsx|.mdx/g, '')
          .replace(/\/index/g, '');
        const routePath = path === 'index' ? '' : path;

        return `
            <url>
                <loc>${DOMAIN}/${routePath}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
            </url>
        `;
      })
      .join('')}
  `;

  const generatedSitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">\n${pagesSitemap}</urlset>`;
  const formattedSitemap = formatted(generatedSitemap);

  fs.writeFileSync('public/sitemap.xml', formattedSitemap, 'utf-8');
})();
