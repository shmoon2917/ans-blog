import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import Layout from 'components/Layout/Layout';
import SpecialArticles from 'containers/SpecialArticle.container';
import LatestArticles from 'containers/LatestArticle.container';

const Index = () => {
  return (
    <Layout>
      <SpecialArticles />
      <LatestArticles />
    </Layout>
  );
};

export default Index;
