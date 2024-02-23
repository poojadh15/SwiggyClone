import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },
    reducers: {
        addItems: (state, action) => {
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            state.action.pop()
        },
        clearItem: (state, action) => {
            state.items = 0;
        }
    }
});
export const { addItems, removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;