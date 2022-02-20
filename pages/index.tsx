import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';
import Post from '../types/post';
import Layout from 'components/Layout/Layout';

const Index = () => {
  return <Layout></Layout>;
};

export default Index;
