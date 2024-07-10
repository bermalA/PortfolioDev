import React from 'react';

const Circle = ({ className }) => {
  return (
    <div className={`bg-[var(--clr-peach)] w-1/6 h-1/6 rounded-full
     drop-shadow-sm blur-xl -z-0 animate-pulse ${className}`}>
        <p className="invisible">Circle</p>
    </div>
  );
}

export default Circle;
