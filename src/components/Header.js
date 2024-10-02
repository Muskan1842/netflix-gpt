import React from 'react'
import { imageUrls, SUPPORTED_LANGUAGES } from '../utils/constants'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { toggleGptSearchView } from '../store/gptSlice'
import { changeLanguagePreference } from '../store/configSlice'

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const showGptSearchView = useSelector((store) => store.gpt.showGptSearch)
    const displayName = useSelector((store) => { return store?.user?.displayName });


    const toggleGptSearch = () => {
        dispatch(toggleGptSearchView())
    }

    const handleLanguageChange = (e) => {
        dispatch(changeLanguagePreference(e.target.value))
    }

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate('/')
        }).catch(err => {
            console.log(err);
            // TODO : build an error page
        })
    }

    return (
        <div>

            <div className='py-4 pl-12 pr-20 z-10 bg-gradient-to-b from-black flex justify-between w-[100%] fixed'>
                <div>
                    <img src={imageUrls.NETFLIX_LOGO} alt='logo' className='w-44'></img>
                    <div className='text-red-600 text-3xl font-bold -mt-5 flex justify-center'> GPT </div>
                </div>

                {displayName &&
                    <div className='flex items-center'>

                        {showGptSearchView && <select className='flex m-4 rounded-md py-2 px-4 bg-gray-700/80 text-white' onChange={e => handleLanguageChange(e)}>
                            {SUPPORTED_LANGUAGES.map((lang) => {
                                return <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
                            })}

                        </select>}

                        <button className='bg-purple-800 w-32 h-10 my-4 mr-4 rounded-3xl font-bold text-white' onClick={() => { return toggleGptSearch() }}>{showGptSearchView ? 'Home Page' : 'GPT Search'}</button>
                        <img className='w-10 h-10 my-4' src={imageUrls.USER_ICON} alt='user-icon'></img>
                        <button onClick={handleSignOut} className='p-2 m-4 bg-red-700 rounded-sm w-24 text-white font-bold'>Sign Out</button>
                        <div className=' text-black m-4 p-2'> {displayName}</div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Header