// Ejemplo para src/components/sections/HeroSection.jsx
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import * as LucideIcons from 'lucide-react';

export const HeroSection = ({ id }) => {
  const { theme } = useTheme();
  
  return (
    <section id={id} className="min-h-screen flex items-center justify-center" style={{ backgroundColor: theme.background, color: theme.text }}>
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4" style={{ color: theme.primary }}>Fredy Huachaca Pezúa</h1>
        <p className="text-2xl mb-8">Desarrollador Backend - Microservices</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            <LucideIcons.Github size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            <LucideIcons.Linkedin size={24} />
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            <LucideIcons.Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};