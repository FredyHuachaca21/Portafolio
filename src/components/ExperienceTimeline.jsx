// src/components/ExperienceTimeline.jsx
import React, { useState } from 'react';
import { Building2, Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const TimelineItem = ({ align, company, client, role, period, location, activities, achievements, technologies, projectUrl, companyLogo, clientLogo, startYear }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();

  return (
    <div className={`flex ${align === 'left' ? 'justify-end' : 'justify-start'} w-full mb-16 relative`}>
      <div 
        className={`w-5/12 ${align === 'left' ? 'pr-8' : 'pl-8'}`}
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
      <div className={`absolute top-6 left-1/2 transform -translate-x-1/2`}>
        <div className={`w-6 h-6 rounded-full transition-colors duration-300`}
             style={{ 
               backgroundColor: isHovered ? theme.primary : theme.background,
               borderColor: theme.primary,
               borderWidth: '2px',
               borderStyle: 'solid'
             }}></div>
      </div>
      <div className={`absolute top-8 ${align === 'left' ? 'right-1/2 mr-8' : 'left-1/2 ml-8'} transform text-sm font-semibold transition-colors duration-300`}
           style={{ color: isHovered ? theme.primary : theme.text }}>
        {startYear}
      </div>
    </div>
  );
};


const Timeline = ({ experiences }) => {
  const { theme } = useTheme();
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative">
        <div className="absolute h-full w-1 left-1/2 transform -translate-x-1/2" style={{ backgroundColor: theme.timelineLine }}></div>
        {experiences.map((exp, index) => (
          <TimelineItem 
            key={index} 
            align={index % 2 === 0 ? 'left' : 'right'} 
            {...exp} 
          />
        ))}
      </div>
    </div>
  );
};

const ExperienceTimeline = () => {
  const { theme } = useTheme();
  const experiences = [
    {
      company: "Tata Consultancy Services",
      companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlJshBiYUmXtG3O8SJ4ipGF9goupjJ-lxCDQ&s",
      client: "Interbank",
      clientLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7PgZVyTqUSgjKa6DwjYeYV-c4vt310iGKLQ&s",
      role: "Senior Developer",
      period: "Dic 2023 - Presente",
      startYear: "2023",
      location: "Lima, Perú",
      activities: [
        "Desarrollo de aplicaciones web escalables",
        "Liderazgo de equipo de 5 desarrolladores",
        "Implementación de CI/CD pipelines"
      ],
      achievements: [
        "Reduje el tiempo de carga de la aplicación principal en un 40%",
        "Implementé un nuevo sistema de autenticación que mejoró la seguridad"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker"],
      projectUrl: "https://www.interbank.pe"
    },
    {
      company: "Ntt Data",
      companyLogo: "https://s3-eu-west-1.amazonaws.com/hackajob-uploads1.p.hackajob/branding/logo/f7uEmdZqTJmAC7wt3tJg_2ae1a8c7-bd4f-4d97-922c-3ae04a24e3c3_1000x714.jpeg",
      client: "BCP",
      clientLogo: "https://i.pinimg.com/1200x/b3/08/3b/b3083be0d3f3a188bb9697e5fcbccfeb.jpg",
      role: "Java Bacnkend Developer - Microservices",
      period: "2020 - 2023",
      startYear: "2020",
      location: "Lima, Perú",
      activities: [
        "Creación de APIs RESTful",
        "Optimización de rendimiento de bases de datos",
        "Desarrollo de interfaces de usuario con React"
      ],
      achievements: [
        "Desarrollé una API que procesaba 1 millón de solicitudes diarias",
        "Lideré la migración de una aplicación monolítica a microservicios"
      ],
      technologies: ["JavaScript", "Python", "MongoDB", "React"]
    },
    {
      company: "Freelancer",
      companyLogo: "https://www.xbytesolutions.com/assets/img/services/fullstack-development.png",
      role: "Fullstack Developer",
      period: "2018 - 2020",
      startYear: "2018",
      location: "Lima, Perú",
      activities: [
        "Desarrollo de aplicaciones web responsive",
        "Mantenimiento de aplicaciones existentes",
        "Implementación de pruebas unitarias"
      ],
      technologies: ["HTML", "CSS", "JavaScript, Angular"]
    }
  ];

  return (
    <div className="min-h-screen py-12" style={{ backgroundColor: theme.background, color: theme.text }}>
      <Timeline experiences={experiences} />
    </div>
  );
};

export default ExperienceTimeline;