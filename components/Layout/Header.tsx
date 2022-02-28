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
        <Link href="/" passHref>
          <Styles.LogoWrapper>
            <Image src="/assets/logo.svg" layout="fill" alt="logo" priority />
          </Styles.LogoWrapper>
        </Link>

        <Styles.NavWrapper>
          <Styles.NavItem>
            <a href="https://lavish-rhubarb-8f1.notion.site/cc2b37fb6fc34290987bd950cf4ceecb" target="_blank" rel="noreferrer">
              resume
            </a>
          </Styles.NavItem>
          <Styles.NavItem>
            <a href="https://github.com/shmoon2917" target="_blank" rel="noreferrer">
              github
            </a>
          </Styles.NavItem>
        </Styles.NavWrapper>
      </Styles.LeftSectionWrapper>
      <ThemeToggleButton />
    </Styles.Wrapper>
  );
};

export default memo(Header);
