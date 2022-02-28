import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import styled from 'styled-components';

const ThemeToggle: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [src, setSrc] = useState('data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7');

  useEffect(() => {
    switch (resolvedTheme) {
      case 'light':
        setSrc('/assets/sun.svg');
        break;
      case 'dark':
        setSrc('/assets/moon.svg');
        break;
      default:
        break;
    }
  }, [resolvedTheme]);

  return (
    <Wrapper onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}>
      <Image src={src} layout="fill" alt="theme-toggle-button" />
    </Wrapper>
  );
};

export default ThemeToggle;

const Wrapper = styled.button`
  position: relative;
  width: 24px;
  height: 24px;
`;
