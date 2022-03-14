import React from 'react';

import Chip from 'components/Chip/Chip';
import { ChipSetProps } from 'components/Chip/types';
import { getMappedCategory } from 'services/utils';

interface CategorySliderProps {
  categories: string[];
  selected: string;
  onChange: ChipSetProps<string>['onChange'];
}

export const DEFAULT_CHIP_CAPTION = '전체';

const CategorySlider = ({ categories, selected, onChange }: CategorySliderProps) => {
  return (
    <Chip.Set value={selected} onChange={onChange}>
      <Chip value={null}>{DEFAULT_CHIP_CAPTION}</Chip>
      {categories.map((category) => (
        <Chip value={category} key={category}>
          {getMappedCategory(category)}
        </Chip>
      ))}
    </Chip.Set>
  );
};

export default CategorySlider;
