import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchItems = createAsyncThunk('items', async (params) => {
  const { categories } = params;
  const { data } = await axios.get(`https://62c96901d9ead251e8bb4e90.mockapi.io/f?${categories}`);
  console.log(data);
  return data;
});
