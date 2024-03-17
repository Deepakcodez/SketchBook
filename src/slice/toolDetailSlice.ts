import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TOOL_ITEMS, COLORS } from '@/app/_components/Constants';

export interface ToolState {
    color: string;
    size: number; // Corrected the type from Number to number
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
        color: COLORS.BLACK,
        size: 3
    },
    [TOOL_ITEMS.REDO]: {
        color: COLORS.BLACK,
        size: 3
    },
    [TOOL_ITEMS.DOWNNLOAD]: {
        color: COLORS.BLACK,
        size: 3
    },
};

export const ToolDetailSlice = createSlice({
    name: 'ToolDetail',
    initialState,
    reducers: {
        changeColor: (state, action: PayloadAction<{ item: string; color: string }>) => {
            state[action.payload.item].color = action.payload.color;
        },
        changeBrushSize: (state, action: PayloadAction<{ item: string; size: number }>) => {
            state[action.payload.item].size = action.payload.size;
        },
    },
});

// Action creators are generated for each case reducer function
export const { changeColor, changeBrushSize } = ToolDetailSlice.actions;

export default ToolDetailSlice.reducer;
