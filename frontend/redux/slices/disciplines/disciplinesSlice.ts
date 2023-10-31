import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
import { DisciplinesType } from '../../types/DisciplinesType';
import disciplineSeed from './seeds/disciplinesSeed';

const initialState: {data:DisciplinesType[]} = {data:[]};

export const disciplines = createSlice({
  name: 'disciplines',
  initialState,
  reducers: {
    disciplineInit: (state, action) => {      
      // state.data = [...state.data, ...action.payload]
      state.data = action.payload
    },
  },
});

export const { disciplineInit } = disciplines.actions;

export default disciplines.reducer;
