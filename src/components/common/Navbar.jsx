import React, { useState, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../contexts/ThemeContext';
import { Menu, X, Home, User, Code, Briefcase, Mail, BookOpen, Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme, theme } = useTheme();

  const toggleColor = isDarkMode ? theme.primary : '#D1D5DB'; // Gris claro para modo claro

  return (
    <button
      onClick={toggleTheme}
      className={`w-16 h-8 rounded-full p-1 transition-all duration-300 focus:outline-none relative flex items-center justify-between`}
      style={{ 
        backgroundColor: toggleColor,
        border: `2px solid ${toggleColor}`
      }}
    >
      <Sun 
        size={16} 
        className={`absolute left-2 transition-colors duration-300 ${isDarkMode ? 'text-white' : 'text-yellow-400'}`} 
      />
      <Moon 
        size={16} 
        className={`absolute right-2 transition-colors duration-300 ${isDarkMode ? 'text-yellow-400' : 'text-gray-700'}`} 
      />
      <div
        className={`w-6 h-6 rounded-full transition-transform duration-300 absolute ${
          isDarkMode ? 'translate-x-8 bg-white' : 'translate-x-0 bg-white'
        }`}
        style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.2)' }}
      />
    </button>
  );
};

export const Navbar = () => {
  const { theme, isDarkMode, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = useCallback((sectionId) => {
    if (location.pathname !== '/') {
      return `/#${sectionId}`;
    } else {
      return () => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
      };
    }
  }, [location.pathname]);

  const navItems = [
    { name: 'home', icon: <Home size={20} /> },
    { name: 'about', icon: <User size={20} /> },
    { name: 'skills', icon: <Code size={20} /> },
    { name: 'experience', icon: <Briefcase size={20} /> },
    { name: 'contact', icon: <Mail size={20} />, to: '/contact' },
    { name: 'blog', icon: <BookOpen size={20} />, to: '/blog' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-opacity-90 shadow-neomorphism transition-all duration-300"
         style={{ backgroundColor: theme.background, boxShadow: theme.navShadow }}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl md:text-2xl font-bold" style={{ color: theme.primary }}>F R E D G A R</Link>
          
          {/* Menú de escritorio y tablet */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navItems.map((item) => {
              const to = item.to || scrollToSection(item.name);
              return typeof to === 'string' ? (
                <Link
                  key={item.name}
                  to={to}
                  className="p-2 lg:px-4 lg:py-2 rounded-md text-lg font-medium transition-all duration-300 hover:shadow-neomorphism-inset flex items-center"
                  style={{ color: theme.text, backgroundColor: theme.background }}
                >
                  <span className="lg:hidden xl:inline mr-2">{item.icon}</span>
                  <span className="hidden lg:inline">{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</span>
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={to}
                  className="p-2 lg:px-4 lg:py-2 rounded-md text-lg font-medium transition-all duration-300 hover:shadow-neomorphism-inset flex items-center"
                  style={{ color: theme.text, backgroundColor: theme.background }}
                >
                  <span className="lg:hidden xl:inline mr-2">{item.icon}</span>
                  <span className="hidden lg:inline">{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</span>
                </button>
              );
            })}
            <ThemeToggle />
          </div>

          {/* Controles móviles */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              className="p-2 rounded-md"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ color: theme.text }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            {navItems.map((item) => {
              const to = item.to || scrollToSection(item.name);
              return typeof to === 'string' ? (
                <Link
                  key={item.name}
                  to={to}
                  className="flex items-center px-4 py-2 rounded-md text-lg font-medium transition-all duration-300 hover:shadow-neomorphism-inset"
                  style={{ color: theme.text, backgroundColor: theme.background }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon}
                  <span className="ml-2">{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</span>
                </Link>
              ) : (
                <button
                  key={item.name}
                  onClick={() => {
                    to();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center w-full px-4 py-2 rounded-md text-lg font-medium transition-all duration-300 hover:shadow-neomorphism-inset"
                  style={{ color: theme.text, backgroundColor: theme.background }}
                >
                  {item.icon}
                  <span className="ml-2">{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};