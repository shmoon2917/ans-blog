import React from 'react';
import MainLayout from 'components/Layout/MainLayout';
import SpecialArticles from 'containers/SpecialArticle.container';
import LatestArticles from 'containers/LatestArticle.container';
import { GetServerSideProps, GetStaticProps } from 'next';
import { Article } from 'services/types';
import { getArticles, getCategories } from 'lib/api';

interface Props {
  articles: Article[];
  categories: string[];
}

const Index = ({ articles, categories }: Props) => {
  return <LatestArticles articles={articles} categories={categories} />;
};

Index.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Index;

export const getServerSideProps: GetServerSideProps<Props> = async ({ query }) => {
  const targetCategory = query?.category as string;
  const articles = getArticles(['date', 'slug', 'title', 'category'], targetCategory);
  const categories = getCategories();

  return {
    props: { articles, categories },
  };
};
