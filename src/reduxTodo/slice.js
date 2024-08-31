import { createSlice } from '@reduxjs/toolkit';
import { addTodo, deleteTodo, fetchAllTodos } from './operations';

const INITIAL_STATE = { items: [], isLoading: false, error: null };

export const todoSlice = createSlice({
  name: 'todo',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(addTodo.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(addTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchAllTodos.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchAllTodos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchAllTodos.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteTodo.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(todo => todo.id !== action.payload);
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const selectTodos = state => state.todos.items;
