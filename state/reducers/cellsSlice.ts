import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cell } from '../cell';
import { SaveCellsErrorAction, FetchCellsCompleteAction } from '../actions';

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

const cellsSlice = createSlice({
  name: 'cell',
  initialState,
  reducers: {
    saveCellsError(
      state: CellsState,
      { payload: { payload } }: PayloadAction<SaveCellsErrorAction>
    ) {
      state.error = payload;
    },
    fetchCellsStart(state: CellsState) {
      state.loading = true;
      state.error = null;
    },
    fetchCellsComplete(
      state: CellsState,
      { payload: { payload } }: PayloadAction<FetchCellsCompleteAction>
    ) {
      state.order = payload.map((cell) => cell.id);

      state.data = payload.reduce((acc, cell) => {
        acc[cell.id] = cell;
        return acc;
      }, {} as CellsState['data']);
    },
  },
});

export const { saveCellsError, fetchCellsStart, fetchCellsComplete } =
  cellsSlice.actions;
export default cellsSlice.reducer;
