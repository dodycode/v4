import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import NextAvatar from "~/components/next-avatar";
import BlurFade from "~/components/ui/blur-fade";
import { LinkPreview } from "~/components/ui/link-preview";

import DodyP from "./_assets/dodycode.jpeg";

export default function Home() {
  return (
    <BlurFade className="flex flex-col gap-6">
      <h1 className="font-exo text-3xl font-bold">Hey, I&apos;m Dody</h1>
      <p className="text-base leading-relaxed">
        Fullstack JavaScript Developer who loves building web applications.{" "}
      </p>

      <div className="flex items-center">
        <NextAvatar
          src={DodyP}
          alt="Dody's photo profile"
          width={100}
          height={100}
          style={{
            objectFit: "cover",
            objectPosition: "left",
          }}
          placeholder="blur"
          priority={true}
        />

        <div className="flex flex-col">
          <a
            href="https://www.linkedin.com/in/dodycode/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 transition-colors hover:text-muted-foreground"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">Linkedin</span>
          </a>
          <a
            href="https://github.com/dodycode"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 transition-colors hover:text-muted-foreground"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
        </div>
      </div>

      <div className="text-base leading-relaxed">
        Currently working as an offshore developer at{" "}
        <LinkPreview
          url="https://vaforeveryone.com.au"
          className="font-semibold transition-colors hover:text-muted-foreground"
          imageSrc="/assets/images/experiences/vafe.png"
          isStatic
        >
          VA For Everyone
        </LinkPreview>{" "}
        - collaborating with international teams from various clients to create
        innovative solutions.
      </div>

      <p className="text-sm text-neutral-700">
        &copy; 2025 Dodycode. Design inspired by{" "}
        <Link
          href="https://ubinatus.com"
          className="transition-colors hover:text-white"
          target="_blank"
        >
          JA&apos;s Portfolio Website
        </Link>
      </p>
    </BlurFade>
  );
}
