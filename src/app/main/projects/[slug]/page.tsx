// src/app/(main)/projects/[slug]/page.tsx
import { getProjectBySlug, projects } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Para generar rutas estáticas en build time (importante para SEO y rendimiento)
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

type ProjectDetailsPageProps = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: ProjectDetailsPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Proyecto no encontrado',
    };
  }

  return {
    title: `${project.title} - Mi Portafolio`,
    description: project.shortDescription,
    // Puedes añadir más meta tags aquí, como og:image
    openGraph: {
        images: [project.image],
    },
  };
}


export default function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound(); // Muestra la página 404 si el proyecto no existe
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <Link href="/projects" className="text-blue-600 hover:underline mb-4 block">
        &larr; Volver a Proyectos
      </Link>
      <h1 className="text-4xl font-bold text-gray-800 mb-6">{project.title}</h1>
      <div className="relative w-full h-80 mb-6 rounded-lg overflow-hidden shadow-lg">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 700px" // Ajusta según el ancho de tu contenedor
          className="object-cover"
        />
      </div>

      <p className="text-gray-700 text-lg mb-6 leading-relaxed">{project.description}</p>

      {project.details && (
          <div className="prose prose-blue max-w-none mb-6">
              {/* Si project.details es Markdown, usa una librería como `remark` o `markdown-to-jsx` */}
              <p>{project.details}</p>
          </div>
      )}


      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300"
          >
            Ver en GitHub
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Ver Demo
          </a>
        )}
      </div>
    </div>
  );
}