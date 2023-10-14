import { configureStore } from '@reduxjs/toolkit';
import displayReducer from './slices/displaySlice';
import filterReducer from './slices/filterSlice'; 
import profileReducer from './slices//profileSlice';
import eventDisplayReducer from './slices/eventDisplaySlice';

export const store = configureStore({
  reducer: {
    display: displayReducer,
    filter: filterReducer,    
    profile: profileReducer,
    eventDisplay: eventDisplayReducer,
  },
});

export default store;