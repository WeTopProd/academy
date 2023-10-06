import { createSlice } from '@reduxjs/toolkit';
import { loginApi2 } from '../../api/loginApi';
const initialState = {
  user: {
    first_name: '',
    last_name: '',
    phone: '',
    email: '',
    id: 0,
    token: '',
    date_of_birth: null,
    photo: null,
    user_type: null,
  },
  userProfilePageStatus: 'MainUserProfile',
};

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userInit: (state, action) => {
      state.user = action.payload;
    },
    userEdit: (state, action) => {
      state.user = action.payload;
    },
    userLogOut: (state, action) => {
      state.user = initialState.user;
    },

    // RENDER CONTROL
    // User Profile Page
    switchUserProfile: (state, action) => {
      state.userProfilePageStatus = action.payload;
    },
  },
});

export const { userInit, userEdit,userLogOut, switchUserProfile } = user.actions;

export default user.reducer;
