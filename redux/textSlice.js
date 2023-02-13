import { createSlice } from "@reduxjs/toolkit";

const text = createSlice({
    name: 'text',
    initialState: {
        text: []
    },
    reducers: {
        setText: (state, action) => {
            state.text = action.payload
        },
        addText: (state, action) => {
            state.text = [...state.text, action.payload]
        }
    }
})

export const { setText, addText } = text.actions

export default text.reducer