import React from 'react';
import CLink from './CLink';
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { IoMailOpen } from "react-icons/io5";

const Contact = () => {
  return (
    <div className='bg-[var(--clr-isabelline)] flex h-[700px]'>
      <div className="float-right flex-grow flex flex-col 
        ps-16 text-[var(--clr-brown)]
        m-10 ms-16 gap-4 justify-center">
        <h1 className="text-[var(--clr-sienna)] text-5xl subheader mb-3">Contact me!</h1>
        <input type='text' placeholder="Your Name" className='w-5/6 bg-[var(--clr-isabelline)]
            border border-[var(--clr-coffee)] rounded-lg p-3'/>
        <input type='text' placeholder="Subject" className='w-5/6 bg-[var(--clr-isabelline)]
            border border-[var(--clr-coffee)] rounded-lg p-3'/>
        <textarea placeholder="Your message"
          className='w-5/6 bg-[var(--clr-isabelline)] rounded-lg
            border border-[var(--clr-coffee)] p-3 h-32'/>
        <button className='bg-[var(--clr-peach)] 
            w-1/5 p-2 self-end mt-5 text-white rounded-lg me-16 md:me-28'>Let&apos;s chat!</button>
      </div>
      <div className="float-left flex-grow flex gap-3
        flex-col items-center justify-center">
        <CLink header="Email" text="bermal.aratoglu@gmail.com">
          <IoMailOpen size={30} />
        </CLink>
        <CLink header="Github" text="Go to profile">
          <FaGithub size={30} />
        </CLink>
        <CLink header="LinkedIn" text="Go to profile">
          <FaLinkedin size={30} />
        </CLink>
      </div>
    </div>
  )
}

export default Contact;
