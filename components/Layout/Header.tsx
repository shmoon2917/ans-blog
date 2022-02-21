import ThemeToggleButton from 'components/Button/ThemeToggleButton';
import { useScrolled } from 'services/hooks';
import Image from 'next/image';
import React, { memo } from 'react';

import * as Styles from './Header.styles';

const Header: React.FC = () => {
  const scrolled = useScrolled();

  return (
    <Styles.Wrapper scrolled={scrolled}>
      <Styles.LeftSectionWrapper>
        <Image src="/assets/logo.svg" width="152" height="27" alt="logo" />
        <Styles.NavWrapper>
          <Styles.NavItem>resume</Styles.NavItem>
          <Styles.NavItem>github</Styles.NavItem>
        </Styles.NavWrapper>
      </Styles.LeftSectionWrapper>
      <ThemeToggleButton />
    </Styles.Wrapper>
  );
};

export default memo(Header);
