import React, { memo, useContext, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

import ThemeToggleButton from 'components/Button/ThemeToggleButton';
import { useScrolled } from 'services/hooks';

import * as Styles from './Header.styles';
import { STYLES } from 'services/constants';
import { TitleIntersectCtx } from 'services/contexts';

const Header: React.FC = () => {
  const router = useRouter();
  const [hoverLogo, setHoverLogo] = useState(false);
  const scrolled = useScrolled();

  const { title } = useContext(TitleIntersectCtx);

  const isArticlePage = router.asPath.match(/\/articles\/(\w|\/)+/g);

  const renderLeftSection = () => {
    if (isArticlePage && !!title) {
      return (
        <>
          <Link href="/" passHref>
            <Styles.GoBackButton>
              <Image src="/assets/arrow.svg" layout="fixed" width={18} height={18} alt="go back button icon" />
            </Styles.GoBackButton>
          </Link>

          <Styles.LogoText active>{title}</Styles.LogoText>
        </>
      );
    } else {
      return (
        <>
          <Link href="/" passHref>
            <Styles.LogoWrapper onMouseOver={() => setHoverLogo(true)} onMouseLeave={() => setHoverLogo(false)}>
              <Image src="/assets/logo.svg" layout="fill" alt="logo" priority />
            </Styles.LogoWrapper>
          </Link>
          <Styles.LogoText active={hoverLogo}>moonerd.dev</Styles.LogoText>
        </>
      );
    }
  };

  return (
    <Styles.Wrapper scrolled={scrolled}>
      <Styles.RowWrapper>
        <Styles.LeftSectionWrapper>{renderLeftSection()}</Styles.LeftSectionWrapper>

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
      </Styles.RowWrapper>
    </Styles.Wrapper>
  );
};

export default memo(Header);
