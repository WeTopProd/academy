import { createSlice } from '@reduxjs/toolkit';
import { DisciplineChooseControl } from '../../types/DisciplinesType';
import disciplineSeed from './seeds/disciplinesSeed';

// DSC_id = Discipline Choose Control id
const initialState: DisciplineChooseControl = {DSC_id:false};

export const disciplineChooseControl = createSlice({
  name: 'disciplineChooseControl',
  initialState,
  reducers: {
   chooseDiscipline:(state, action)=>{
    state.DSC_id = action.payload
   }
    
  },
});

export const {chooseDiscipline} = disciplineChooseControl.actions

export default disciplineChooseControl.reducer;
