import React from "react";
import { projectsData } from "../../content/projects/projectsData";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";

export const revalidate = 60;

export default function ProjectsPage() {
  // Cuatro proyectos destacados en la cuadrícula de la parte superior
  const featuredProjects = ["powertraining-app", "ngande-gas-and-energy"];
  const topProjects = projectsData.filter((project) => featuredProjects.includes(project.slug));

  const sorted = projectsData
    .filter((project) => project.published && !featuredProjects.includes(project.slug))
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime()
    );

  return (
    <div className="relative pb-16">
      <Navigation />
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            My work spans various industries, demonstrating my versatility and commitment to delivering
            high-quality web solutions. Below is a selection of projects that showcase my skills and expertise.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        {/* Cuadrícula de 4 proyectos destacados */}
        <div className="grid grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-2">
          {topProjects.map((project) => (
            <Card key={project.slug}>
              <Article project={project} />
            </Card>
          ))}
        </div>
        
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        {/* Resto de proyectos */}
        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((project) => (
                <Card key={project.slug}>
                  <Article project={project} />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
