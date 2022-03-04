import { articlesDirectory, getAllArticles, getArticleByAbsolutePath, getArticleBySlug } from 'lib/api';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import { format, parse } from 'date-fns';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { ParsedUrlQuery } from 'querystring';
import ArticleLayout from 'components/Layout/ArticleLayout';
import * as Styles from './styles';
import { Article } from 'services/types';
import ArticleHeader from 'components/Article/ArticleHeader';
import ArticleComments from 'components/Article/ArticleComments';
import Head from 'next/head';
import { join } from 'path';

interface Props extends Omit<Article, 'slug'> {
  content?: MDXRemoteSerializeResult;
}

interface ContextParams extends ParsedUrlQuery {
  categoryAndSlug: string[];
}

const ArticleDetailPage = ({ content, ...rest }: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>{`${rest.title}`}</title>
      </Head>
      <ArticleHeader {...rest} />
      <Styles.AritlceStyleWrapper>
        <MDXRemote {...content} />
      </Styles.AritlceStyleWrapper>
      <ArticleComments />
    </>
  );
};

ArticleDetailPage.getLayout = function getLayout(page: React.ReactElement) {
  return <ArticleLayout>{page}</ArticleLayout>;
};

export default ArticleDetailPage;

export const getStaticProps: GetStaticProps<Props, ContextParams> = async ({ params }) => {
  const [category, slug] = params!.categoryAndSlug;
  const path = join(articlesDirectory, category, `${slug}.mdx`);

  const article = getArticleByAbsolutePath(path, ['title', 'category', 'date', 'content']);
  const mdxSource = await serialize(article.content);

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
  const articles = getAllArticles(['category', 'slug', 'date']);

  return {
    paths: articles.map((article) => ({ params: { categoryAndSlug: [article.category, article.slug] } })),
    fallback: false,
  };
};
