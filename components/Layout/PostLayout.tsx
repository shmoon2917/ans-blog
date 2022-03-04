import { Typos } from 'components/Typo';
import { ReactNode } from 'react';
import { STYLES } from 'services/constants';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

interface PostLayoutProps {
  children?: ReactNode;
}

export default function PostLayout({ children }: PostLayoutProps) {
  return (
    <>
      <Header />
      <ContentsWrapper>
        <Contents>{children}</Contents>
      </ContentsWrapper>
      <Footer />
    </>
  );
}

const ContentsWrapper = styled.main`
  margin-top: 80px;

  ${STYLES.media.mobile} {
    margin-top: 64px;
  }
`;

const Contents = styled.div`
  max-width: 1140px;
  width: 100%;
  padding: 30px 40px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const ContentTitle = styled(Typos.Heading1)`
  text-align: center;
  font-size: 40px;
  line-height: 54px;

  ${STYLES.media.mobile} {
    font-size: 28px;
    line-height: 38px;
  }
`;
