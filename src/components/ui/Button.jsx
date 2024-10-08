// src/components/ui/Button.js
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

export const Button = ({ children, onClick, className = '' }) => {
  const { theme } = useTheme();
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md transition-colors duration-300 ${className}`}
      style={{ backgroundColor: theme.primary, color: theme.text }}
    >
      {children}
    </button>
  );
};