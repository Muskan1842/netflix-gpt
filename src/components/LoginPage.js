import React, { useState, useRef } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from './../utils/firebase'


const LoginPage = () => {
    const [isSigIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null)
    const userName = useRef(null)
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        // email.current.value = 'mush.rpt@gmail.com';
        // password.current.value = 'mush1234'
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message)

        if (message) return;

        if (isSigIn) {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + '-' + errorMessage)
                });
        } else {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: userName.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                    }).then(() => {
                        // Profile updated!
                        // ...
                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + '-' + errorMessage)
                });
        }

    }


    return (

        <div className={`flex flex-col w-[100vw] h-[100vh]  bg-cover  bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_large.jpg')] `}>
            <div className="absolute inset-0 bg-black opacity-50 "></div>
            <Header />
            <div className='flex align-middle flex-grow z-10'>
                <form onSubmit={(e) => { e.preventDefault() }} className='w-[450px] h-[80vh] p-14 m-auto bg-black/70 rounded-lg flex flex-col align-middle'>
                    <h1 className='text-3xl text-white font-bold mx-2 mb-6'>{isSigIn ? 'Sign In' : 'Sign Up'}</h1>
                    {!isSigIn ?
                        <input ref={userName} type='text' placeholder='Full Name' className='p-4 m-2 h-14 bg-transparent border border-gray-500 rounded-[4px]  text-white' /> : ''
                    }
                    <input ref={email} type='text' placeholder='Email Address' className='p-4 m-2 h-14 bg-transparent border border-gray-500 rounded-[4px] text-white' />
                    <input ref={password} type='password' placeholder='Password' className='p-4 m-2 h-14 bg-transparent border border-gray-500 rounded-[4px] text-white' />
                    <p className='text-red-700 px-2'>{errorMessage}</p>
                    <button onClick={() => { handleButtonClick() }} className='p-2 m-2 bg-red-700 rounded-sm h-10 text-white font-medium mb-20'>{isSigIn ? 'Sign In' : 'Sign Up'}</button>
                    <h1 className='p-2 m-2 text-white cursor-pointer font-bold' onClick={() => { setIsSignIn(!isSigIn) }}>{isSigIn ? 'New to Netflix? Sign Up now' : 'Already a user? Sign In Now'}</h1>
                </form>
            </div>
        </div>
    )
}

export default LoginPage 