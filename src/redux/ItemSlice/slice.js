import { createSlice } from '@reduxjs/toolkit';
import { fetchItems } from './asyncAction';

const initialState = {
  items: [],
  status: 'LOADING',
};

export const ItemSlice = createSlice({
  name: 'Vynil',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {
      state.status = 'LOADING';
      state.items = [];
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = 'SUCCESS';
    });
    builder.addCase(fetchItems.rejected, (state) => {
      state.status = 'ERROR';
      state.items = [];
    });
  },
});

export const { setItems } = ItemSlice.actions;
export default ItemSlice.reducer;
