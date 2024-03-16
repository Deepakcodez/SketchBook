import { configureStore } from '@reduxjs/toolkit'
import MenuReducer from '@/slice/menuSlice'
import ToolDetailReducer from '@/slice/toolDetailSlice'
export const store = configureStore({
  reducer: {
    menu : MenuReducer,
    toolDetail : ToolDetailReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch