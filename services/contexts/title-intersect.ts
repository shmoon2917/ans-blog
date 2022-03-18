import { createContext } from 'react';

export const TitleIntersectCtx = createContext<{
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}>({
  title: '',
  setTitle: null as any,
});
