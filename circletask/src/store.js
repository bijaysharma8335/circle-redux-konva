import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterslice';
// import { createSlice } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    radius: counterReducer,
  },
});



