'use client';
import "../globals.css";

const Box = ({ children, onClick }) => {
  return (
    <div 
      className='p-9 flex-grow h-36 box flex items-center justify-center' 
      onClick={onClick}
    >
      <div className="text-xl font-sans w-40 flex justify-center text-[var(--clr-sienna)]">
        {children}
      </div>
    </div>
  );
};

export default Box;
