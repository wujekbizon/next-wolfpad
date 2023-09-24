import { createSlice } from '@reduxjs/toolkit'

interface ModalsState {
  isMenuOpen: boolean
  isChatMenuOpen: boolean
}

const initialState: ModalsState = {
  isMenuOpen: false,
  isChatMenuOpen: false,
}

const modalsSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openSideMenu(state: ModalsState) {
      state.isMenuOpen = true
    },
    closeSideMenu(state: ModalsState) {
      state.isMenuOpen = false
    },
    openChatMenu(state: ModalsState) {
      state.isChatMenuOpen = true
    },
    closeChatMenu(state: ModalsState) {
      state.isChatMenuOpen = false
    },
  },
})

export const { openSideMenu, closeSideMenu, openChatMenu, closeChatMenu } = modalsSlice.actions

export const modalsReducer = modalsSlice.reducer
