import Action from './action';
import { State } from '../type/type';
import {disciplineSeed} from './disciplinesSeed';

export const initState: State = { disciplines: disciplineSeed };
export const disciplinesReducer = (
  state: State = initState,
  action: Action
): State => {
  switch (action.type) {
    case 'disciplines/init':
      return {
        ...state,
        disciplines: action.payload,
        // disciplines: disciplineSeed,
      };
    case 'disciplines/getOne':
      return {
        ...state,
        disciplines: state.disciplines.filter((el) => el.id == action.payload),
      };

    default:
      return state;
  }
};