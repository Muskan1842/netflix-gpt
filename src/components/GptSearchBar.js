import React from 'react'
import { imageUrls } from '../utils/constants'
import { useSelector } from 'react-redux'
import LANGUAGES from '../utils/languageConstants'

const GptSearchBar = () => {

    const langKey = useSelector(store => store.config.languagePreference)

    return (
        <div className='pt-[10%] flex justify-center '>
            <form className='w-1/2 grid grid-cols-12 bg-black/50 z-10 rounded-md'>
                <input placeholder={LANGUAGES[langKey].gptSearchPlaceholder} className='rounded-sm col-span-9 px-4 py-2 m-4 ' type='text' />
                <button className='px-6 py-2 m-4 bg-red-700 rounded-sm text-white col-span-3'>{LANGUAGES[langKey].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar