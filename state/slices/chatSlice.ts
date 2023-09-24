import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import { INITIAL_CHAT_SYSTEM, TOKENS_THRESHOLD } from '../../data/constants'
import { updateChatHistory } from '../thunks/updateChatHistory'

export interface Conversation {
  role: string
  content: string
}

export interface TokensUsageInterface {
  promptTokens: number
  completionTokens: number
  totalTokens: number
}

interface ChatState {
  conversations: Conversation[]
  usage: TokensUsageInterface
  isLoading: boolean
  error: null | string

  userInputValue: string
  hasExceedTokensThreshold: boolean
}

const initialState: ChatState = {
  conversations: [
    {
      role: 'system',
      content: INITIAL_CHAT_SYSTEM,
    },
  ],
  usage: {
    promptTokens: 0,
    completionTokens: 0,
    totalTokens: 0,
  },
  isLoading: false,
  error: null,
  userInputValue: '',
  hasExceedTokensThreshold: false,
}

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    updateUserInputValue(state: ChatState, { payload }: PayloadAction<string>) {
      state.userInputValue = payload
    },
  },
  extraReducers(builder) {
    builder.addCase(updateChatHistory.pending, (state: ChatState) => {
      state.isLoading = true
    })

    builder.addCase(updateChatHistory.fulfilled, (state: ChatState, { payload }) => {
      // update chatHistory
      state.isLoading = false
      state.userInputValue = ''
      state.conversations = payload.chatHistory

      // update usage tokens
      const { prompt_tokens, completion_tokens, total_tokens } = payload.result.usage
      const newPromptTokens = state.usage.promptTokens + prompt_tokens
      const newCompletionTokens = state.usage.completionTokens + completion_tokens
      const newTotalTokens = state.usage.totalTokens + total_tokens
      state.usage = {
        ...state.usage,
        promptTokens: newPromptTokens,
        completionTokens: newCompletionTokens,
        totalTokens: newTotalTokens,
      }
      if (state.usage.totalTokens >= TOKENS_THRESHOLD) {
        state.hasExceedTokensThreshold = true
      }
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

export const { updateUserInputValue } = chatSlice.actions

export const chatReducer = chatSlice.reducer
