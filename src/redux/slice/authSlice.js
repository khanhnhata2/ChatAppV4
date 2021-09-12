/* eslint-disable no-param-reassign */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    saveUser: (state, action) => {
      //object
      state.user = action.payload;
    },
  },
});

const {actions, reducer} = authSlice;

export const {saveUser} = actions;

export default reducer;
