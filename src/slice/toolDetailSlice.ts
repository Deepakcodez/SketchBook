import { createSlice } from '@reduxjs/toolkit'
import {TOOL_ITEMS, COLORS } from '@/app/_components/Constants'

export interface ToolState {
    color : string,
    size  : Number 
}

const initialState: Record<string, ToolState> = {
    [TOOL_ITEMS.PENCIL]: {
        color: COLORS.BLACK,
        size: 3
    },
    [TOOL_ITEMS.ERASER]: {
        color: COLORS.WHITE,
        size: 3
    },
    [TOOL_ITEMS.UNDO]: {
        color: COLORS.BLACK, // Example color
        size: 3 // Example size
    },
    [TOOL_ITEMS.REDO]: {
        color: COLORS.BLACK, // Example color
        size: 3 // Example size
    },
    [TOOL_ITEMS.DOWNNLOAD]: {
        color: COLORS.BLACK, // Example color
        size: 3 // Example size
    },
}

export const ToolDetailSlice = createSlice({
    name: 'ToolDetail',
    initialState,
    reducers: {
        changeColor : (state , action)=>{
           state[action.payload.item].color = action.payload.color
         },
         changeBrushSize : (state , action)=>{
            state[action.payload.item].size = action.payload.size
        },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const {changeColor,  changeBrushSize } = ToolDetailSlice.actions
  
  export default ToolDetailSlice.reducer