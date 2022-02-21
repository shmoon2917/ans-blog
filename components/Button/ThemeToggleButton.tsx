import React from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import styled from 'styled-components';

const ThemeToggle: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const renderIcon = () => {
    let src = '';

    switch (resolvedTheme) {
      case 'light':
        src = '/assets/sun.svg';
        break;
      case 'dark':
        src = '/assets/moon.svg';
        break;
      default:
        src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
        break;
    }

    <Image src={src} layout="fill" alt={`Turn into the ${resolvedTheme} mode`} />;
  };

  return (
    <Wrapper onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}>
      {renderIcon()}
      <Image src="/assets/sun.svg" layout="fill" alt="Turn into the dark mode" />
    </Wrapper>
  );
};

export default ThemeToggle;

const Wrapper = styled.button`
  position: relative;
  width: 24px;
  height: 24px;
`;
