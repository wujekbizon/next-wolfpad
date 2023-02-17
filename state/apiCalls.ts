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
import { RootState } from '../state';
import axios from 'axios';

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
      const { data }: { data: Cell[] } = await axios.get('api/cells');
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
