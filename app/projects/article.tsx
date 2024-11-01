import type { FC } from "react";

type SimpleProject = {
  slug: string;
  title: string;
  description: string;
  date: string;
  published: boolean;
  image: string; // Ruta de la imagen en /public/images
  website: string; // Añadimos la URL del sitio web real del proyecto
};

// Actualizamos Props para quitar views y añadir la URL del sitio web
type Props = {
  project: SimpleProject;
};

export const Article: FC<Props> = ({ project }) => {
  return (
    <a href={project.website} target="_blank" rel="noopener noreferrer">
      <article className="p-4 md:p-8">
        <div className="flex justify-between gap-2 items-center">
          <span className="text-xs duration-1000 text-zinc-200 group-hover:text-white group-hover:border-zinc-200 drop-shadow-orange">
            {project.date ? (
              <time dateTime={new Date(project.date).toISOString()}>
                {Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
                  new Date(project.date)
                )}
              </time>
            ) : (
              <span>SOON</span>
            )}
          </span>
        </div>

        {/* Mostrar imagen del proyecto */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-auto mt-4 rounded-md"
        />

        <h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
          {project.title}
        </h2>
        <p className="z-20 mt-4 text-sm duration-1000 text-zinc-400 group-hover:text-zinc-200">
          {project.description}
        </p>
      </article>
    </a>
  );
};
