import { Typos } from 'components/Typo';
import { ReactNode } from 'react';
import { STYLES } from 'services/constants';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

interface ArticleLayoutProps {
  children?: ReactNode;
}

export default function ArticleLayout({ children }: ArticleLayoutProps) {
  return (
    <>
      <Header />
      <ContentsWrapper>
        <Article>{children}</Article>
      </ContentsWrapper>
      <Footer />
    </>
  );
}

const ContentsWrapper = styled.main`
  max-width: 1024px;
  width: 100%;
  margin: 0px auto;
  margin-top: 80px;
  padding: 12px ${STYLES.padding.default}px;

  ${STYLES.media.mobile} {
    margin-top: 64px;
    padding: 12px ${STYLES.padding.mobile}px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Article = styled.article`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
