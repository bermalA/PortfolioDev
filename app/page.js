import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Circle from './components/Circle';

const Page = () => {
  return (
    <div className='bg-[var(--clr-isabelline)] font-[var(--font-inter)] flex flex-col h-screen relative'>
      <div className='absolute inset-0 z-0'>
        <Circle className='absolute right-0' />
      </div>
      <div className='z-10 w-screen h-screen'>
        <NavBar />
        <Home />  
      </div>
    </div>
  );
}

export default Page;
