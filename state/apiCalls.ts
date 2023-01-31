import { Dispatch } from '@reduxjs/toolkit';
import codeProcessor from '../bundler';
import { Cell } from './cell';
import { bundleStart, bundleComplete } from './slices/bundlesSlice';
import {
  fetchCellsStart,
  fetchCellsError,
  fetchCellsComplete,
} from './slices/cellsSlice';
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
        bundle: result || { code: '', err: '' },
      })
    );
  };
};

export const fetchCells = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchCellsStart());

    try {
      const { data }: { data: Cell[] } = await axios.get('/cells');
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
