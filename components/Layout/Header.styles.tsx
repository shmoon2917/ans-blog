import { Typos } from 'components/Typo';
import { STYLES } from 'services/constants';
import styled, { css } from 'styled-components';
import { SpaceX } from 'styles/theme';

export const Wrapper = styled.header<{ scrolled: boolean }>`
  max-width: 1024px;
  margin: 0 auto;
  grid-area: header;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;

  padding: 20px ${STYLES.padding.default}px;
  ${STYLES.media.mobile} {
    padding: 20px ${STYLES.padding.mobile}px;
  }

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

export const RightSectionWrapper = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;

  ${SpaceX(25)}
  ${STYLES.media.mobile} {
    ${SpaceX(15)}
  }
`;

export const LogoWrapper = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  cursor: pointer;
  transition: transform 200ms;
  z-index: 10;

  ${STYLES.media.mobile} {
    width: 130px;
    height: 23px;
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

  ${SpaceX(25)}
  ${STYLES.media.mobile} {
    ${SpaceX(15)}
  }
`;

export const NavItem = styled.li`
  cursor: pointer;
  color: ${STYLES.color.dark2};
  font-family: ${STYLES.font.msa};
  transition: color ease-out 200ms;

  &:hover {
    color: ${STYLES.color.dark3};
  }
`;
