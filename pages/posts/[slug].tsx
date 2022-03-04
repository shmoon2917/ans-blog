import { getAllPosts, getPostBySlug } from 'lib/api';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { ParsedUrlQuery } from 'querystring';
import PostLayout from 'components/Layout/PostLayout';
import * as Styles from './styles';

interface Props {
  title?: string;
  content?: MDXRemoteSerializeResult;
}

interface ContextParams extends ParsedUrlQuery {
  slug: any;
}

const PostDetailPage = ({ title, content }: Props): JSX.Element => {
  return (
    <>
      <Styles.Title>{title}</Styles.Title>
      <Styles.Wrapper>
        <MDXRemote {...content} />
      </Styles.Wrapper>
    </>
  );
};

PostDetailPage.getLayout = function getLayout(page: React.ReactElement) {
  return <PostLayout>{page}</PostLayout>;
};

export default PostDetailPage;

export const getStaticProps: GetStaticProps<Props, ContextParams> = async ({ params }) => {
  const post = getPostBySlug(params?.slug, ['title', 'content']);
  const mdxSource = await serialize(post.content);

  return {
    props: { title: post.title, content: mdxSource },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(['slug', 'date']);

  return {
    paths: posts.map((post) => ({ params: { ...post } })),
    fallback: false,
  };
};
