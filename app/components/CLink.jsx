import React from 'react'

const CLink = ({children, header, text}) => {
  return (
    <div className='border border-[var(--clr-viridian)] 
    flex gap-2 rounded-lg p-1 pe-3 ps-3 w-5/6'>
        <div className="float-left text-[var(--clr-eucalyptus)]">{children}</div>
        <div className="float-right">
            <div className="font-semibold text-[var(--clr-viridian)]">{header}</div>
            <div className="text-[var(--clr-eucalyptus)]">{text}</div>
        </div>
    </div>
  )
}

export default CLink