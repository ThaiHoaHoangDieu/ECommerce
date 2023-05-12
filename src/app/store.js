import { configureStore } from '@reduxjs/toolkit';
import authReduce from '../features/users/UserSlice';

export const store = configureStore({
  reducer: {
    auth: authReduce,
  },
});
