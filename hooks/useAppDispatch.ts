import { useDispatch } from 'react-redux'
import { store } from '../state/index'

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
