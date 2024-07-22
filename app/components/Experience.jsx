import React from 'react';
import Skill from './Skill';

const Experience = () => {
  return (
    <div className='h-full bg-[var(--clr-isabelline)] p-5'>
      <div className="grid grid-cols-3 gap-4">
        <Skill title="Frontend Development" technologies={['HTML5', 'CSS3', '.NET ASP MVC', 'React.js', 'Next.js', 'Typescript', 'EcmaScript13', 'Web Assembly']} />
        <Skill title="Backend Development" technologies={['Node.js', 'Java SpringBoot']} />
        <Skill title="AI Development" technologies={['TensorFlow', 'TensorFlow Zoo Models', 'PyTorch', 'QT5', 'Scikit-learn']} />
        <Skill title="DevOps & Cloud & GenAI Tools" technologies={['AWS', 'Firebase', 'Docker', 'Jenkins', 'Minikube', 'Hadoop', 'Spark', 'Kafka', 'Hive','Gemini API']} />
        <Skill title="ERP Systems" technologies={['SAP']} />
        <Skill title="Soft Skills" technologies={['Communication', 'Teamwork', 'Problem Solving']} />
      </div>
    </div>
  );
};

export default Experience;
