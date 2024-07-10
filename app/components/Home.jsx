import React from 'react'
import { RiArrowRightDoubleLine } from "react-icons/ri";

const Home = () => {
  return (
    <div className='flex-grow flex'>
    <div className='flex-grow flex flex-col gap-7 items-center text-center justify-center'>
      <h1 className='text-8xl md:text-9xl text-shadow header font-bold text-[var(--clr-viridian)]'>Hello, <br /> I'm Bermal!</h1>
      <h4 className='text-lg text-[var(--clr-coffee)]'>Software Engineer | Sakarya, Turkey</h4>
    </div>
    <div className='flex flex-col items-center justify-center flex-grow'>
      <div className='w-2/3 text-[var(--clr-coffee)] text-center'>
        <h2 className='text-2xl font-bold'>Creating Digital Magic with Code</h2>
        <h6>Passionate about building innovative and efficient web solutions.</h6>
        <div className='mt-5 flex gap-4 justify-center'>
          <button className='border-[var(--clr-coffee)] border-2 p-2 rounded-xl'>
            Let's Chat
          </button>
          <button className='text-white bg-[var(--clr-coffee)] flex items-center p-2 rounded-xl'>
            View My Work
            <RiArrowRightDoubleLine size="20"/>
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Home