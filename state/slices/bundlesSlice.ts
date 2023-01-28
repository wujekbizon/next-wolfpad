import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BundleStartAction, BundleCompleteAction } from '../actions';

interface BundlesState {
  [key: string]:
    | {
        loading: boolean;
        code: string;
        err: string;
      }
    | undefined;
}

const initialState: BundlesState = {};

const bundlesSlice = createSlice({
  name: 'bundle',
  initialState,
  reducers: {
    bundleStart(
      state: BundlesState,
      { payload }: PayloadAction<BundleStartAction>
    ) {
      state[payload.cellId] = {
        loading: true,
        code: '',
        err: '',
      };
    },
    bundleComplete(
      state: BundlesState,
      { payload }: PayloadAction<BundleCompleteAction>
    ) {
      state[payload.cellId] = {
        loading: false,
        code: payload.bundle.code,
        err: payload.bundle.err,
      };
    },
  },
});

export const { bundleStart, bundleComplete } = bundlesSlice.actions;

export const bundlesReducer = bundlesSlice.reducer;
