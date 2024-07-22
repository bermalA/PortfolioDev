import React from 'react';

const Circle = ({ className }) => {
  return (
    <div className={`bg-[var(--clr-peach)] w-[210px] h-[210px] rounded-full
     drop-shadow-sm blur-xl animate-float -z-0 ${className}`}>
        <p className="invisible">Circle</p>
    </div>
  );
}

export default Circle;
