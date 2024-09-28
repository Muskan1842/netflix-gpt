import { createSlice } from "@reduxjs/toolkit";

const moviesDataSlice = createSlice({
    name: 'moviesData',
    initialState: {
        nowPlayingMovies: null,
        popularMovie: null,
        upcomingMovies: null,
        topRatedMovies: null,
        currentMovieTrailer: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovie = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addcurrentMovieTrailer: (state, action) => {
            state.currentMovieTrailer = action.payload
        }
    }
});


export const { addNowPlayingMovies, addcurrentMovieTrailer, addPopularMovies, addUpcomingMovies, addTopRatedMovies } = moviesDataSlice.actions;

export default moviesDataSlice.reducer;