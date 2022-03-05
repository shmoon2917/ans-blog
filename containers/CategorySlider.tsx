import React from 'react';

import Chip from 'components/Chip/Chip';
import { ChipSetProps } from 'components/Chip/types';

interface CategorySliderProps {
  categories: string[];
  selected: string;
  onChange: ChipSetProps<string>['onChange'];
}

const CategorySlider = ({ categories, selected, onChange }: CategorySliderProps) => {
  return (
    <Chip.Set value={selected} onChange={onChange}>
      <Chip value={null}>전체</Chip>
      {categories.map((category) => (
        <Chip value={category} key={category}>
          {category}
        </Chip>
      ))}
    </Chip.Set>
  );
};

export default CategorySlider;
