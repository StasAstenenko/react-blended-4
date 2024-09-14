import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://637785ab81a568fc2518138f.mockapi.io/api';

export const fetchAllTodos = createAsyncThunk(
  'todos/fetchAllTodos',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('/todos');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const addTodo = createAsyncThunk(
  'todos/addTodo',
  async (newTodo, thunkApi) => {
    try {
      const { data } = await axios.post('/todos', newTodo);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const deleteTodo = createAsyncThunk(
  'todos/deleteTodo',
  async (id, thunkApi) => {
    try {
      await axios.delete(`/todos/${id}`);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const patchTodo = createAsyncThunk(
  'todos/patchTodo',
  async ({ id, ...updatedTodo }, thunkApi) => {
    try {
      const { data } = await axios.put(`/todos/${id}`, updatedTodo);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);
