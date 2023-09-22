import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import { INITIAL_CHAT_SYSTEM } from '../../data/constants'
import { updateChatHistory } from '../thunks/updateChatHistory'

export interface Conversation {
  role: string
  content: string
}

interface ChatState {
  conversations: Conversation[]
  isLoading: boolean
  error: null | string
  isChatMenuOpen: boolean
  userInputValue: string
}

const initialState: ChatState = {
  conversations: [
    {
      role: 'system',
      content: INITIAL_CHAT_SYSTEM,
    },
  ],
  isLoading: false,
  error: null,
  userInputValue: '',
  isChatMenuOpen: false,
}

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    openChatMenu(state: ChatState) {
      state.isChatMenuOpen = true
    },
    closeChatMenu(state: ChatState) {
      state.isChatMenuOpen = false
    },
    updateUserInputValue(state: ChatState, { payload }: PayloadAction<string>) {
      state.userInputValue = payload
    },
  },
  extraReducers(builder) {
    builder.addCase(updateChatHistory.pending, (state: ChatState) => {
      state.isLoading = true
    })

    builder.addCase(updateChatHistory.fulfilled, (state: ChatState, { payload }) => {
      state.isLoading = false
      state.userInputValue = ''
      state.conversations = payload
    })
    builder.addCase(updateChatHistory.rejected, (state: ChatState, { payload }) => {
      state.isLoading = false
      if (!payload) {
        return
      }
      state.error = payload
    })
  },
})

export const { openChatMenu, closeChatMenu, updateUserInputValue } = chatSlice.actions

export const chatReducer = chatSlice.reducer
