import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import Layout from 'components/Layout/Layout';
import SpecialArticles from 'containers/SpecialArticle.container';

const Index = () => {
  return (
    <Layout>
      <SpecialArticles />
    </Layout>
  );
};

export default Index;
