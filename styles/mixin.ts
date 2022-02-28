import styled, { css } from 'styled-components';

export const SpaceX = (margin: number) => css`
  & > * + * {
    margin-left: ${margin}px;
  }
`;

export const SpaceY = (margin: number) => css`
  & > * + * {
    margin-top: ${margin}px;
  }
`;
