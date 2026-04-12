import { projects } from "@/data/selectedProjects";
import { instrumentSerif } from "@/lib/fonts";
import { SelectedProjectCard } from "./SelectedProjectCard";

export function SelectedProjectsSection() {
  return (
    <section
      className="flex h-[100svh] min-h-0 flex-col justify-center bg-transparent px-6 py-8"
      aria-labelledby="selected-projects-title"
      data-cursor
  data-cursor-color="#FFFFFF"
    >
      <div className="mx-auto w-full max-w-6xl">
        <h2
          id="selected-projects-title"
          className={`${instrumentSerif.className} mb-6 text-balance text-2xl font-normal tracking-tight text-[#3d3832] md:mb-8 md:text-3xl`}
        >
          Selected projects
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {projects.map((project) => (
            <SelectedProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
