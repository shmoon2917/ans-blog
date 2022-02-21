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

  padding: 20px 40px;
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
  > * + * {
    margin-left: 25px;
  }
`;

export const NavWrapper = styled.ul`
  display: flex;
  font-size: 16px;
  > * + * {
    margin-left: 25px;
  }
`;

export const NavItem = styled.li`
  color: ${STYLES.colors.dark2};
  font-family: ${STYLES.fonts.msa};
`;
