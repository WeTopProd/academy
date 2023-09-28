import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { DisciplinesTypes } from '../../types';
import teacherSeed from './seeds/teacherSeed';
import { ITeacher } from '../../types/teacherType';

const initialState: ITeacher[] = teacherSeed;
export const teacher = createSlice({
  name: 'teacher',
  initialState,
  reducers: {
    // getOneTeacher:(state, PayloadAction) => {
    //     state = state.filter((el)=>{
    //         if(el.id == PayloadAction)
    //     })
    // }
  },
});

export default teacher.reducer;
