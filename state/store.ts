import { configureStore } from '@reduxjs/toolkit';
import bundlesReducer from './reducers/bundlesSlice';
import cellsReducer from './reducers/cellsSlice';

export const store = configureStore({
  reducer: {
    bundles: bundlesReducer,
    cells: cellsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
