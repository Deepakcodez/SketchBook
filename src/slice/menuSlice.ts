import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {TOOL_ITEMS, COLORS } from '@/app/_components/Constants'

export interface menuState {
    activeMenuItem : string,
    actionMenuItem  : string | null
}

const initialState: menuState = {
  activeMenuItem : TOOL_ITEMS.PENCIL,
  actionMenuItem  : null
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
       menuItemClick : (state , action)=>{
        state.activeMenuItem    =  action.payload
       },
       activeItemClick : (state , action)=>{
        state.actionMenuItem    =  action.payload
       },
  },
})

// Action creators are generated for each case reducer function
export const {menuItemClick,  activeItemClick } = menuSlice.actions

export default menuSlice.reducer