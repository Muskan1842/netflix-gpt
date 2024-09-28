import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addcurrentMovieTrailer } from '../utils/movieSlice';
import appStore from '../utils/appStore';

const useFetchMovieVideo = (movieId) => {

    const dispatch = useDispatch(appStore);

    const getMovieVideos = async () => {
        let movieVideoResults = (await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS))
        movieVideoResults = await movieVideoResults.json();

        const movieTrailer = movieVideoResults.results.find((item) => item.name === 'Official Trailer');

        if (!movieTrailer) return;

        dispatch(addcurrentMovieTrailer(movieTrailer))

    }

    useEffect(() => {
        getMovieVideos()
    }, [])

}

export default useFetchMovieVideo;