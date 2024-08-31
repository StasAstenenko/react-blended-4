import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filters',
  initialState: '',
  reducers: {
    changeFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;

export const selectFilter = state => {
  return state.filter;
};
