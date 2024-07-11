import React from 'react';

const NavBar = () => {
  return (
    <div className='flex flex-col mb-60 justify-center items-center invisible md:visible pt-6'>
        <div className="line w-7/12 lg:w-2/4 h-[2px] bg-[var(--clr-eucalyptus)]"></div>
        <ul className='text-[var(--clr-eucalyptus)] font-sans flex gap-20 p-2'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Contacts</a></li>
        </ul>
        <div className="line w-7/12 lg:w-2/4 h-[2px] bg-[var(--clr-eucalyptus)]"></div>
    </div>
  );
};

export default NavBar;
