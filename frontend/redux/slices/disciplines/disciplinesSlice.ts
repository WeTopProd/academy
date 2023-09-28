import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
import { DisciplinesType } from '../../types/DisciplinesType';
import disciplineSeed from './seeds/disciplinesSeed';

const initialState: DisciplinesType[] = disciplineSeed;

export const disciplines = createSlice({
  name: 'disciplines',
  initialState,
  reducers: {
    // getOneTeacher:(state, action) => {
    //     return state.filter((el)=>el.id == action)
    // }
  },
});

// export const {getOneTeacher} = disciplines.actions

export default disciplines.reducer;
