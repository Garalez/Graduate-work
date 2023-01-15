import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './accountRequest/accountRequestReducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
