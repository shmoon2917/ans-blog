import React from 'react';
import { getAllPosts } from '../lib/api';
import MainLayout from 'components/Layout/MainLayout';
import SpecialArticles from 'containers/SpecialArticle.container';
import LatestArticles from 'containers/LatestArticle.container';

const Index = () => {
  return (
    <>
      <SpecialArticles />
      <LatestArticles />
    </>
  );
};

Index.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Index;
