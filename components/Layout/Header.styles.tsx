import { STYLES } from 'services/constants';
import styled, { css } from 'styled-components';
import { SpaceX } from 'styles/theme';

export const Wrapper = styled.header<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px ${STYLES.padding.default}px;
  ${STYLES.media.mobile} {
    padding: 20px ${STYLES.padding.mobile}px;
  }

  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  z-index: 100;

  transition: box-shadow cubic-bezier(0.4, 0, 0.2, 1) 400ms;
  ${({ scrolled }) =>
    scrolled &&
    css`
      boxshadow: 0px 1px 0px rgba(0, 0, 0, 0.05);
    `}
`;

export const LeftSectionWrapper = styled.div`
  display: flex;
  align-items: center;

  ${SpaceX(25)}
  ${STYLES.media.mobile} {
    ${SpaceX(15)}
  }
`;

export const LogoWrapper = styled.div`
  position: relative;
  width: 152px;
  height: 27px;
  cursor: pointer;

  ${STYLES.media.mobile} {
    width: 130px;
    height: 23px;
  }
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
  transition: color ease-out 300ms;

  &:hover {
    color: ${STYLES.color.dark3};
  }
`;
