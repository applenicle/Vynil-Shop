import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItem: [],
  count: 0,
  price: 0,
};

const cartSlice = createSlice({
  name: 'Cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const id = state.cartItem.find((item) => item.id === action.payload.id);
      if (id) {
        id.count++;
      } else {
        state.cartItem.push({ ...action.payload, count: 1 });
      }
      state.price = state.cartItem.reduce((acc, item) => item.count * item.price + acc, 0);
      state.count = state.cartItem.reduce((acc, item) => item.count + acc, 0);
    },
    minusItem: (state, action) => {
      const id = state.cartItem.find((item) => item.id === action.payload.id);
      if (id) {
        id.count--;
      } else {
        state.cartItem.push({ ...action.payload, count: 1 });
      }
      state.price = state.cartItem.reduce((acc, item) => item.count * item.price + acc, 0);
      state.count = state.cartItem.reduce((acc, item) => item.count + acc, 0);
    },
    removeItem: (state, action) => {
      state.cartItem = state.cartItem.filter((item) => item.id !== action.payload);

      state.price = state.cartItem.reduce((acc, item) => item.count * item.price + acc, 0);
      state.count = state.cartItem.reduce((acc, item) => item.count + acc, 0);
    },
    clearCart: (state) => {
      state.cartItem = [];
      state.count = 0;
      state.price = 0;
    },
  },
});

export const { addItem, removeItem, minusItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
