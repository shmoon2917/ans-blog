import { Typos } from 'components/Typo';
import React, { ReactNode, useContext } from 'react';
import { STYLES } from 'services/constants';
import styled, { css } from 'styled-components';
import { SpaceX } from 'styles/theme';
import { ChipSetContext } from './context';
import { ChipProps, ChipSetProps } from './types';

const Chip = <T extends unknown>({ value, disabled, children }: ChipProps<T>): JSX.Element => {
  const context = useContext(ChipSetContext);
  const selected = context?.value !== undefined ? context?.value === value : false;

  const handleClick = () => {
    context?.onChange?.({ value });
  };

  return (
    <ChipWrapper selected={selected} disabled={disabled || context?.disabled} onClick={handleClick}>
      {children}
    </ChipWrapper>
  );
};

export default Chip;

const ChipSet = <T extends unknown>({ value, disabled, onChange, children }: ChipSetProps<T>) => {
  return (
    <ChipSetContext.Provider value={{ value, disabled, onChange }}>
      <ChipSetWrapper>{children}</ChipSetWrapper>
    </ChipSetContext.Provider>
  );
};

Chip.Set = ChipSet;

const ChipSetWrapper = styled.ul`
  display: flex;
  overflow: scroll;
  ${SpaceX(8)};

  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ChipWrapper = styled.li<{ selected: boolean; disabled: boolean | undefined }>`
  border-radius: 100px;
  display: inline-block;
  padding: 3px 10px;
  cursor: pointer;
  flex-shrink: 0;

  &:hover {
    background-color: ${STYLES.color.light3};
    color: ${STYLES.color.dark2};
  }

  &:active,
  &:focus {
    background-color: ${STYLES.color.light1};
    color: ${STYLES.color.dark2};
  }

  ${STYLES.media.mobile} {
    &:hover {
      background-color: unset;
      color: unset;
    }

    &:active,
    &:focus {
      background-color: unset;
      color: unset;
    }
  }

  ${({ selected }) =>
    selected
      ? css`
          pointer-events: none;
          background-color: ${STYLES.color.dark1};
          color: ${STYLES.color.light4};
        `
      : css`
          background-color: ${STYLES.color.light2};
          color: ${STYLES.color.dark2};
        `}

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      cursor: not-allowed;
      background-color: ${STYLES.color.light3};
      color: ${STYLES.color.dark4};
    `}

  ${Typos.LabelLargeStyle};
`;
