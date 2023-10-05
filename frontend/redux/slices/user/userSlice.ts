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
    date_of_birth:null
  },
  userProfilePageStatus:'MainUserProfile'
};

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userInit: (state, action) => {
        console.log(action.payload);
        
      state.user = action.payload;

    },
    userEdit:(state,action)=>{
    

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
