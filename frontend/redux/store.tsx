import {
  configureStore,
  ThunkAction,
  Action,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import teacherSlice from './slices/teacher/teacherSlice';
import LargeTeacherSlice from './slices/teacher/LargeTeacherSlice';
import disciplinesSlice from './slices/disciplines/disciplinesSlice';
import modalSlice from './slices/modalSlice';
import { mailApi } from './api/mailApi';
import { loginApi } from './api/loginApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import sentRedSlice from './slices/sendFormConfirmation';
import  user from './slices/user/userSlice';

const makeStore = () =>
  configureStore({
    reducer: {
      user: user,
      teacher: teacherSlice,
      teacherLarge: LargeTeacherSlice,
      disciplines: disciplinesSlice,
      modal: modalSlice,
      [mailApi.reducerPath]: mailApi.reducer,
      [loginApi.reducerPath]: loginApi.reducer,
      sent: sentRedSlice,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(loginApi.middleware, mailApi.middleware),
    devTools: true,
  });

export const store = makeStore();

export type RootStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<RootStore['getState']>;
export type AppDispatch = RootStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;

export default store;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const wrapper = createWrapper<RootStore>(makeStore);
