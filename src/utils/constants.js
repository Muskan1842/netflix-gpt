export const imageUrls = {
    NETFLIX_LOGO: 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png',
    LOGIN_BACKGROUND_IMG: 'https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg',
    USER_ICON: 'https://occ-0-4994-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABUMx6z-7bB7tyN-OZXt6i8BXuZHN5EWBr7MQy7ilhubrpI2yOofVtT-QmoO6VJt7I1ewosmuQa29BGFfOOVcJxdKx1sT-co.png?r=201'
}

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + process.env.REACT_APP_API_OPTIONS
    }
}

export const IMAGE_CDN_BASE_URL = "https://image.tmdb.org/t/p/w500";

export const API_NOW_PLAYING_MOVIES = 'https://api.themoviedb.org/3/movie/now_playing?page=1'
export const API_POPULAR_MOVIES = 'https://api.themoviedb.org/3/movie/popular?page=1'
export const API_TOPRATED_MOVIES = 'https://api.themoviedb.org/3/movie/top_rated?page=1'
export const API_UPCOMING_MOVIES = 'https://api.themoviedb.org/3/movie/upcoming?page=1'

export const SUPPORTED_LANGUAGES = [
    { identifier: 'english', name: 'English' },
    { identifier: 'hindi', name: 'Hindi' },
    { identifier: 'spanish', name: 'Spanish' }
]

export const GEMINI_KEY = process.env.REACT_APP_GEMINI_KEY;