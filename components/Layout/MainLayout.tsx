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
  min-height: 100vh;
  display: grid;
  grid-template-rows: 1fr minmax(auto, 100%) 100px;
  grid-template-areas:
    'header'
    'body'
    'footer';
`;

export const ContentsWrapper = styled.main`
  grid-area: body;
  max-width: 1024px;
  flex: 1;
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
