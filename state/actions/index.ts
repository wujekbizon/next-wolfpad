import { Cell, CellTypes } from '../cell';

export type Direction = 'up' | 'down';

export interface MoveCellAction {
  id: string;
  direction: Direction;
}

export interface DeleteCellAction {
  payload: string;
}

export interface InsertCellAfterAction {
  id: string | null;
  type: CellTypes;
}

export interface UpdateCellAction {
  payload: {
    id: string;
    content: string;
  };
}

export interface BundleStartAction {
  payload: {
    cellId: string;
  };
}

export interface BundleCompleteAction {
  payload: {
    cellId: string;
    bundle: {
      code: string;
      err: string;
    };
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

export type Action =
  | MoveCellAction
  | DeleteCellAction
  | InsertCellAfterAction
  | UpdateCellAction
  | BundleCompleteAction
  | BundleStartAction
  | FetchCellsCompleteAction
  | FetchCellsErrorAction
  | SaveCellsErrorAction;
