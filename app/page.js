import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Circle from './components/Circle';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';

const Page = () => {
  return (
    <div className='bg-[var(--clr-isabelline)] font-[var(--font-inter)] w-screen h-screen flex flex-col relative'>
      <div className='absolute inset-0 z-0'>
        <Circle className='absolute left-32 top-20' />
        <Circle className='absolute right-20 bottom-32' />
      </div>
      <div className='z-10 w-screen flex-grow'>
        <NavBar />
        <Home />
        <About />
        <Experience />
        <Contact />
      </div>
    </div>
  );
};

export default Page;
