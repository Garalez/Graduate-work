import { combineReducers, configureStore } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  // userData: userDataReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<typeof rootReducer>;
