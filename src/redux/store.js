import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import CartReducer from './CartSlice/slice';
import CategoryReducer from './CategorySlice/slice';
import ItemsReducer from './ItemSlice/slice';
import { fetchItems } from './ItemSlice/asyncAction';

const rootReducer = combineReducers({
  ItemsReducer,
  CategoryReducer,
  CartReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blackList: [fetchItems],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
