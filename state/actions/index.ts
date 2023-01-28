import { Cell, CellTypes } from '../cell';

export type Direction = 'up' | 'down';

export interface MoveCellAction {
  id: string;
  direction: Direction;
}

export interface InsertCellAfterAction {
  id: string | null;
  type: CellTypes;
}

export interface UpdateCellAction {
  id: string;
  content: string;
}

export interface BundleStartAction {
  cellId: string;
}

export interface BundleCompleteAction {
  cellId: string;
  bundle: {
    code: string;
    err: string;
  };
}

export interface FetchCellsCompleteAction {
  payload: Cell[];
}

export interface FetchCellsErrorAction {
  payload: string;
}

export interface SaveCellsErrorAction {
  payload: string;
}
