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
    userEdit:(state,action)=>{
        console.log(state.user,'11111111111111111111111111111');
        console.log(action.payload,'2222222222222222222222222222');

        state.user = action.payload
    },


    // RENDER CONTROL 
    // User Profile Page
    switchUserProfile:(state, action)=>{
        state.userProfilePageStatus = action.payload
    }
  },
});

export const { userInit,userEdit,switchUserProfile } = user.actions;

export default user.reducer;
