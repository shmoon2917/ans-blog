import { Typos } from 'components/Typo';
import { STYLES } from 'services/constants';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { SpaceX } from 'styles/theme';

export const ChipSetWrapper = styled.ul`
  flex: 1;
  display: flex;
  justify-content: center;

  position: relative;
  overflow-x: auto;

  -webkit-overflow-scrolling: touch;
  ${SpaceX(12)};

  ${({ theme }) => theme.responsive.md} {
    justify-content: flex-start;
    ${SpaceX(8)};
  }
`;

export const ChipWrapper = styled.li<{ selected: boolean }>`
  border-radius: 100px;
  display: inline-block;
  padding: 12px 24px;
  cursor: pointer;
  flex-shrink: 0;

  background-color: ${STYLES.color.greyscale50};
  color: ${STYLES.color.greyscale950};
  transition: background-color 200ms;

  &:hover {
    background-color: ${STYLES.color.greyscale100};
  }

  &:active,
  &:focus {
    background-color: ${STYLES.color.greyscale200};
  }

  ${({ selected }) =>
    selected &&
    css`
      background-color: ${STYLES.color.greyscale800};
      color: ${STYLES.color.light4};

      &:hover {
        background-color: ${STYLES.color.greyscale900};
      }
    `}

  font-size: 1rem;
  line-height: 18px;

  ${({ theme }) => theme.responsive.md} {
    padding: 8px 16px;
  }
`;
