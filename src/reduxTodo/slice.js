import { createSelector, createSlice } from '@reduxjs/toolkit';
import { addTodo, deleteTodo, fetchAllTodos, patchTodo } from './operations';
import { selectFilter } from './filterSlice';

const INITIAL_STATE = {
  items: [],
  selectedTodo: null,
  isLoading: false,
  error: null,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState: INITIAL_STATE,
  reducers: {
    setSelectedTodo: (state, action) => {
      state.selectedTodo = action.payload;
    },
  },
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
        const index = state.items.findIndex(item => item.id === action.payload);
        state.items.splice(index, 1);
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(patchTodo.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(patchTodo.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.items.findIndex(item => {
          return item.id === action.payload.id;
        });

        state.items.splice(index, 1, action.payload);
        state.selectedTodo = null;
      })
      .addCase(patchTodo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const selectTodos = state => state.todos.items;
export const selectSelectedTodo = state => state.todos.selectedTodo;
export const selectFilteredTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) => {
    const filteredTodos = todos.filter(todo =>
      todo.text.toLowerCase().includes(filter.toLowerCase()),
    );
    return filteredTodos;
  },
);

export const { setSelectedTodo } = todoSlice.actions;
