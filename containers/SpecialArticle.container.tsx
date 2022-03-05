import { SpecialArticleWrapper } from 'components/Article/SpecialArticle.styles';
import SpecialArticleImage from 'components/Article/SpecialArticleImage';
import SpecialArticleTitle from 'components/Article/SpecialArticleTitle';
import React from 'react';
import styled from 'styled-components';
import SpecialArticle from '../components/Article/SpecialArticle';

export default function SpecialArticles() {
  return (
    <SpecialArticlesContainer>
      <SpecialArticle>
        <SpecialArticleImage src="/assets/example.png" alt="토스" />
        <SpecialArticleTitle>예시</SpecialArticleTitle>
      </SpecialArticle>
      <SpecialArticle>
        <SpecialArticleImage src="/assets/example.png" alt="토스" />
        <SpecialArticleTitle>예시</SpecialArticleTitle>
      </SpecialArticle>
      <SpecialArticle>
        <SpecialArticleImage src="/assets/example.png" alt="토스" />
        <SpecialArticleTitle>예시</SpecialArticleTitle>
      </SpecialArticle>
      <SpecialArticle>
        <SpecialArticleImage src="/assets/example.png" alt="토스" />
        <SpecialArticleTitle>예시</SpecialArticleTitle>
      </SpecialArticle>
      <SpecialArticle>
        <SpecialArticleImage src="/assets/example.png" alt="토스" />
        <SpecialArticleTitle>예시</SpecialArticleTitle>
      </SpecialArticle>
      <SpecialArticle>
        <SpecialArticleImage src="/assets/example.png" alt="토스" />
        <SpecialArticleTitle>예시</SpecialArticleTitle>
      </SpecialArticle>
    </SpecialArticlesContainer>
  );
}

const SpecialArticlesContainer = styled.section`
  position: relative;
`;
