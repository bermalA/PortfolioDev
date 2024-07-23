import React from 'react'

const Contact = () => {
  return (
    <div className='bg-[var(--clr-isabelline)] flex h-[700px]'>
        <div className="float-right flex-grow flex flex-col 
        ps-16 text-[var(--clr-brown)]
        m-10 ms-16 gap-4 justify-center">
            <h1 class="text-[var(--clr-viridian)] text-5xl
           subheader mb-3">Contact me!</h1>
            <input type='text' className='w-5/6 bg-[var(--clr-isabelline)]
            border border-[var(--clr-coffee)] rounded-lg p-3'/>
            <input type='text' className='w-5/6 bg-[var(--clr-isabelline)]
            border border-[var(--clr-coffee)] rounded-lg p-3'/>
            <textarea className='w-5/6 bg-[var(--clr-isabelline)]
            rounded-lg
            border border-[var(--clr-coffee)] p-3 h-32'/>
            <button className='bg-[var(--clr-eucalyptus)] 
            w-1/5 p-2 self-end mt-5 me-16'>btn</button>
        </div>
        <div className="float-left flex-grow">b</div>
    </div>
  )
}

export default Contact