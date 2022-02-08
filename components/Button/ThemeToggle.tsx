import React from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button className="relative w-[24px] h-[24px]" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      {theme === 'light' ? (
        <Image src="/assets/sun.svg" layout="fill" alt="Turn into the dark mode" />
      ) : (
        <Image src="/assets/moon.svg" layout="fill" alt="Turn into the light mode" />
      )}
    </button>
  );
};

export default ThemeToggle;
