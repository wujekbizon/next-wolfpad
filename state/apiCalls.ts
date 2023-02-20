import { Dispatch } from '@reduxjs/toolkit';
import codeProcessor from '../bundler';
import { Cell } from './cell';
import { bundleStart, bundleComplete } from './slices/bundlesSlice';
import {
  fetchCellsStart,
  fetchCellsError,
  fetchCellsComplete,
  saveCellsError,
} from './slices/cellsSlice';
import {
  loginStart,
  loginFailure,
  loginSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
} from './slices/usersSlice';
import { RootState } from '../state';
import axios from 'axios';
import { User } from './user';

export const createBundle = (cellId: string, input: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(
      bundleStart({
        cellId,
      })
    );

    const result = await codeProcessor(input);

    dispatch(
      bundleComplete({
        cellId,
        bundle: result,
      })
    );
  };
};

export const fetchCells = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchCellsStart());

    try {
      const { data }: { data: Cell[] } = await axios.get('/api/cells');
      dispatch(
        fetchCellsComplete({
          payload: data,
        })
      );
    } catch (error) {
      if (error instanceof Error) {
        dispatch(
          fetchCellsError({
            payload: error.message,
          })
        );
      } else {
        throw error;
      }
    }
  };
};

export const saveCells = () => {
  return async (dispatch: Dispatch, getState: () => RootState) => {
    const {
      cells: { data, order },
    } = getState();

    const cells = order.map((id) => data[id]);

    try {
      await axios.post('api/cells', { cells });
    } catch (error) {
      if (error instanceof Error) {
        dispatch(saveCellsError({ payload: error.message }));
      } else {
        console.log(error);
      }
    }
  };
};

export const registerNewUser = (user: User) => {
  return async (dispatch: Dispatch) => {
    dispatch(registerStart());

    try {
      const response = await axios.post('/api/signup', user);
      dispatch(registerSuccess(response.data));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(registerFailure());
      } else {
        console.log(error);
      }
    }
  };
};

export const loginUser = (user: User) => {
  return async (dispatch: Dispatch) => {
    dispatch(loginStart());

    try {
      const response = await axios.post('/api/signin', user);
      dispatch(loginSuccess(response.data));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(loginFailure());
      } else {
        console.log(error);
      }
    }
  };
};
