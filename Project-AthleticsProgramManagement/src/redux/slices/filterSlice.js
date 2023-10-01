import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',                 
  initialState: 'All',           
  reducers: {
    setFilter: (state, action) => {   
      return action.payload;         
    },
  },
});

// ส่งออก actions และ reducer
export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
