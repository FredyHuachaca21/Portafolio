// src/pages/Contact.jsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const Contact = () => {
  const { theme } = useTheme();
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: theme.background, color: theme.text }}>
      <h1 className="text-4xl font-bold">Página de Contacto</h1>
    </div>
  );
};

export default Contact;