// src/pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const NotFound = () => {
  const { theme } = useTheme();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center" style={{ backgroundColor: theme.background, color: theme.text }}>
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-2xl mb-8">Página no encontrada</p>
      <Link to="/" className="px-6 py-3 rounded-md text-lg font-medium transition-all duration-300 shadow-neomorphism hover:shadow-neomorphism-inset" style={{ backgroundColor: theme.primary, color: theme.background }}>
        Volver al Inicio
      </Link>
    </div>
  );
};

export default NotFound;