import React from 'react';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import Layout from 'components/Layout/Layout';
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
  return <Layout>{page}</Layout>;
};

export default Index;
