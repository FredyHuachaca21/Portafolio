// src/components/ExperienceTimeline.jsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import Timeline from './Timeline';
import { experiences } from '../data/experiences';

const ExperienceTimeline = () => {
  const { theme } = useTheme();

  return (
    <div className="min-h-screen py-12" style={{ backgroundColor: theme.background, color: theme.text }}>
      <h2 className="text-3xl font-bold text-center mb-10" style={{ color: theme.primary }}>Mi Experiencia Laboral</h2>
      <Timeline experiences={experiences} />
    </div>
  );
};

export default ExperienceTimeline;