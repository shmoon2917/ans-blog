import { Divider } from 'components/Common/Divider';
import { Typos } from 'components/Typo';
import React from 'react';
import { STYLES } from 'services/constants';
import { Article } from 'services/types';
import styled from 'styled-components';

type ArticleHeaderProps = Omit<Article, 'slug' | 'content'>;

const ArticleHeader = ({ title }: ArticleHeaderProps): JSX.Element => {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default ArticleHeader;

const Wrapper = styled.div`
  margin-bottom: 40px;
  grid-column: span 4 / span 4;
`;

const Title = styled(Typos.Heading1)`
  font-weight: 700;
  line-height: 54px;
  margin-top: 60px;
`;
