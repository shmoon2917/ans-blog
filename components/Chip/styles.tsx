import { Typos } from 'components/Typo';
import { STYLES } from 'services/constants';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { SpaceX } from 'styles/theme';

export const ChipSetWrapper = styled.ul<{ css?: FlattenSimpleInterpolation }>`
  position: relative;
  overflow: hidden;

  display: flex;
  overflow: scroll;
  ${SpaceX(8)};

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }

  ${({ css }) => css};
`;

export const ChipWrapper = styled.li<{ selected: boolean }>`
  border-radius: 100px;
  display: inline-block;
  padding: 8px 16px;
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
      pointer-events: none;
      background-color: ${STYLES.color.greyscale800};
      color: ${STYLES.color.light4};
    `}

  ${Typos.LabelLargeStyle};
  line-height: 18px;
`;
