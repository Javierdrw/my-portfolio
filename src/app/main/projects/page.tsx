// src/app/(main)/projects/page.tsx
import ProjectCard from '@/components/ui/ProjectCard';
import { projects } from '@/lib/data'; // Importa tus datos de proyectos

export const metadata = {
  title: 'Mis Proyectos - Mi Portafolio',
  description: 'Explora los proyectos en los que he trabajado.',
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Mis Proyectos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}