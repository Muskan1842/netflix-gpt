import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestions = () => {

    const { gptSearchResults, gptMoviesData } = useSelector((store) => store.gpt)
    if (gptMoviesData === null) return;

    return (
        <div className='z-10'>
            {
                gptSearchResults?.map((movieName, index) => {
                    return <div key={movieName} className='bg-black/80  rounded-lg my-8'><MovieList title={movieName} movies={gptMoviesData[index]} /></div>
                })
            }
        </div>
    )
}

export default GptMovieSuggestions