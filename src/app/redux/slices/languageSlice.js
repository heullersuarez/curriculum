import { createSlice } from "@reduxjs/toolkit";

const languageSlice = createSlice({
    name: 'languageSlice',
    initialState: {
        value: 'PT'
    },
    reducers: {
        setLanguage: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { setLanguage } = languageSlice.actions;

export default languageSlice.reducer;