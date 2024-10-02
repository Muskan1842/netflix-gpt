import React, { useRef } from 'react'
import { API_OPTIONS, imageUrls } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import LANGUAGES from '../utils/languageConstants'
import { addgptMoviesData, addGptSearchResults } from '../store/gptSlice'
import genAI from '../utils/geminiAi'

const GptSearchBar = () => {

    const langKey = useSelector(store => store.config.languagePreference);
    const dispatch = useDispatch()
    const searchInput = useRef();

    const searchMoviebyName = async (movie) => {
        let movieInfo = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&page=1`, API_OPTIONS);
        movieInfo = await movieInfo.json();
        return movieInfo.results
    }

    const fetchData = async (gptQuery) => {
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
        const result = await model.generateContent(gptQuery);
        return result.response.text()
    };

    const handleSearch = async () => {
        const gptQuery = `Act as a movie recommendation system that suggest some movies for the query: ${searchInput.current.value}. Only give me names of 5 movies comma seperated like the example ahead. example : Badnews, Gadar, Golmaal, Dhamal, Don`

        let gptMovies = await fetchData(gptQuery);
        gptMovies = gptMovies?.split(', ');

        const resultPromiseArray = gptMovies?.map((movie) => searchMoviebyName(movie));
        const tmdbMovies = await Promise.all(resultPromiseArray);

        dispatch(addGptSearchResults(gptMovies))
        dispatch(addgptMoviesData(tmdbMovies))
    }

    return (
        <div className='pt-[10%] flex justify-center ' >
            <form className='w-1/2 grid grid-cols-12 bg-black/80 z-10 rounded-md ' onSubmit={(e) => e.preventDefault()}>
                <input placeholder={LANGUAGES[langKey].gptSearchPlaceholder} className='rounded-sm col-span-9 px-4 py-2 m-4 ' type='text' ref={searchInput} />
                <button onClick={(e) => handleSearch(e)} className='px-6 py-2 m-4 bg-red-700 rounded-sm text-white col-span-3'>{LANGUAGES[langKey].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar