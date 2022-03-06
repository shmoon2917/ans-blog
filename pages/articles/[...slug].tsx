import { format, parse } from 'date-fns';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import Head from 'next/head';
import { join } from 'path';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';

import ArticleLayout from 'components/Layout/ArticleLayout';
import ArticleHeader from 'components/Article/ArticleHeader';
import ArticleComments from 'components/Article/ArticleComments';

import ArticleStyleWrapper from './styles';
import { Article } from 'services/types';

import { articlesDirectory, getArticles, getArticleByAbsolutePath } from 'lib/api';
import { MDXComponents } from 'lib/mdxComponents';
import imageMetadata from 'lib/rehypeImageMetadata';

type Props = Omit<Article, 'slug'>;

interface ContextParams extends ParsedUrlQuery {
  slug: string[];
}

const ArticleDetailPage = (props: Props): JSX.Element => {
  const { content, title } = props;
  return (
    <>
      <Head>
        <title>{`${title}`}</title>
      </Head>
      <ArticleHeader {...props} />
      <ArticleStyleWrapper>
        <MDXRemote {...(content as MDXRemoteSerializeResult)} components={MDXComponents} />
      </ArticleStyleWrapper>
      <ArticleComments />
    </>
  );
};

ArticleDetailPage.getLayout = function getLayout(page: React.ReactElement) {
  return <ArticleLayout>{page}</ArticleLayout>;
};

export default ArticleDetailPage;

export const getStaticProps: GetStaticProps<Props, ContextParams> = async ({ params }) => {
  const [category, slug] = params!.slug;
  const path = join(articlesDirectory, category, `${slug}.mdx`);

  const article = getArticleByAbsolutePath(path, ['title', 'category', 'date', 'content']);
  const mdxSource = await serialize(article.content as string, {
    mdxOptions: {
      rehypePlugins: [imageMetadata],
    },
  });

  return {
    props: {
      title: article.title,
      category: article.category,
      date: format(parse(article.date, 'yyyy-MM-dd HH:mm:ss', new Date()), 'yyyy년 M월 d일'),
      content: mdxSource,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = getArticles(['category', 'slug', 'date']);

  return {
    paths: articles.map((article) => ({ params: { slug: [article.category, article.slug] } })),
    fallback: false,
  };
};
