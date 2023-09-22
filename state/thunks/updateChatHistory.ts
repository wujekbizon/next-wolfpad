import { createAsyncThunk } from '@reduxjs/toolkit'
import { Conversation } from '../slices/chatSlice'

export const updateChatHistory = createAsyncThunk<
  Conversation[],
  Conversation[],
  {
    rejectValue: string
  }
>('chatHistory/update', async (data, thunkApi) => {
  try {
    const response = await fetch('/api/openAIChat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages: data }),
    })

    if (!response.ok) {
      throw new Error('Failed to fetch data from server')
    }

    // merge response with data
    const responseData = await response.json()
    const newMessage = responseData.result.choices[0].message
    const chatHistoryData = [...data, newMessage] as Conversation[]

    return chatHistoryData
  } catch (err: any) {
    let error: Error = err
    if (!error.message) {
      throw err
    }
    return thunkApi.rejectWithValue(error.message)
  }
})
