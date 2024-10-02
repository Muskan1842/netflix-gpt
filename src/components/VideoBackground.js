import React from 'react'
import { useSelector } from 'react-redux';
import useFetchMovieVideo from '../hooks/useFetchMovieVideo';

const VideoBackground = ({ movieId }) => {

    const movieTrailerInfo = useSelector(store => store.moviesData.currentMovieTrailer)

    useFetchMovieVideo(movieId)

    return (
        <div className='w-[100%] aspect-video'>
            <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${movieTrailerInfo?.key}?autoplay=1&mute=1&loop=1`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" ></iframe>
        </div>
    )
}

export default VideoBackground