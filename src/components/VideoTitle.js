import React from 'react'

const VideoTitle = ({ title, overview }) => {

    return (
        <div className='pl-[10%] pt-[25%] absolute bg-gradient-to-tr from-black  w-screen aspect-video'>
            <h1 className='text-6xl font-bold text-white' > {title}</h1>
            <p className='w-96 text-justify my-4 text-white'> {overview}</p>
            <div >
                <button className=' h-14 rounded-sm bg-white px-10 mr-3 my-4 text-2xl font-bold hover:bg-white/75'> Play</button>
                <button className=' h-14 rounded-sm bg-white/30 px-10 my-4 text-2xl  text-white hover:bg-white/20'>More info</button>
            </div>
        </div>
    )
}

export default VideoTitle