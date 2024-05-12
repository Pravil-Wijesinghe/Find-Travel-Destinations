import React from 'react'
import bgVideo from '../assets/bgVideo.mp4';
import Next from '../assets/next.png';

function ChatWithBot() {
  return (
    <div className='fixed flex flex-col items-center w-full h-screen bg-blackBlue text-lightBlue'>
        <div className='absolute top-0 left-0 w-full h-screen bg-blackBlue opacity-60'></div>
        <video src={bgVideo} autoPlay loop muted className='w-screen h-screen object-cover'/>
        <div className='fixed flex flex-col items-center my-8 w-[70%] h-[80%] rounded-3xl p-px bg-gradient-to-r from-lightGradientBlue to-darkGradientBlue'>
            <div className='relative w-full h-full rounded-3xl bg-gradient-to-b from-[#131A22] to-[#191D24]'></div>
        </div>
        <div className='fixed bottom-5 flex flex-row items-center justify-center p-px w-[80%] h-16 rounded-full bg-gradient-to-r from-lightGradientBlue to-darkGradientBlue'>
            <div type='text' placeholder='What do you want to know?'
                className='relative w-full h-[63px] rounded-full bg-gradient-to-b from-[#131A22] to-[#191D24] px-7'
            >
                <input type='text' placeholder='What do you want to know?'
                    className='w-full h-[63px] rounded-full bg-gradient-to-b from-[#131A22] to-[#191D24] outline-none'
                />
                <button className='absolute right-4 top-0 h-full w-[32px] rounded-r-full flex items-center justify-center'>
                    <img src={Next} alt='' className='w-6'/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default ChatWithBot
