import { createSlice } from '@reduxjs/toolkit'

interface SideChatState {
  isChatMenuOpen: boolean
}

const initialState: SideChatState = {
  isChatMenuOpen: false
}

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    openChatMenu(state: SideChatState) {
      state.isChatMenuOpen = true
    },
    closeChatMenu(state: SideChatState) {
      state.isChatMenuOpen = false
    }
  }
})

export const { openChatMenu, closeChatMenu } = chatSlice.actions

export const chatReducer = chatSlice.reducer
