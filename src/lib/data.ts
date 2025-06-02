// src/lib/data.ts
import { Project, Skill } from './types';

export const projects: Project[] = [
  {
    id: 'my-tinerary',
    title: 'My Tinerary',
    shortDescription: 'Plataforma web para itinerarios turísticos',
    description: 'Aplicación full-stack que permite crear itinerarios personalizados con sistema de login, filtros y backend en Vercel.',
    image: '/images/MyTinerary.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Javierdrw/mytinerary-JavierGutierrez',
    gitBackendUrl: 'https://github.com/Javierdrw/mytinerary-backend-JavierGutierrez',
    liveUrl: 'https://mytinerary-javier-gutierrez.vercel.app/',
  },
  {
    id: 'amazing-events',
    title: 'Amazing Events',
    shortDescription: 'Plataforma de eventos',
    description: 'Aplicación web para gestionar y mostrar eventos próximos y pasados, con secciones de contacto y estadísticas.',
    image: '/images/amazing-events.png',
    tags: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Javierdrw/AmazingEventsJavierGutierrez',
    liveUrl: 'https://amazing-events-javier-gutierrez.vercel.app/',
  }
];

export const skills: Skill[] = [
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS3', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'React.js', category: 'frontend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Express.js', category: 'backend' },
  { name: 'MongoDB', category: 'backend' },
  { name: 'PostgreSQL', category: 'backend' },
  { name: 'Git', category: 'tools' },
  { name: 'Docker', category: 'devops' },
  // Añade más habilidades
];

// Función para obtener un proyecto por ID/slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.id === slug);
}