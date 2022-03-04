import { getAllArticles, getArticleBySlug } from 'lib/api';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { ParsedUrlQuery } from 'querystring';
import ArticleLayout from 'components/Layout/ArticleLayout';
import * as Styles from './styles';
import { Article } from 'services/types';
import ArticleHeader from 'components/Article/ArticleHeader';
import { format } from 'date-fns';

interface Props extends Omit<Article, 'slug'> {
  content?: MDXRemoteSerializeResult;
}

interface ContextParams extends ParsedUrlQuery {
  slug: any;
}

const ArticleDetailPage = ({ content, ...rest }: Props): JSX.Element => {
  return (
    <>
      <ArticleHeader {...rest} />
      <Styles.AritlceStyleWrapper>
        <MDXRemote {...content} />
      </Styles.AritlceStyleWrapper>
    </>
  );
};

ArticleDetailPage.getLayout = function getLayout(page: React.ReactElement) {
  return <ArticleLayout>{page}</ArticleLayout>;
};

export default ArticleDetailPage;

export const getStaticProps: GetStaticProps<Props, ContextParams> = async ({ params }) => {
  const article = getArticleBySlug(params?.slug, ['title', 'category', 'date', 'content']);
  const mdxSource = await serialize(article.content);

  return {
    props: { title: article.title, category: article.category, date: format(new Date(article.date), 'yyyy.MM.dd'), content: mdxSource },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = getAllArticles(['slug', 'date']);

  return {
    paths: articles.map((article) => ({ params: { ...article } })),
    fallback: false,
  };
};
