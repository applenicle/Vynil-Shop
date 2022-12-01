import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  cartItem: [],
  // value: 1,
  count: 0,
  price: 0,
};

const cartSlice = createSlice({
  name: 'cartItem',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const id = state.cartItem.find((id) => id.cartItem === action.payload.id);
      if (id) id.count++;
      else {
        state.cartItem.push({ ...action.payload, count: 1 });
      }
      state.cartItem.reducer((acc, item) => item.count * item.price + acc, 0);
      state.cartItem.reducer((acc, item) => item.count + acc, 0);
    },

    removeItem: (state, action) => {
      const id = state.cartItem.find((id) => id.cartItem === action.payload.id);
      if (id) id.count--;
      state.cartItem.reducer((acc, item) => item.count * item.price + acc, 0);
      state.cartItem.reducer((acc, item) => item.count + acc, 0);
    },
    clearCart: (state) => {
      state.cartItem = [];
      state.price = 0;
      state.count = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
