import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useFetchMovieList from '../hooks/useFetchMovieList';

const BrowsePage = () => {

    useFetchMovieList();

    return (
        <div >
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </div>
    )
}

export default BrowsePage