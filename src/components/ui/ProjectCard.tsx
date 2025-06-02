// src/components/ui/ProjectCard.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/types'; // Usando el alias @/

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <Link href={`/main/projects/${project.id}`}>
        <div className="relative w-full h-48">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      </Link>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link href={`/main/projects/${project.id}`} className="text-blue-600 hover:underline text-sm font-medium">
          Ver Detalles &rarr;
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;