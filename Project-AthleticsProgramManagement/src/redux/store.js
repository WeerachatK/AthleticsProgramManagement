import { configureStore } from '@reduxjs/toolkit';
import displayReducer from './slices/displaySlice';
import filterReducer from './slices/filterSlice'; 

export const store = configureStore({
  reducer: {
    display: displayReducer,
    filter: filterReducer,    
  },
});

export default store;