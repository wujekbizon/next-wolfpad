import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Cell } from '../cell';
import {
  SaveCellsErrorAction,
  FetchCellsCompleteAction,
  FetchCellsErrorAction,
  UpdateCellAction,
  DeleteCellAction,
} from '../actions';
import ActionsPlugin from '../../components/TextEditor/Plugins/ActionPlugin';

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
    fetchCellsError(
      state: CellsState,
      { payload: { payload } }: PayloadAction<FetchCellsErrorAction>
    ) {
      state.loading = false;
      state.error = payload;
    },
    updateCell(
      state: CellsState,
      { payload: { payload } }: PayloadAction<UpdateCellAction>
    ) {
      const { id, content } = payload;

      state.data[id].content = content;
    },
    deleteCell(
      state: CellsState,
      { payload: { payload } }: PayloadAction<DeleteCellAction>
    ) {
      delete state.data[payload];
      state.order = state.order.filter((id) => id !== payload);
    },
  },
});

export const {
  saveCellsError,
  fetchCellsStart,
  fetchCellsComplete,
  fetchCellsError,
  updateCell,
} = cellsSlice.actions;
export default cellsSlice.reducer;
