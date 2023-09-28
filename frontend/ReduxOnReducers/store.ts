import { combineReducers, createStore } from 'redux';
import { disciplinesReducer } from './disciplines/reducer';



const store = createStore(
  combineReducers({
    disciplinesReducer
  })
);

export default store;
export type RootState = ReturnType<typeof store.getState>;


