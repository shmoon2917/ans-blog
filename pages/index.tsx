import React from 'react';
import { getAllPosts } from '../lib/api';
import MainLayout from 'components/Layout/MainLayout';
import SpecialArticles from 'containers/SpecialArticle.container';
import LatestArticles from 'containers/LatestArticle.container';
import { GetStaticProps } from 'next';
import { Post } from 'services/types';

interface IndexProps {
  posts: Post[];
}

const Index = ({ posts }: IndexProps) => {
  return (
    <>
      <SpecialArticles />
      <LatestArticles posts={posts} />
    </>
  );
};

Index.getLayout = function getLayout(page: React.ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default Index;

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const posts = getAllPosts(['date', 'slug', 'title', 'category']);

  return {
    props: { posts },
    revalidate: 1800,
  };
};
