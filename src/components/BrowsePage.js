import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useFetchMovieList from '../hooks/useFetchMovieList';
import { useSelector } from 'react-redux';
import GptSearchPage from './GptSearchPage';

const BrowsePage = () => {
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

    useFetchMovieList();

    return (
        <div >
            <Header />
            {showGptSearch
                ? <GptSearchPage />
                : <> <MainContainer />
                    <SecondaryContainer />
                </>
            }
        </div>
    )
}

export default BrowsePage