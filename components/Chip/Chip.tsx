import { Typos } from 'components/Typo';
import React, { ReactNode, useContext } from 'react';
import { STYLES } from 'services/constants';
import styled, { css } from 'styled-components';
import { SpaceX } from 'styles/theme';
import { ChipSetContext } from './context';
import { ChipProps, ChipSetProps } from './types';

const Chip = <T extends unknown>({ value, disabled, children }: ChipProps<T>): JSX.Element => {
  const context = useContext(ChipSetContext);
  const selected = context?.value ? context?.value === value : false;

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

const ChipSetWrapper = styled.ul`
  display: flex;
  ${SpaceX(8)}
`;

const ChipWrapper = styled.li<{ selected: boolean; disabled: boolean }>`
  border-radius: 100px;
  display: inline-block;
  padding: 3px 10px;
  cursor: pointer;

  &:hover {
    background-color: ${STYLES.color.light3};
    color: ${STYLES.color.dark2};
  }

  &:active,
  &:focus {
    background-color: ${STYLES.color.light1};
    color: ${STYLES.color.dark2};
  }

  ${({ selected }) =>
    selected
      ? css`
          pointer-events: none;
          background-color: ${STYLES.color.dark1};
          color: ${STYLES.color.light4};
          font-weight: bold;
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
