import { STYLES } from 'services/constants';
import styled, { css } from 'styled-components';

export const Wrapper = styled.header<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 20px ${STYLES.paddings.default}px;
  ${STYLES.media.mobile} {
    padding: 20px ${STYLES.paddings.mobile}px;
  }

  background-color: white;
  backdrop-filter: blur(40px);

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
  > * ~ * {
    margin-left: 25px;
  }

  ${STYLES.media.mobile} {
    > * ~ * {
      margin-left: 15px;
    }
  }
`;

export const LogoWrapper = styled.div`
  position: relative;
  width: 152px;
  height: 27px;

  ${STYLES.media.mobile} {
    width: 130px;
    height: 23px;
  }
`;

export const NavWrapper = styled.ul`
  display: flex;
  font-size: 16px;
  > * + * {
    margin-left: 25px;
  }

  ${STYLES.media.mobile} {
    > * ~ * {
      margin-left: 15px;
    }
  }
`;

export const NavItem = styled.li`
  cursor: pointer;
  color: ${STYLES.colors.dark2};
  font-family: ${STYLES.fonts.msa};
  transition: color ease-out 300ms;

  &:hover {
    color: ${STYLES.colors.dark3};
  }
`;
