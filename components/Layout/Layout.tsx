import Header from 'components/Layout/Header';
import React, { Fragment } from 'react';
import { STYLES } from 'services/constants';
import styled from 'styled-components';
import Footer from './Footer';

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Header />
        <ContentsWrapper>{children}</ContentsWrapper>
        <Footer />
      </Wrapper>
    </>
  );
};

export default MainLayout;

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
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
