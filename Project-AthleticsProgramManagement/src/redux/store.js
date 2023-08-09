import { configureStore } from '@reduxjs/toolkit';
import displayReducer from './slices/displaySlice';

export const store = configureStore({
  reducer: {
    display: displayReducer,
  },
});

export default store;