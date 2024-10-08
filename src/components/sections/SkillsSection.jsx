// src/components/sections/SkillsSection.js
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Card } from '../ui/Card';

export const SkillsSection = () => {
  const { theme } = useTheme();
  const skills = ['JavaScript', 'React', 'Node.js', 'Python', 'AWS', 'Docker'];
  
  return (
    <section className="py-20" style={{ backgroundColor: theme.background, color: theme.text }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: theme.primary }}>Habilidades</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <Card key={index} className="text-center">
              <span className="text-lg font-semibold">{skill}</span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
