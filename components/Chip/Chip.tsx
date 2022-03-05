import withHorizontalScrollShadower from 'components/Common/withHorizontalScrollShadower';
import React, { ReactNode, useContext } from 'react';
import * as Styles from './styles';
import { ChipSetContext } from './context';
import { ChipProps, ChipSetProps } from './types';
import { SpaceX } from 'styles/theme';

const Chip = <T extends unknown>({ value, disabled, children }: ChipProps<T>): JSX.Element => {
  const context = useContext(ChipSetContext);
  const selected = context?.value !== undefined ? context?.value === value : false;

  const handleClick = () => {
    context?.onChange?.({ value });
  };

  return (
    <Styles.ChipWrapper selected={selected} disabled={disabled || context?.disabled} onClick={handleClick}>
      {children}
    </Styles.ChipWrapper>
  );
};

export default Chip;

const ChipSet = <T extends unknown>({ value, disabled, onChange, children }: ChipSetProps<T>) => {
  return (
    <ChipSetContext.Provider value={{ value, disabled, onChange }}>
      <ChipSetWrapper scrollAreaStyle={SpaceX(8)}>{children}</ChipSetWrapper>
    </ChipSetContext.Provider>
  );
};

const ChipSetWrapper = withHorizontalScrollShadower(Styles.ChipSetWrapper);

Chip.Set = ChipSet;
