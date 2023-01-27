import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cell } from '../cell';
import { SaveCellsErrorAction } from '../actions';

interface CellsState {
  loading: boolean;
  error: string | null;
  order: string[];
  data: {
    [key: string]: Cell;
  };
}

const initialState: CellsState = {
  loading: false,
  error: null,
  order: [],
  data: {},
};

const cellSlice = createSlice({
  name: 'cell',
  initialState,
  reducers: {
    saveCellsError(
      state: CellsState,
      { payload: { payload } }: PayloadAction<SaveCellsErrorAction>
    ) {
      state.error = payload;
    },
    fetchCells(state: CellsState) {
      state.loading = true;
      state.error = null;
    },
  },
});

export const { saveCellsError } = cellSlice.actions;
export default cellSlice.reducer;
