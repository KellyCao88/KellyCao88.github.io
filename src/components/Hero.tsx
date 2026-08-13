import { Download } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[calc(100vh-4rem)] items-center px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full py-20 text-center">
        {/* Circular headshot */}
        <div className="mx-auto mb-6 h-44 w-44 overflow-hidden rounded-full border-4 border-primary/20 shadow-lg sm:h-48 sm:w-48">
          <img
            src="/professional-headshot-circle.JPG"
            alt="Kelly Cao professional headshot"
            className="h-full w-full object-cover object-center"
          />
        </div>

        {/* Overline */}
        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
          Portfolio of Kelly Cao
        </p>

        {/* Headline */}
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl md:whitespace-nowrap">
          Biomedical Engineer | Design, Testing, and Compliance
        </h1>

        {/* Sub-headline */}
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Leveraging a BS and MS in Biomedical Engineering to support product development.
          Passionate about regulatory compliance, continuous improvement, and creating innovative
          solutions that have meaningful impacts.
        </p>

        {/* CTA */}
        <div className="mt-10">
          <Button
            size="lg"
            className="h-12 px-8 text-base shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            asChild
          >
            <a href="/Resume.pdf" target="_blank" download>
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
