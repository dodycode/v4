import { cn } from "~/lib/utils";

interface WorkExperienceProps {
  dates: string;
  role: string;
  company: string;
  description: string;
  isLast?: boolean;
}

const WorkExperience: React.FC<WorkExperienceProps> = ({
  dates,
  role,
  company,
  description,
  isLast,
}) => {
  return (
    <div className={cn("relative border-l pl-6", isLast && "border-l-0")}>
      <div className="absolute -left-1.5 h-3 w-3 rounded-full border bg-background" />
      <div className="-translate-y-[4.5px] space-y-2 pb-4">
        <div className="flex flex-col items-start lg:flex-row lg:items-center lg:justify-between">
          <h3 className="font-medium transition-colors group-hover:text-muted-foreground">
            {role}
          </h3>
          <span className="text-sm text-muted-foreground">{dates}</span>
        </div>
        <p className="text-sm text-muted-foreground">{company}</p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  );
};

export { WorkExperience };
