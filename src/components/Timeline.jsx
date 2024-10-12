// src/components/Timeline.jsx
import React from 'react';
import TimelineItem from './TimelineItem';
import { useTheme } from '../contexts/ThemeContext';

const Timeline = ({ experiences }) => {
  const { theme } = useTheme();

  return (
    <div className="container mx-auto px-4 py-8 relative">
      <div className="absolute top-0 bottom-0 left-[9px] md:left-1/2 w-px bg-gray-300 transform md:-translate-x-1/2"></div>
      {experiences.map((exp, index) => (
        <TimelineItem 
          key={index} 
          align={index % 2 === 0 ? 'left' : 'right'} 
          {...exp} 
        />
      ))}
    </div>
  );
};

export default Timeline;