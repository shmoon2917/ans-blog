import { Typos } from 'components/Typo';
import React from 'react';
import * as Styles from './Footer.styles';

const Footer: React.FC = () => {
  return (
    <Styles.Wrapper>
      <Typos.Label type="large">©Sangho Moon</Typos.Label>
    </Styles.Wrapper>
  );
};

export default Footer;
