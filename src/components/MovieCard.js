import React from 'react'
import { IMAGE_CDN_BASE_URL } from '../utils/constants'

const MovieCard = ({ movieInfo }) => {
    return (
        <img alt='Movie Poster' className="rounded-md w-52 mr-3 " src={`${IMAGE_CDN_BASE_URL}${movieInfo.poster_path}`} />
    )
}

export default MovieCard