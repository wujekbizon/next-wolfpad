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
import {
  modalsReducer,
  openSideMenu,
  closeSideMenu,
} from './slices/modalsSlice';
import {
  usersReducer,
  loginFailure,
  loginStart,
  loginSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
  logoutUser,
} from './slices/usersSlice';
import {
  createBundle,
  fetchCells,
  saveCells,
  registerNewUser,
  loginUser,
} from './apiCalls';

export const store = configureStore({
  reducer: {
    bundles: bundlesReducer,
    cells: cellsReducer,
    modals: modalsReducer,
    users: usersReducer,
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
  openSideMenu,
  closeSideMenu,
  fetchCells,
  saveCells,
  registerStart,
  registerSuccess,
  registerFailure,
  loginFailure,
  loginStart,
  loginSuccess,
  logoutUser,
  registerNewUser,
  loginUser,
};

// store.dispatch(
//   insertCellAfter({
//     id: null,
//     type: 'code',
//   })
// );

// store.dispatch(
//   insertCellAfter({
//     id: null,
//     type: 'text',
//   })
// );
