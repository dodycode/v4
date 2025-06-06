import { Github, Linkedin } from "lucide-react";
import Link from "next/link";
import NextAvatar from "~/components/next-avatar";
import BlurFade from "~/components/ui/blur-fade";
import { LinkPreview } from "~/components/ui/link-preview";
import { env } from "~/env";

const baseUrl = env.BASE_URL;

export default function Home() {
  return (
    <BlurFade className="flex flex-col gap-6">
      <h1 className="font-exo text-3xl font-bold">Hey, I&apos;m Dody</h1>
      <p className="text-base leading-relaxed">
        Fullstack Developer who loves building web applications.{" "}
      </p>

      <div className="flex items-center">
        <NextAvatar
          className="object-cover object-left"
          src={`${baseUrl}/assets/images/dodycode.jpeg`}
          alt="Dody's photo profile"
          width={100}
          height={100}
        />

        <div className="flex flex-col">
          <Link
            href="https://www.linkedin.com/in/dodycode/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-muted-foreground p-2 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">Linkedin</span>
          </Link>
          <Link
            href="https://github.com/dodycode"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-muted-foreground p-2 transition-colors"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Link>
        </div>
      </div>

      <div className="text-base leading-relaxed">
      Currently, I work at{" "}
        <LinkPreview
          url="https://suryadt.co.id/"
          className="hover:text-muted-foreground font-semibold transition-colors"
        >
          Surya Digital Technology
        </LinkPreview>{" "}
        as an outsourced talent, contributing to projects for clients such as,{" "}
        <LinkPreview
          url="https://upscalix.com.au/"
          className="hover:text-muted-foreground font-semibold transition-colors"
        >
          Upscalix
        </LinkPreview>{" "} and {" "}
        <LinkPreview
          url="https://vaforeveryone.com.au/"
          className="hover:text-muted-foreground font-semibold transition-colors"
          imageSrc="/assets/images/experiences/vafe.png"
          isStatic
        >
          VA For Everyone
        </LinkPreview>.
      </div>

      <div className="text-base leading-relaxed">I collaborate with international teams to design and implement innovative solutions that drive business success.</div>

      <div className="text-base leading-relaxed">
        Let’s build something great together.
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
