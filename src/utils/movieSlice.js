import { createSlice } from "@reduxjs/toolkit";

const moviesDataSlice = createSlice({
    name: 'moviesData',
    initialState: {
        nowPlayingMovies: null,
        currentMovieTrailer: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addcurrentMovieTrailer: (state, action) => {
            state.currentMovieTrailer = action.payload
        }
    }
});


export const { addNowPlayingMovies, addcurrentMovieTrailer } = moviesDataSlice.actions;

export default moviesDataSlice.reducer;