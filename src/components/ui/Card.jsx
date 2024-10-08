// src/components/ui/Card.js
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

export const Card = ({ children, className = '' }) => {
  const { theme } = useTheme();
  return (
    <div 
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-neomorphism p-6 ${className}`}
      style={{ backgroundColor: theme.card, color: theme.text }}
    >
      {children}
    </div>
  );
};