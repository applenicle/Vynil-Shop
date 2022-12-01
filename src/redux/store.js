import { configureStore } from '@reduxjs/toolkit';
import CartReducer from './CartSlice/slice';
import CategoryReducer from './CategorySlice/slice';
import ItemsReducer from './ItemSlice/slice';

export const store = configureStore({
  reducer: {
    CartReducer,
    CategoryReducer,
    ItemsReducer,
  },
});
