import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSent: false,
};

export const sentRed = createSlice({
  name: 'sentRed',
  initialState,
  reducers: {
    sent: (state, action) => {
      state.isSent = true;
    },
    resetSent: (state, action) => {
      state.isSent = false;
    },
  },
});

export const { sent, resetSent } = sentRed.actions;

export default sentRed.reducer;
