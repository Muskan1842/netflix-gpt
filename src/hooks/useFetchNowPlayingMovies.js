import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { API_OPTIONS } from '../utils/constants';

const useFetchNowPlayingMovies = () => {

    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        let movieData = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        movieData = await movieData.json();
        dispatch(addNowPlayingMovies(movieData.results))
    }

    useEffect(() => {
        getNowPlayingMovies();
    }, [])

}

export default useFetchNowPlayingMovies