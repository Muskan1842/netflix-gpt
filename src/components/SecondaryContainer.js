import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

    const movies = useSelector(store => store.moviesData);

    return (
        <div className='bg-black absolute'>
            <div className='-mt-96 '>
                <MovieList title={'Now Playing'} movies={movies.nowPlayingMovies} />
                <MovieList title={'Top Rated'} movies={movies.topRatedMovies} />
                <MovieList title={'Popular'} movies={movies.popularMovie} />
                <MovieList title={'Upcoming'} movies={movies.upcomingMovies} />
            </div>
        </div>
    )
}

export default SecondaryContainer