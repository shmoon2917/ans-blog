import Header from 'components/Layout/Header';
import React, { Fragment } from 'react';

const Layout: React.FC = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
