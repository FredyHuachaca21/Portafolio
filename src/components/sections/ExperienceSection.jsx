// src/components/sections/ExperienceSection.js
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import ExperienceTimeline  from '../ExperienceTimeline';

export const ExperienceSection = () => {
  const { theme } = useTheme();
  
  return (
    <section className="py-20" style={{ backgroundColor: theme.background, color: theme.text }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: theme.primary }}>Experiencia Laboral</h2>
        <ExperienceTimeline />
      </div>
    </section>
  );
};