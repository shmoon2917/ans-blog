import Header from 'components/Layout/Header';
import React, { Fragment } from 'react';
import { STYLES } from 'services/constants';
import styled from 'styled-components';
import Footer from './Footer';

const MainLayout: React.FC = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <ContentsWrapper>{children}</ContentsWrapper>
      <Footer />
    </Fragment>
  );
};

export default MainLayout;

export const ContentsWrapper = styled.main`
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  padding: 12px 40px;
  margin-top: 80px;

  ${STYLES.media.mobile} {
    margin-top: 64px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
`;
