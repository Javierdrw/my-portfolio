// src/lib/data.ts
import { Project, Skill } from './types';

export const projects: Project[] = [
  {
    id: 'ecommerce-app',
    title: 'Tienda Online Moderna',
    shortDescription: 'Plataforma de e-commerce completa con pasarela de pago.',
    description: 'Este proyecto es una aplicación de e-commerce full-stack construida con Next.js, Stripe y PostgreSQL. Permite a los usuarios navegar por productos, añadir al carrito y realizar compras de forma segura. Incluye un panel de administración para gestionar productos, pedidos y usuarios.',
    image: '/images/ecommerce.jpg',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL'],
    githubUrl: 'https://github.com/tuusuario/ecommerce-app',
    liveUrl: 'https://ecommerce.tudominio.com',
    details: 'Un desglose técnico de cómo se implementaron las características clave, los desafíos y las soluciones.'
  },
  {
    id: 'portfolio-v1',
    title: 'Portafolio Personal (V1)',
    shortDescription: 'Mi primer portafolio interactivo.',
    description: 'Una aplicación de portafolio estática diseñada para mostrar mis habilidades y proyectos iniciales. Enfocada en la simplicidad y la carga rápida.',
    image: '/images/portfolio-v1.jpg',
    tags: ['React', 'CSS Modules'],
    githubUrl: 'https://github.com/tuusuario/portfolio-v1',
    liveUrl: 'https://v1.tudominio.com',
  },
  // Añade más proyectos aquí
];

export const skills: Skill[] = [
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS3', category: 'frontend' },
  { name: 'JavaScript (ES6+)', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'React.js', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
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