import { Typos } from 'components/Typo';
import { STYLES } from 'services/constants';
import styled, { css } from 'styled-components';
import { SpaceX } from 'styles/theme';

export const Wrapper = styled.header<{ scrolled: boolean }>`
  width: 100%;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(3px);
  z-index: 100;

  transition: box-shadow cubic-bezier(0.4, 0, 0.2, 1) 400ms;
  ${({ scrolled }) =>
    scrolled &&
    css`
      box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);
    `}
`;

export const RowWrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.width['3xl']};
  margin: 0 auto;
  padding: ${({ theme }) => theme.padding._4} ${({ theme }) => theme.padding._8};

  ${({ theme }) => theme.responsive.xl} {
    max-width: ${({ theme }) => theme.width['5xl']};
  }

  ${({ theme }) => theme.responsive.md} {
    padding: ${({ theme }) => theme.padding._4} ${({ theme }) => theme.padding._4};
  }

  display: flex;
  align-items: center;
`;

export const RightSectionWrapper = styled.nav`
  display: flex;
  justify-content: flex-end;

  align-items: center;
  flex: 1;
`;

export const LogoWrapper = styled.div`
  position: relative;
  width: 50px;
  height: 50px;

  cursor: pointer;
  transition: transform 200ms;

  ${({ theme }) => theme.responsive.md} {
    width: 60px;
    height: 60px;
  }

  &:hover {
    transform: rotate(-0.05turn) scale(1.1);
  }
`;

export const LogoText = styled.span<{ active?: boolean }>`
  position: relative;

  font-family: ${STYLES.font.msa};
  ${Typos.Heading3Style};
  font-weight: 600;

  opacity: 0;
  transform: translateX(-20px);
  transition-property: opacity, transform;
  transition-duration: 200ms;
  transition-timing-function: ease-out;

  z-index: 5;
  margin-left: 5px;

  ${({ active }) =>
    active &&
    css`
      opacity: 1;
      transform: translateX(10px);
    `}
`;

export const NavWrapper = styled.ul`
  display: flex;
  font-size: 16px;

  ${SpaceX(12)}
`;

export const NavItem = styled.li`
  padding: ${({ theme }) => theme.padding._2} ${({ theme }) => theme.padding._3};

  cursor: pointer;
  color: ${STYLES.color.greyscale500};
  font-family: ${STYLES.font.msa};
  transition-property: background-color, color;
  transition-timing-function: ease-out;
  transition-duration: 200ms;
  border-radius: 5px;

  &:hover {
    color: ${STYLES.color.greyscale900};
    background-color: ${STYLES.color.greyscale50};
  }

  &:active,
  &:focus {
    color: ${STYLES.color.greyscale950};
    background-color: ${STYLES.color.greyscale100};
  }
`;
