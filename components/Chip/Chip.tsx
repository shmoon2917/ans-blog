import React, { ReactNode, useContext } from 'react';
import * as Styles from './styles';
import { ChipSetContext } from './context';
import { ChipProps, ChipSetProps } from './types';
import { DEFAULT_CHIP_CAPTION } from 'containers/CategorySlider';

const Chip = <T extends unknown>({ value, children }: ChipProps<T>): JSX.Element => {
  const context = useContext(ChipSetContext);
  const selected = context?.value !== undefined ? context?.value === value : children === DEFAULT_CHIP_CAPTION ? true : false;

  const handleClick = () => {
    context?.onChange?.({ value });
  };

  return (
    <Styles.ChipWrapper selected={selected} onClick={handleClick}>
      {children}
    </Styles.ChipWrapper>
  );
};

export default Chip;

const ChipSet = <T extends unknown>({ value, disabled, onChange, children }: ChipSetProps<T>) => {
  return (
    <ChipSetContext.Provider value={{ value, disabled, onChange }}>
      <Styles.ChipSetWrapper>{children}</Styles.ChipSetWrapper>
    </ChipSetContext.Provider>
  );
};

Chip.Set = ChipSet;
