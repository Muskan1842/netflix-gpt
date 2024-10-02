import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { imageUrls } from '../utils/constants'

const GptSearchPage = () => {
    return (
        <div className={"flex flex-col w-[100%] h-[100vh]  bg-cover  bg-[url('" + imageUrls.LOGIN_BACKGROUND_IMG + "')] "}>
            <div className="absolute inset-0 bg-black opacity-50 "></div>
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    )
}

export default GptSearchPage