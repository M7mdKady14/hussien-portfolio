import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { personalInfo } from "@/data";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center"
    >
      {/* Available badge */}
      {personalInfo.availableForWork && (
        <Badge variant="outline" className="mb-6 gap-1.5">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          Available for work
        </Badge>
      )}

      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
        Hi, I'm{" "}
        <span className="text-primary">{personalInfo.name}</span>
      </h1>

      <p className="mt-4 text-xl text-muted-foreground sm:text-2xl">
        {personalInfo.title}
      </p>

      <p className="mt-6 max-w-xl text-muted-foreground">
        {personalInfo.bio}
      </p>

      {/* CTAs */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <Button size="lg" asChild>
          <a href="#projects">View My Work</a>
        </Button>
        <Button size="lg" variant="outline" className="gap-2">
          <Download className="h-4 w-4" />
          Download CV
        </Button>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 flex flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Scroll down"
      >
        <span className="text-xs">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  );
}
