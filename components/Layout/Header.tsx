import classNames from 'classnames';
import ThemeToggle from 'components/Button/ThemeToggle';
import { useScrolled } from 'hooks';
import Image from 'next/image';
import React, { memo } from 'react';

const Header: React.FC = () => {
  const scrolled = useScrolled();

  return (
    <header
      className={classNames([
        scrolled && 'border-b border-black border-opacity-5',
        'fixed top-0 left-0 right-0 flex justify-between items-center px-[40px] py-[20px] bg-white backdrop-blur-[40px]',
      ])}
    >
      <div className="flex items-center space-x-[25px]">
        <Image src="/assets/logo.svg" width="152" height="27" alt="logo" />
        <ul className="flex space-x-[25px] text-[16px]">
          <HeaderNavItem>resume</HeaderNavItem>
          <HeaderNavItem>github</HeaderNavItem>
        </ul>
      </div>
      <ThemeToggle />
    </header>
  );
};

export default memo(Header);

const HeaderNavItem: React.FC = ({ children }) => {
  return (
    <li className="text-dark-2 font-msa">
      <a>{children}</a>
    </li>
  );
};
