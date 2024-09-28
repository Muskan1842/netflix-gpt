import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    return (
        <div>
            <div className='flex flex-col pl-16 overflow-x-scroll scrollbar-x-none'>
                <h1 className='text-3xl  my-4 text-white'>{title}</h1>
                <div className='flex  '>
                    {
                        movies?.map((movie) => {
                            return <MovieCard key={movie.id} movieInfo={movie} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList