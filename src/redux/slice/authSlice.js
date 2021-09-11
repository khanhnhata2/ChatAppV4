/* eslint-disable no-param-reassign */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userName: null,
  password: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.userName = action.payload;
    },
  },
});

const {actions, reducer} = authSlice;

export const {saveUser} = actions;

export default reducer;
