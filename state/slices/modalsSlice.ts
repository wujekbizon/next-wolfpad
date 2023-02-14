import { createSlice } from '@reduxjs/toolkit';

interface SideModalState {
  isMenuOpen: boolean;
}

const initialState: SideModalState = {
  isMenuOpen: false,
};

const modalsSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openSideMenu(state: SideModalState) {
      state.isMenuOpen = true;
    },
    closeSideMenu(state: SideModalState) {
      state.isMenuOpen = false;
    },
  },
});

export const { openSideMenu, closeSideMenu } = modalsSlice.actions;

export const modalsReducer = modalsSlice.reducer;
