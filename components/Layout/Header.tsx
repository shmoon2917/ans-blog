import ThemeToggleButton from 'components/Button/ThemeToggleButton';
import { useScrolled } from 'services/hooks';
import Image from 'next/image';
import React, { memo, useState } from 'react';

import * as Styles from './Header.styles';
import Link from 'next/link';

const Header: React.FC = () => {
  const [hoverLogo, setHoverLogo] = useState(false);
  const scrolled = useScrolled();

  return (
    <Styles.Wrapper scrolled={scrolled}>
      <Link href="/" passHref>
        <Styles.LogoWrapper onMouseOver={() => setHoverLogo(true)} onMouseLeave={() => setHoverLogo(false)}>
          <Image src="/assets/logo.svg" layout="fill" alt="logo" priority />
        </Styles.LogoWrapper>
      </Link>
      <Styles.LogoText active={hoverLogo}>moonerd.dev</Styles.LogoText>
      <Styles.RightSectionWrapper>
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
      </Styles.RightSectionWrapper>
    </Styles.Wrapper>
  );
};

export default memo(Header);
