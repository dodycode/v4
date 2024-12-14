import BlurFade from "~/components/ui/blur-fade";
import Experiences from "~/collections/experiences.json";
import { WorkExperience } from "./_components/work-experience";
import Link from "next/link";

export default function Work() {
  return (
    <BlurFade className="space-y-8">
      <h1 className="font-exo text-2xl font-semibold">Experience</h1>
      <div>
        {Experiences.map((experience, index) => {
          if (!experience.url) return null;
          return (
            <Link
              className="group"
              href={experience.url as string}
              target="_blank"
              key={index}
            >
              <WorkExperience
                dates={experience.dates}
                role={experience.role}
                company={experience.company}
                description={experience.description}
                isLast={index === Experiences.length - 1}
              />
            </Link>
          );
        })}
      </div>
    </BlurFade>
  );
}
