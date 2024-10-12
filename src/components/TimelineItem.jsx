// src/components/TimelineItem.jsx
import React, { useState } from 'react';
import { Building2, Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const TimelineItem = ({ align, company, client, role, period, location, activities, achievements, technologies, projectUrl, companyLogo, clientLogo, startYear }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();

  return (
    <div className={`flex flex-col md:flex-row ${align === 'left' ? 'md:justify-end' : 'md:justify-start'} w-full mb-16 relative`}>
      <div 
        className={`w-full md:w-5/12 ${align === 'left' ? 'md:pr-8' : 'md:pl-8'} pl-12 md:pl-0`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className={`rounded-lg p-6 transition-all duration-300 ${isHovered ? 'transform scale-105' : ''}`}
             style={{
               backgroundColor: theme.card,
               boxShadow: isHovered ? theme.shadowHover : theme.shadow,
               color: theme.text
             }}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                {companyLogo && <img src={companyLogo} alt={company} className="w-12 h-12 mr-2" />}
                <h3 className="text-xl font-bold" style={{ color: theme.primary }}>{company}</h3>
              </div>
              {clientLogo && <img src={clientLogo} alt={client} className="w-8 h-8" />}
            </div>
            <div className="space-y-2 text-left">
              <p className="flex items-center"><Briefcase size={16} className="mr-2" style={{ color: theme.primary }} /> {role}</p>
              <p className="flex items-center text-sm"><Calendar size={16} className="mr-2" style={{ color: theme.primary }} /> {period}</p>
              {location && <p className="flex items-center text-sm"><MapPin size={16} className="mr-2" style={{ color: theme.primary }} /> {location}</p>}
              {client && <p className="flex items-center text-sm"><Building2 size={16} className="mr-2" style={{ color: theme.primary }} /> Cliente: {client}</p>}
            </div>
            <div className="mt-4">
              <h4 className="font-semibold mb-2" style={{ color: theme.primary }}>Actividades principales:</h4>
              <ul className="list-disc list-inside text-sm space-y-1">
                {activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>
            {achievements && (
              <div className="mt-4">
                <h4 className="font-semibold mb-2" style={{ color: theme.primary }}>Logros destacados:</h4>
                <ul className="list-disc list-inside text-sm space-y-1">
                  {achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            )}
            {technologies && (
              <div className="mt-4">
                <h4 className="font-semibold mb-2" style={{ color: theme.primary }}>Tecnologías utilizadas:</h4>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span key={index} className="px-2 py-1 rounded text-xs" style={{ backgroundColor: theme.tagBackground, color: theme.tagText }}>{tech}</span>
                  ))}
                </div>
              </div>
            )}
            {projectUrl && (
              <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="flex items-center mt-4 hover:underline" style={{ color: theme.link }}>
                <ExternalLink size={16} className="mr-1" /> Ver proyecto
              </a>
            )}
          </div>
        </div>
        <div className="absolute left-0 md:left-1/2 top-[-30px] md:top-0 flex items-center">
        <div className={`w-6 h-6 rounded-full transition-colors duration-300 z-10 transform translate-x-[-19px] md:translate-x-[-50%]`}
             style={{ 
               backgroundColor: isHovered ? theme.primary : theme.background,
               borderColor: theme.primary,
               borderWidth: '2px',
               borderStyle: 'solid'
             }}></div>
        <div className={`ml-3 md:ml-0 md:absolute ${align === 'left' ? 'md:right-full md:mr-2' : 'md:left-full md:ml-2'} whitespace-nowrap text-sm font-semibold transition-colors duration-300`}
             style={{ color: isHovered ? theme.primary : theme.text }}>
          {startYear}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;