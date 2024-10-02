import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        gptSearchResults: null,
        gptMoviesData: null
    },
    reducers: {
        toggleGptSearchView: (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptSearchResults: (state, action) => {
            state.gptSearchResults = action.payload;
        },
        addgptMoviesData: (state, action) => {
            state.gptMoviesData = action.payload;
        }
    }
})

export const { toggleGptSearchView, addGptSearchResults, addgptMoviesData } = gptSlice.actions

export default gptSlice.reducer;