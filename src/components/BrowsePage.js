import React from 'react'
import Header from './Header'
import useFetchNowPlayingMovies from '../hooks/useFetchNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const BrowsePage = () => {

    useFetchNowPlayingMovies();

    return (
        <>
            <Header />
            <MainContainer />
            <SecondaryContainer />
            <div>BrowsePage</div>
        </>
    )
}

export default BrowsePage