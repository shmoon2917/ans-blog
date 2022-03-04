import { getAllArticles, getArticleBySlug } from 'lib/api';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { ParsedUrlQuery } from 'querystring';
import ArticleLayout from 'components/Layout/ArticleLayout';
import * as Styles from './styles';

interface Props {
  title?: string;
  content?: MDXRemoteSerializeResult;
}

interface ContextParams extends ParsedUrlQuery {
  slug: any;
}

const ArticleDetailPage = ({ title, content }: Props): JSX.Element => {
  return (
    <>
      <Styles.Title>{title}</Styles.Title>
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
  const article = getArticleBySlug(params?.slug, ['title', 'content']);
  const mdxSource = await serialize(article.content);

  return {
    props: { title: article.title, content: mdxSource },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = getAllArticles(['slug', 'date']);

  return {
    paths: articles.map((article) => ({ params: { ...article } })),
    fallback: false,
  };
};
