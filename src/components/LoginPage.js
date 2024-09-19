import React, { useState } from 'react'
import Header from './Header'

const LoginPage = () => {
    const [isSigIn, setIsSignIn] = useState(true)

    return (
        <div className={`flex flex-col w-[100vw] h-[100vh]  bg-cover  bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg')] `}>
            <div className="absolute inset-0 bg-black opacity-50 "></div>
            <Header />
            <div className='flex align-middle flex-grow z-10'>
                <form className='w-[450px] h-[80vh] p-14 m-auto bg-black/70 rounded-lg flex flex-col align-middle'>
                    <h1 className='text-3xl text-white font-bold mx-2 mb-6'>{isSigIn ? 'Sign In' : 'Sign Up'}</h1>
                    {!isSigIn ?
                        <input type='text' placeholder='Full Name' className='p-4 m-2 h-14 bg-transparent border border-gray-500 rounded-[4px]' /> : ''
                    }
                    <input type='text' placeholder='Email Address' className='p-4 m-2 h-14 bg-transparent border border-gray-500 rounded-[4px]' />
                    <input type='password' placeholder='Password' className='p-4 m-2 h-14 bg-transparent border border-gray-500 rounded-[4px]' />
                    <button className='p-2 m-2 bg-red-700 rounded-sm h-10 text-white font-medium mb-20'>{isSigIn ? 'Sign In' : 'Sign Up'}</button>
                    <h1 className='p-2 m-2 text-white cursor-pointer font-bold' onClick={() => { setIsSignIn(!isSigIn) }}>{isSigIn ? 'New to Netflix? Sign Up now' : 'Already a user? Sign In Now'}</h1>
                </form>
            </div>
        </div>
    )
}

export default LoginPage