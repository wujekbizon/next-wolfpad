import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../user';

interface UsersState {
  currentUser: null | User;
  isFetching: boolean;
  error: boolean;
}

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state: UsersState) => {
      state.isFetching = true;
      state.error = false;
    },
    loginSuccess: (state: UsersState, { payload }: PayloadAction<User>) => {
      state.isFetching = false;
      state.currentUser = payload;
    },
    loginFailure: (state: UsersState) => {
      state.isFetching = false;
      state.error = true;
    },
    logoutUser: (state: UsersState) => {
      state.currentUser = null;
    },
    registerStart: (state: UsersState) => {
      state.isFetching = true;
      state.error = false;
    },
    registerSuccess: (state: UsersState, { payload }: PayloadAction<User>) => {
      state.isFetching = false;
      state.currentUser = payload;
    },
    registerFailure: (state: UsersState) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  loginSuccess,
  loginStart,
  loginFailure,
  logoutUser,
  registerStart,
  registerSuccess,
  registerFailure,
} = userSlice.actions;

export const usersReducer = userSlice.reducer;
