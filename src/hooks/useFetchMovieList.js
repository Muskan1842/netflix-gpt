import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies } from '../store/movieSlice';
import { API_NOW_PLAYING_MOVIES, API_OPTIONS, API_POPULAR_MOVIES, API_TOPRATED_MOVIES, API_UPCOMING_MOVIES } from '../utils/constants';

const useFetchMovieList = () => {

    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        let movieData = await fetch(API_NOW_PLAYING_MOVIES, API_OPTIONS);
        movieData = await movieData.json();
        dispatch(addNowPlayingMovies(movieData.results))
    }

    const getPopularMovies = async () => {
        let movieData = await fetch(API_POPULAR_MOVIES, API_OPTIONS);
        movieData = await movieData.json();
        dispatch(addPopularMovies(movieData.results))
    }

    const getTopRatedMovies = async () => {
        let movieData = await fetch(API_TOPRATED_MOVIES, API_OPTIONS);
        movieData = await movieData.json();
        dispatch(addTopRatedMovies(movieData.results))
    }

    const getUpcomingMovies = async () => {
        let movieData = await fetch(API_UPCOMING_MOVIES, API_OPTIONS);
        movieData = await movieData.json();
        dispatch(addUpcomingMovies(movieData.results))
    }

    useEffect(() => {
        getNowPlayingMovies();
        getPopularMovies();
        getTopRatedMovies();
        getUpcomingMovies();
    }, [])

}

export default useFetchMovieList