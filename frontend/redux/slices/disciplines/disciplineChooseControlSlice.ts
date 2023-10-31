import { createSlice } from '@reduxjs/toolkit';
import { DisciplineChooseControl } from '../../types/DisciplinesType';
import disciplineSeed from './seeds/disciplinesSeed';

// DSC_id = Discipline Choose Control id
const initialState: DisciplineChooseControl = {
  DSC_id: false,
  step: 1,
  chosen: {
    count_people: 1,
    lesson_dates: [],
    start_lessons: '',
    type_payment: '',
    discipline: 0,
    type_lessons: null,
    count_lessons: null,
    additional_person: null,
    general_time: '',
  },
  done: false,
  stepPolControl: {
    1: {
      discipline: false,
      type_lessons: false,
      count_lessons: false,
      count_people: false,
    },
    2: { start_lessons: false, general_time: false },
    3: { type_payment: false },
  },
};

export const disciplineChooseControl = createSlice({
  name: 'disciplineChooseControl',
  initialState,
  reducers: {
    chooseDiscipline: (state, action) => {
      state.DSC_id = action.payload;
      state.chosen.discipline = Number(action.payload);
    },
    typeLessonChange: (state, action) => {
      state.chosen.type_lessons = action.payload;
    },
    countLessonsChange: (state, action) => {
      state.chosen.count_lessons = action.payload;
    },
    countStudentsChange: (state, action) => {
      state.chosen.count_people = action.payload;
    },
    nextBtn: (state, action) => {
      state.step = action.payload;
    },
    change_lesson_dates: (state, action) => {
      state.chosen.lesson_dates = action.payload;
      state.chosen.start_lessons = action.payload[0]?.date;
      state.chosen.general_time = action.payload[0]?.time;
    },
    type_payment_control: (state, action) => {
      state.chosen.type_payment = action.payload;
    },
    payment_done: (state, action) => {
      state.done = action.payload;
    },
    step1PolControl: (state, action) => {
      state.stepPolControl[1][action.payload] = true;
    },
    step2PolControl: (state, action) => {
      state.stepPolControl[2][action.payload] = true;
    },
    step3PolControl: (state, action) => {
      state.stepPolControl[3][action.payload] = true;
    },
  },
});

export const {
  chooseDiscipline,
  typeLessonChange,
  countLessonsChange,
  countStudentsChange,
  nextBtn,
  change_lesson_dates,
  type_payment_control,
  payment_done,
  step1PolControl,
  step2PolControl,
  step3PolControl,
} = disciplineChooseControl.actions;

export default disciplineChooseControl.reducer;
