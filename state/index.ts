import { configureStore } from '@reduxjs/toolkit';
import {
  bundlesReducer,
  bundleStart,
  bundleComplete,
} from './slices/bundlesSlice';
import {
  cellsReducer,
  insertCellAfter,
  deleteCell,
  updateCell,
  moveCell,
} from './slices/cellsSlice';
import { createBundle } from './apiCalls';

export const store = configureStore({
  reducer: {
    bundles: bundlesReducer,
    cells: cellsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const actionCreators = {
  bundleStart,
  bundleComplete,
  insertCellAfter,
  deleteCell,
  updateCell,
  moveCell,
  createBundle,
};

store.dispatch(
  insertCellAfter({
    id: null,
    type: 'text',
  })
);
store.dispatch(
  insertCellAfter({
    id: null,
    type: 'code',
  })
);
