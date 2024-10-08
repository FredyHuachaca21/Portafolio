// src/components/common/Layout.jsx
import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../../contexts/ThemeContext';

export const Layout = ({ children }) => {
  const { theme } = useTheme();
  
  return (
    <div className="min-h-screen transition-colors duration-300 pt-16" style={{ backgroundColor: theme.background, color: theme.text }}>
      <ThemeToggle />
      <main>{children}</main>
    </div>
  );
};