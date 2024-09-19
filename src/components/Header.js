import React from 'react'
import { imageUrls } from '../utils/image-urls'

const Header = () => {
    return (
        <div className='py-4 pl-72 z-10'>
            <img src={imageUrls.NETFLIX_LOGO} alt='logo' className='w-44 '></img>
        </div>
    )
}

export default Header