import Header from 'components/Layout/Header';
import React, { Fragment, useState } from 'react';
import { STYLES } from 'services/constants';
import { TitleIntersectCtx } from 'services/contexts';
import styled from 'styled-components';
import Footer from './Footer';

const MainLayout: React.FC = ({ children }) => {
  const [postTitle, setPostTitle] = useState('');

  return (
    <>
      <Wrapper>
        <TitleIntersectCtx.Provider value={{ title: postTitle, setTitle: setPostTitle }}>
          <Header />
          <ContentsWrapper>{children}</ContentsWrapper>
          <Footer />
        </TitleIntersectCtx.Provider>
      </Wrapper>
    </>
  );
};

export default MainLayout;

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto auto;
  min-height: 100vh;
`;

export const ContentsWrapper = styled.main`
  width: 100%;
  max-width: ${({ theme }) => theme.width['3xl']};

  margin: 100px auto 0;

  ${({ theme }) => theme.responsive.xl} {
    max-width: ${({ theme }) => theme.width['5xl']};
  }

  ${({ theme }) => theme.responsive.md} {
    padding: 0 ${({ theme }) => theme.padding._4};
  }
`;
