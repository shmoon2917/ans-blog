import styled, { css, DefaultTheme } from 'styled-components';

export const SpaceX = (margin: number) => css`
  & > * + * {
    margin-left: ${pxToRem(margin)};
  }
`;

export const SpaceY = (margin: number) => css`
  & > * + * {
    margin-top: ${pxToRem(margin)};
  }
`;

const pxToRem = (size: number) => `${size / 16}rem`;

const padding = {
  _0: pxToRem(0),
  _1: pxToRem(4),
  _2: pxToRem(8),
  _3: pxToRem(12),
  _4: pxToRem(16),
  _5: pxToRem(20),
  _6: pxToRem(24),
  _7: pxToRem(28),
  _8: pxToRem(32),
  _9: pxToRem(36),
  _10: pxToRem(40),
  _11: pxToRem(44),
  _12: pxToRem(48),
  _13: pxToRem(52),
  _14: pxToRem(56),
  _15: pxToRem(60),
  _16: pxToRem(64),
};

const margin = padding;

const width = {
  xs: pxToRem(320),
  sm: pxToRem(384),
  md: pxToRem(448),
  lg: pxToRem(512),
  xl: pxToRem(576),
  '2xl': pxToRem(672),
  '3xl': pxToRem(768),
  '4xl': pxToRem(896),
  '5xl': pxToRem(1024),
  '6xl': pxToRem(1152),
  'screen-md': '768px',
  'screen-lg': '1024px',
  'screen-xl': '1280px',
  full: '100%',
};

const responsive = {
  xl: '@media screen and (min-width: 1280px)',
  lg: '@media screen and (min-width: 1024px)',
  md: '@media screen and (min-width: 768px)',
  sm: '@media screen and (min-width: 640px)',
} as const;

const theme: DefaultTheme = {
  padding,
  margin,
  width,
  responsive,
};

export type Responsive = typeof responsive;

export type Width = typeof width;

export type Margin = typeof margin;

export type Padding = typeof padding;

export default theme;
