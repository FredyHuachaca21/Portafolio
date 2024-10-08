// src/components/common/ThemeToggle.js
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  
  return (
    <button 
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 z-10"
    >
      {isDarkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-700" />}
    </button>
  );
};