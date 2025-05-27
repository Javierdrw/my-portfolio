// src/lib/data.ts
import { Project, Skill } from './types';

export const projects: Project[] = [
  {
    id: 'my-tinerary',
    title: 'MyTinerary',
    shortDescription: 'Plataforma web para itinerarios turísticos',
    description: 'Aplicación full-stack que permite crear itinerarios personalizados con sistema de login, filtros y backend en Vercel.',
    image: '/images/my-tinerary.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Javierdrw/my-tinerary',
    liveUrl: 'https://my-tinerary.vercel.app',
  },
  {
    id: 'nasa-rover-gallery',
    title: 'Galería NASA Rover',
    shortDescription: 'Aplicación que consume la API de la NASA',
    description: 'Interfaz web que muestra imágenes de los rovers de la NASA con filtros por fecha y sistema de favoritos.',
    image: '/images/nasa-rover.jpg',
    tags: ['React', 'API', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Javierdrw/nasa-rover-gallery',
    liveUrl: 'https://nasa-rover.vercel.app',
  },
  {
    id: 'agents-finder',
    title: 'Buscador de Agentes',
    shortDescription: 'Aplicación de búsqueda y filtrado',
    description: 'Proyecto React que permite filtrar y visualizar agentes con múltiples atributos y paginación.',
    image: '/images/agents-finder.jpg',
    tags: ['React', 'Context API', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Javierdrw/agents-finder',
    liveUrl: 'https://agents-finder.vercel.app',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    shortDescription: 'Tienda virtual con carrito de compras',
    description: 'Aplicación que maneja productos, filtros por categoría y carrito de compras con Context API y localStorage.',
    image: '/images/ecommerce.jpg',
    tags: ['React', 'Context API', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Javierdrw/ecommerce',
    liveUrl: 'https://ecommerce.vercel.app',
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