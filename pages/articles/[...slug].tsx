import { format, parse } from 'date-fns';
import { GetStaticPaths, GetStaticProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { join } from 'path';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { generateOpenGraphImage } from 'lib/generateOGImage';

import ArticleLayout from 'components/Layout/ArticleLayout';
import ArticleHeader from 'components/Article/ArticleHeader';
import ArticleComments from 'components/Article/ArticleComments';
import ArticleStyleWrapper from 'components/Common/ArticleStyleWrapper';
import ArticleAside from 'components/Article/ArticleAside';

import { Article } from 'services/types';
import { articlesDirectory, getArticles, getArticleByAbsolutePath } from 'lib/api';
import { MDXComponents } from 'components/Common/mdxComponents';
import imageMetadata from 'lib/rehypeImageMetadata';
import { DefaultSeoProps, NextSeo } from 'next-seo';
import DEFAULT_SEO from 'next-seo.config';
import styled from 'styled-components';

interface Props extends Omit<Article, 'slug'> {
  ogImagePath: string | null;
}

interface ContextParams extends ParsedUrlQuery {
  slug: string[];
}

const ArticleDetailPage = (props: Props): JSX.Element => {
  const { content, title, date, category, description, ogImagePath } = props;

  const SEO: DefaultSeoProps = {
    ...DEFAULT_SEO,
    title,
    description: description || title,
    openGraph: {
      ...DEFAULT_SEO.openGraph,
      title,
      description: description || title,
      images: !!ogImagePath ? [{ url: ogImagePath }] : undefined,
    },
  };

  return (
    <>
      <NextSeo {...SEO} />
      <ArticleHeader {...props} />
      <ArticleStyleWrapper>
        <MDXRemote {...(content as MDXRemoteSerializeResult)} components={MDXComponents} />
        <ArticleComments />
      </ArticleStyleWrapper>
      <ArticleAside date={date} category={category} />
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

  const article = getArticleByAbsolutePath(path, ['title', 'category', 'date', 'content', 'description']);
  const mdxSource = await serialize(article.content as string, {
    mdxOptions: {
      rehypePlugins: [imageMetadata],
    },
  });
  const ogImagePath = await generateOpenGraphImage(`/og?title=${article.title}`);

  return {
    props: {
      title: article.title,
      category: article.category,
      date: format(parse(article.date, 'yyyy-MM-dd HH:mm:ss', new Date()), 'yyyy년 M월 d일'),
      description: article?.description || '',
      content: mdxSource,
      ogImagePath: ogImagePath || null,
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
