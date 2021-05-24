import { Creator } from './creator';

export const clientCode = (creator: Creator): string => {
  return creator.someOperation();
};
