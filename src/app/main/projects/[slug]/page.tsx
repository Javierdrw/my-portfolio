import { getProjectBySlug, projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Genera los slugs para las rutas estáticas
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}

interface PageParams {
  slug: string;
}

// Metadata dinámica para SEO
export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);
  if (!project) {
    return { title: "Proyecto no encontrado" };
  }

  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';

  return {
    title: `Proyecto: ${project.title}`,
    description: project.shortDescription,
    openGraph: {
      title: `Proyecto: ${project.title}`,
      description: project.shortDescription,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      url: `${baseUrl}/main/projects/${params.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `Proyecto: ${project.title}`,
      description: project.shortDescription,
      images: [project.image],
    },
  };
}

// Página del proyecto
export default function ProjectPage({
  params,
}: {
  params: PageParams;
}) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-2xl mx-auto py-8 px-4">
      <Link
        href="/main/projects"
        className="text-blue-600 hover:underline mb-4 block"
      >
        ← Volver a proyectos
      </Link>
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <Image
        src={project.image}
        alt={project.title}
        width={700}
        height={400}
        className="rounded-lg mb-6"
      />
      <p className="mb-4 text-gray-700">{project.shortDescription}</p>
      {project.details && (
        <div className="prose mb-6">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {project.details}
          </ReactMarkdown>
        </div>
      )}
      <div className="flex gap-3">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-900 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            GitHub
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Ver Demo
          </a>
        )}
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </main>
  );
}
