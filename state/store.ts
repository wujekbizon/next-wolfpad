import { configureStore } from '@reduxjs/toolkit';
import bundlesReducer from './reducers/bundlesSlice';

export const store = configureStore({
  reducer: {
    bundles: bundlesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
