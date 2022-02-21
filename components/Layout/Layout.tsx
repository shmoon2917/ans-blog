import Header from 'components/Layout/Header';
import React, { Fragment } from 'react';
import * as Styles from './Layout.styles';

const Layout: React.FC = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <Styles.ContentsWrapper>{children}</Styles.ContentsWrapper>
    </Fragment>
  );
};

export default Layout;
