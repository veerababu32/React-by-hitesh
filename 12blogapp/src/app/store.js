import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../feature/authSlice/authSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});
