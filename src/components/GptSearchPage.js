import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { imageUrls } from '../utils/constants'

const GptSearchPage = () => {
    return (
        <div className="flex flex-col w-[100%]">
            <img alt='bg-img' src={imageUrls.LOGIN_BACKGROUND_IMG} className='w-[100%] fixed' />
            <div className=" inset-0 bg-black opacity-0 fixed"></div>
            <GptSearchBar />
            <GptMovieSuggestions />
        </div>
    )
}

export default GptSearchPage