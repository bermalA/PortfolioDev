'use client';
import { useState } from 'react';
import Box from './Box';

const Skill = ({ title, technologies }) => {
  const [techVisible, setTechVisible] = useState(true);

  return (
    <div className="w-full">
      <Box onClick={() => setTechVisible(!techVisible)}>{title}</Box>
      <div className={`skills ${techVisible ? 'block' : 'hidden'} w-full ms-3 mt-2 font-sans text-[var(--clr-coffee)] text-lg`}>
        <h3 className="font-bold mt-1 text-[var(--clr-viridian)]">Technologies:</h3>
        <p className="text-[16px]">{technologies.join(', ')}</p>
      </div>
    </div>
  );
};

export default Skill;
