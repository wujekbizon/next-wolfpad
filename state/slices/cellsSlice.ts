import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';
import { Cell } from '../cell';
import {
  SaveCellsErrorAction,
  FetchCellsCompleteAction,
  FetchCellsErrorAction,
  UpdateCellAction,
  MoveCellAction,
  InsertCellAfterAction,
} from '../actions';

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
      { payload }: PayloadAction<UpdateCellAction>
    ) {
      const { id, content } = payload;

      state.data[id].content = content;
    },
    deleteCell(state: CellsState, { payload }: PayloadAction<string>) {
      delete state.data[payload];
      state.order = state.order.filter((id) => id !== payload);
    },
    moveCell(state: CellsState, { payload }: PayloadAction<MoveCellAction>) {
      const { direction } = payload;
      const index = state.order.findIndex((id) => id === payload.id);
      const targetIndex = direction === 'up' ? index - 1 : index + 1;

      if (targetIndex < 0 || targetIndex > state.order.length - 1) {
        return state;
      }
      state.order[index] = state.order[targetIndex];
      state.order[targetIndex] = payload.id;
    },
    insertCellAfter(
      state: CellsState,
      { payload }: PayloadAction<InsertCellAfterAction>
    ) {
      const cell: Cell = {
        content: '',
        type: payload.type,
        id: nanoid(),
      };

      state.data[cell.id] = cell;

      const foundIndex = state.order.findIndex((id) => id === payload.id);

      if (foundIndex < 0) {
        state.order.unshift(cell.id);
      } else {
        state.order.splice(foundIndex + 1, 0, cell.id);
      }
    },
  },
});

export const {
  saveCellsError,
  fetchCellsStart,
  fetchCellsComplete,
  fetchCellsError,
  updateCell,
  moveCell,
  insertCellAfter,
  deleteCell,
} = cellsSlice.actions;

export const cellsReducer = cellsSlice.reducer;
