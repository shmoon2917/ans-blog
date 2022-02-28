import ThemeToggleButton from 'components/Button/ThemeToggleButton';
import { useScrolled } from 'services/hooks';
import Image from 'next/image';
import React, { memo } from 'react';

import * as Styles from './Header.styles';
import Link from 'next/link';

const Header: React.FC = () => {
  const scrolled = useScrolled();

  return (
    <Styles.Wrapper scrolled={scrolled}>
      <Styles.LeftSectionWrapper>
        <Styles.LogoWrapper>
          <Image src="/assets/logo.svg" layout="fill" alt="logo" priority />
        </Styles.LogoWrapper>
        <Styles.NavWrapper>
          <Styles.NavItem>
            <Link href="https://lavish-rhubarb-8f1.notion.site/cc2b37fb6fc34290987bd950cf4ceecb">resume</Link>
          </Styles.NavItem>
          <Styles.NavItem>
            <Link href="https://github.com/shmoon2917">github</Link>
          </Styles.NavItem>
        </Styles.NavWrapper>
      </Styles.LeftSectionWrapper>
      <ThemeToggleButton />
    </Styles.Wrapper>
  );
};

export default memo(Header);
