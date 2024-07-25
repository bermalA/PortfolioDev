import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    <div className='flex gap-5 bg-[var(--clr-brown)] pt-32 pb-32 p-20 w-screen text-white'>
      <div className="flex items-center w-1/4 md:w-1/6 justify-center">
        <Image
          width={800}
          height={400}
          className='border-[var(--clr-peach)] shadow-lg-custom border-4 rounded-full'
          src="/photo.jpeg"
          alt="photo"
        />
      </div>
      <div className="flex flex-col w-3/4 gap-4 justify-center flex-grow p-5 md:ml-10">
        <h1 className='text-4xl font-bold font-sans mb-4 text-[var(--clr-cream)]'>Who am I?</h1>
        <p className='text-xl leading-relaxed text-[var(--clr-wheat)]'>
          I&apos;m a passionate software engineer who loves creating seamless and efficient digital experiences. 
          Driven by deep curiosity and a desire to innovate, I strive to improve the way we interact with technology.
          With a strong foundation in both frontend and backend development, I build applications that are functional 
          and delightful to use. I value clean, maintainable code and user-friendly interfaces, ensuring my work meets 
          the highest standards. I&apos;m always eager to learn new technologies and methodologies to enhance my skills. 
          Whether it&apos;s developing complex web applications, optimizing performance, or finding innovative solutions, 
          I aim to deliver results that exceed expectations. I also enjoy mentoring and sharing knowledge, believing 
          collaboration is key to advancing in the tech industry. My goal is to make a meaningful impact and contribute 
          to the growth and success of the organizations I work with.
        </p>
      </div>
    </div>
  );
}

export default About;
