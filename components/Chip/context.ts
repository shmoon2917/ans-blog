import { createContext } from 'react';
import { ChipSetContextProps } from './types';

export const ChipSetContext = createContext<ChipSetContextProps<any> | null>(null);
