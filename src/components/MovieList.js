import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    return (
        <div>
            <div className='flex flex-col pl-16 overflow-x-scroll scrollbar-x-none py-4'>
                <h1 className='text-3xl mb-4 text-white'>{title}</h1>
                <div className='flex  '>
                    {
                        movies?.filter(movie => movie.poster_path != null)
                            .map((movie) => {
                                return <MovieCard key={movie.id} movieInfo={movie} />
                            })
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList