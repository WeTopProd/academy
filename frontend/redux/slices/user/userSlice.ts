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
  },
  userProfilePageStatus:'MainUserProfile'
};

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userInit: (state, action) => {
      state.user = action.payload;
    },
    switchUserProfile:(state, action)=>{
        state.userProfilePageStatus = action.payload
    }
  },
});

export const { userInit,switchUserProfile } = user.actions;

export default user.reducer;