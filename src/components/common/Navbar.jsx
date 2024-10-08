// src/components/common/Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export const Navbar = () => {
  const { theme, isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      // Si no estamos en la página principal, usamos Link para navegar
      return `/#${sectionId}`;
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
      return null;
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-opacity-90 shadow-neomorphism transition-all duration-300"
         style={{ backgroundColor: theme.background, boxShadow: theme.navShadow }}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold" style={{ color: theme.primary }}>F R E D G A R</Link>
          <div className="flex items-center space-x-4">
            {['home', 'about', 'skills', 'experience'].map((section) => {
              const to = scrollToSection(section);
              return to ? (
                <Link
                  key={section}
                  to={to}
                  className="px-4 py-2 rounded-md text-lg font-medium transition-all duration-300 hover:shadow-neomorphism-inset"
                  style={{ 
                    color: theme.text,
                    backgroundColor: theme.background,
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              ) : (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="px-4 py-2 rounded-md text-lg font-medium transition-all duration-300 hover:shadow-neomorphism-inset"
                  style={{ 
                    color: theme.text,
                    backgroundColor: theme.background,
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              );
            })}
            <Link to="/contact" className="px-4 py-2 rounded-md text-lg font-medium transition-all duration-300 hover:shadow-neomorphism-inset"
                  style={{ color: theme.text, backgroundColor: theme.background }}>
              Contact
            </Link>
            <Link to="/blog" className="px-4 py-2 rounded-md text-lg font-medium transition-all duration-300 hover:shadow-neomorphism-inset"
                  style={{ color: theme.text, backgroundColor: theme.background }}>
              Blog
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition-all duration-300 hover:shadow-neomorphism-inset"
              style={{ backgroundColor: theme.background }}
            >
              {isDarkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-gray-700" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};