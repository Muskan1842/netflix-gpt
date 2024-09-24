import React from 'react'
import { imageUrls } from '../utils/image-urls'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { useSelector } from 'react-redux'

const Header = () => {
    const navigate = useNavigate();
    const displayName = useSelector((store) => { return store?.user?.displayName });

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate('/')
        }).catch(err => {
            console.log(err);
            // TODO : build an error page
        })
    }

    return (
        <div className='py-4 pl-72 pr-20 z-10 bg-gradient-to-b from-black flex justify-between'>
            <img src={imageUrls.NETFLIX_LOGO} alt='logo' className='w-44 '></img>

            {displayName &&
                <div className='flex'>
                    <img className='w-10 h-10 my-4' src={imageUrls.USER_ICON} alt='user-icon'></img>
                    <button onClick={handleSignOut} className='p-2 m-4 bg-red-700 rounded-sm w-24 text-white font-bold'>Sign Out</button>
                    <div className=' text-black m-4 p-2'> {displayName}</div>
                </div>
            }
        </div>
    )
}

export default Header