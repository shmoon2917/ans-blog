import React from 'react';
import { getAllArticles } from '../lib/api';
import MainLayout from 'components/Layout/MainLayout';
import SpecialArticles from 'containers/SpecialArticle.container';
import LatestArticles from 'containers/LatestArticle.container';
import { GetStaticProps } from 'next';
import { Article } from 'services/types';

interface Props {
  articles: Article[];
}

const Index = ({ articles }: Props) => {
  return (
    <>
      <SpecialArticles />
      <LatestArticles articles={articles} />
    </>
  );
};

Index.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Index;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const articles = getAllArticles(['date', 'slug', 'title', 'category']);

  return {
    props: { articles },
    revalidate: 1800,
  };
};
