// src/components/ExperienceTimeline.jsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Timeline from './Timeline';
import { experiences } from '../data/experiences';

const ExperienceTimeline = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen py-2" style={{ backgroundColor: theme.background, color: theme.text }}>
      <Timeline experiences={experiences} />
    </div>
  );
};

export default ExperienceTimeline;