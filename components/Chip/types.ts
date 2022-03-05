import { ReactNode } from '@mdx-js/react/lib';

export interface ChipProps<T> {
  value?: T;
  disabled?: boolean;
  children?: ReactNode;
}

export interface ChipSetProps<T> {
  value?: T;
  onChange?: (e: { value?: T }) => void;
  disabled?: boolean;
  children?: ReactNode;
}

export interface ChipSetContextProps<T> {
  value?: T;
  onChange?: (e: { value?: T }) => void;
  disabled?: boolean;
}
