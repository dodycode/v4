import BlurFade from "~/components/ui/blur-fade";

import projects from "~/collections/projects.json";
import Link from "next/link";

export default function Work() {
  return (
    <BlurFade className="space-y-8">
      <h1 className="font-exo text-2xl font-bold">Projects</h1>
      {projects.map((project, index) => (
        <div key={index} className="group">
          <Link href={project.url} target="_blank" className="block space-y-2">
            <h2 className="group-hover:text-muted-foreground font-medium transition-colors">
              {project.name}{" "}
              <div className="group:hover:bg-muted-foreground inline-block size-1 -translate-y-0.5 rounded-full bg-white" />{" "}
              {project.date}
            </h2>
            <p className="text-muted-foreground">{project.description}</p>
          </Link>
        </div>
      ))}
    </BlurFade>
  );
}
