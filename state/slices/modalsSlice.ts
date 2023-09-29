import { createSlice } from '@reduxjs/toolkit'

interface ModalsState {
  isChatModalOpen: boolean
  isMenuOpen: boolean
  isChatMenuOpen: boolean
  isChatDropdownOpen: boolean
}

const initialState: ModalsState = {
  isChatModalOpen: false,
  isMenuOpen: false,
  isChatMenuOpen: false,
  isChatDropdownOpen: true,
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
    openChatDropdown(state: ModalsState) {
      state.isChatDropdownOpen = true
    },
    closeChatDropdown(state: ModalsState) {
      state.isChatDropdownOpen = false
    },
    openChatModal(state: ModalsState) {
      state.isChatModalOpen = true
    },
    closeChatModal(state: ModalsState) {
      state.isChatModalOpen = false
    },
  },
})

export const {
  openSideMenu,
  closeSideMenu,
  openChatMenu,
  closeChatMenu,
  openChatDropdown,
  closeChatDropdown,
  openChatModal,
  closeChatModal,
} = modalsSlice.actions

export const modalsReducer = modalsSlice.reducer
