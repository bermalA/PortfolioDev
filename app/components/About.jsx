import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col">
          <div className='flex gap-4 pt-36 pb-32 p-10 bg-[var(--clr-brown)] text-white'>
      <div className="flex items-center mt-16 mb-16 w-[2000px]
       justify-center">
        <img
          width="300"
          className='border-[var(--clr-peach)] 
          shadow-lg-custom m-5 ms-[22px] border-4 rounded-full 
          h-[350px]'
          src="/photo.jpeg"
          alt="photo"
        />
      </div>
      <div className="flex flex-col gap-4 justify-center flex-grow p-5">
        <h1 className='text-4xl font-bold 
        font-sans mb-4 text-[var(--clr-cream)]'>Who am I?</h1>
        <p className='text-xl leading-relaxed font m-2 me-4 text-[var(--clr-wheat)]'>
          I'm a passionate software engineer who loves to create seamless and efficient digital experiences. My journey in software engineering has been driven by a deep curiosity and a desire to innovate and improve the way we interact with technology. With a strong foundation in both frontend and backend development, I strive to build applications that are not only functional but also delightful to use.
        </p>
      </div>
    </div>
    <div className="bg-[var(--clr-isabelline)] h-[32px]"></div>
    </div>
  );
}

export default About;
