// src/pages/Home.jsx
import React, { useEffect } from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { SkillsSection } from '../components/sections/SkillsSection';
import { ExperienceSection } from '../components/sections/ExperienceSection';

const Home = () => {
  useEffect(() => {
    // Scroll to the section if there's a hash in the URL
    if (window.location.hash) {
      const id = window.location.hash.substring(1); // remove the '#'
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  }, []);

  return (
    <>
      <div id="home"><HeroSection /></div>
      <div id="about"><AboutSection /></div>
      <div id="skills"><SkillsSection /></div>
      <div id="experience"><ExperienceSection /></div>
    </>
  );
};

export default Home;