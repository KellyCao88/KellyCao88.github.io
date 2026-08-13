import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[75vh] flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8"
    >
      {/* Ambient gradient orbs */}
      <div
        className="pointer-events-none absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-slate-400/20 blur-3xl"
        aria-hidden="true"
      />

      {/* Glassmorphism content container */}
      <div className="relative mx-auto w-full max-w-2xl rounded-3xl border border-slate-200 bg-white/70 p-10 text-center shadow-xl shadow-slate-200/50 backdrop-blur-md md:p-12">
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
        <h1 className="mx-auto w-full text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
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
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-5 w-5" />
              Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
