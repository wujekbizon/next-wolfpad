import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ColorsState {
  colors: string[]
  isFetching: boolean
  error: boolean
}

const colorsSlice = createSlice({
  name: 'colors',
  initialState: {
    colors: [],
    isFetching: false,
    error: false
  },
  reducers: {
    fetchColorsStart(state: ColorsState) {
      state.isFetching = true
      state.error = false
    },
    fetchColorsComplete(state: ColorsState, { payload }: PayloadAction<string[]>) {
      state.colors = payload
      state.isFetching = false
    },
    fetchColorsError(state: ColorsState) {
      state.isFetching = false
      state.error = true
    }
  }
})

export const { fetchColorsStart, fetchColorsComplete, fetchColorsError } = colorsSlice.actions

export const colorsReducer = colorsSlice.reducer
