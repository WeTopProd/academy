import { createSlice } from '@reduxjs/toolkit';
import { DisciplineChooseControl } from '../../types/DisciplinesType';
import disciplineSeed from './seeds/disciplinesSeed';

// DSC_id = Discipline Choose Control id
const initialState: DisciplineChooseControl = {
  DSC_id: false,
  step:1,
  chosen: {
    count_people: 1,
    date: '',
    time: '',
    start_lessons: '',
    type_payment: '',
    discipline: 0,
    type_lessons: null,
    count_lessons: null,
    additional_person: null,
  },
};

export const disciplineChooseControl = createSlice({
  name: 'disciplineChooseControl',
  initialState,
  reducers: {
    chooseDiscipline: (state, action) => {
      state.DSC_id = action.payload;
      state.chosen.discipline = Number(action.payload)
    },
    typeLessonChange:(state,action)=>{
      state.chosen.type_lessons = action.payload
    },
    countLessonsChange:(state,action)=>{
      state.chosen.count_lessons = action.payload
    },
    countStudentsChange:(state,action)=>{
      state.chosen.count_people = action.payload
    },
    nextBtn:(state,action)=>{
      state.step=action.payload
    }
  },
});

export const { chooseDiscipline,typeLessonChange,countLessonsChange,countStudentsChange,nextBtn } = disciplineChooseControl.actions;

export default disciplineChooseControl.reducer;
