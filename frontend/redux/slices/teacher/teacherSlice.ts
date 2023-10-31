import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { DisciplinesTypes } from '../../types';
import teacherSeed from './seeds/teacherSeed';
import { ITeacher } from '../../types/teacherType';

const initialState: { data: ITeacher[] } = { data: [] };
export const teacher = createSlice({
  name: 'teacher',
  initialState,
  reducers: {
    teachersInit: (state, action) => {
      state.data = action.payload;
    },
    updateTeacher: (state, action) => {
      state.data = state.data.map((el) => {
        if (el.id == action.payload.id) {
          return action.payload;
        } else {
          return el;
        }
      });
    },
  },
});
export const { teachersInit, updateTeacher } = teacher.actions;

export default teacher.reducer;
