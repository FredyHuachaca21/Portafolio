// src/components/sections/AboutSection.js
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Card } from '../ui/Card';

export const AboutSection = () => {
  const { theme } = useTheme();
  
  return (
    <section className="py-20" style={{ backgroundColor: theme.background, color: theme.text }}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: theme.primary }}>Sobre Mí</h2>
        <Card>
          <p className="mb-4">
            Soy un desarrollador apasionado con experiencia en crear soluciones web innovadoras. 
            Me especializo en JavaScript, React, y Node.js, y siempre estoy buscando aprender nuevas tecnologías.
          </p>
          <p>
            Fuera del trabajo, disfruto contribuir a proyectos de código abierto y compartir mis conocimientos a través de artículos técnicos y charlas en meetups locales.
          </p>
        </Card>
      </div>
    </section>
  );
};