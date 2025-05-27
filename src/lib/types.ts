// src/lib/types.ts

export type Project = {
  id: string;
  title: string;
  description: string;
  shortDescription: string; // Para mostrar en la tarjeta de proyecto
  image: string; // Ruta a la imagen del proyecto
  tags: string[]; // Ej: ['Next.js', 'TypeScript', 'Tailwind CSS']
  githubUrl?: string;
  liveUrl?: string;
  details?: string; // Para la página de detalles del proyecto (ej. Markdown)
};

export type Skill = {
  name: string;
  icon?: string; // O una ruta a un SVG
  category: 'frontend' | 'backend' | 'devops' | 'tools';
};