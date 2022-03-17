import React from 'react';
import Layout from 'components/Layout/Layout';
import ArticleCardContainer from 'containers/ArticleCard.container';
import { GetServerSideProps, GetStaticProps } from 'next';
import { Article } from 'services/types';
import { getArticles, getCategories } from 'lib/api';

interface Props {
  articles: Article[];
  categories: string[];
}

const Index = ({ articles, categories }: Props) => {
  return <ArticleCardContainer articles={articles} categories={categories} />;
};

Index.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Index;

export const getServerSideProps: GetServerSideProps<Props> = async ({ query }) => {
  const targetCategory = query?.category as string;
  const articles = getArticles(['date', 'slug', 'description', 'title', 'category'], targetCategory);
  const categories = getCategories();

  return {
    props: { articles, categories },
  };
};
