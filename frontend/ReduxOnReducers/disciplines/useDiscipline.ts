import { disciplineSeed } from './disciplinesSeed';

export const disciplineInit = {
  type: 'disciplines/init',
  payload: disciplineSeed,
};

export const disciplineGetOne = (id) => {
  return { type: 'disciplines/getOne', payload: id };
};
