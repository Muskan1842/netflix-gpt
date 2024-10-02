import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: 'config',
    initialState: {
        languagePreference: 'english'
    },
    reducers: {
        changeLanguagePreference: (state, action) => {
            state.languagePreference = action.payload;
        }
    }
})

export const { changeLanguagePreference } = configSlice.actions

export default configSlice.reducer;