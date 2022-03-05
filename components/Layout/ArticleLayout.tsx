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
      <ContentsWrapper>{children}</ContentsWrapper>
      <Footer />
    </>
  );
}

const ContentsWrapper = styled.main`
  max-width: ${700 + STYLES.padding.default}px;
  width: 100%;
  padding: 30px ${STYLES.padding.default}px;
  margin: 80px auto 0;
  box-sizing: border-box;

  ${STYLES.media.mobile} {
    padding: 30px ${STYLES.padding.mobile}px;
    margin-top: 64px;
  }
`;
