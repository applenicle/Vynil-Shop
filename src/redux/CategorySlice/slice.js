import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  category: 0,
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setCategory } = categorySlice.actions;

export default categorySlice.reducer;
