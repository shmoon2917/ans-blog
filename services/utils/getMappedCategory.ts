import { CATEGORY } from 'services/constants';

export function getMappedCategory(category: string) {
  if (category in CATEGORY) {
    return CATEGORY[category as keyof typeof CATEGORY];
  }
  return category;
}
