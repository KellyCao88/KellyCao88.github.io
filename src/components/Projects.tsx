import { useState } from "react";
import { ExternalLink, HeartPulse } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

type Project = {
  title: string;
  description: string;
  badge: string;
  image?: string;
  link?: string;
};

const projects: Project[] = [
  {
    title: "Patient-Specific Cardiovascular CFD",
    description:
      "Designed patient-specific computational fluid dynamics (CFD) models from medical imaging to visualize hemodynamics in modeled regions of interest.",
    badge: "Imaging and Simulation",
    link: "#",
  },
  {
    title: "Dosing and Dispensing System",
    description:
      "Reviewed and modified previous CAD drawings and conducted iterative testing to improve volume and time efficiency of a bone graft dosing and dispensing system.",
    badge: "Sustaining Engineering and Testing",
    image: "/senior-design-poster.png",
  },
  {
    title: "ECGformer Heartbeat Arrhythmia Classification",
    description:
      "Trained and evaluated a transformer-based encoder only model for the classification of heartbeat arrhythmias from a preprocessed dataset.",
    badge: "Machine Learning",
    image: "/ece570-poster.png",
  },
];

export function Projects() {
  const [preview, setPreview] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Featured Projects
        </h2>

        <div className="mt-12 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="flex h-full flex-col overflow-hidden pt-0 shadow-md transition-transform duration-300 hover:-translate-y-1"
            >
              {project.image ? (
                <button
                  type="button"
                  onClick={() => setPreview(project)}
                  className="group aspect-video w-full overflow-hidden bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  aria-label={`View full poster for ${project.title}`}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} poster`}
                    className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                </button>
              ) : (
                <div className="flex aspect-video w-full items-center justify-center bg-gradient-to-br from-primary/15 via-secondary to-muted">
                  <HeartPulse className="h-14 w-14 text-primary" strokeWidth={1.5} />
                </div>
              )}

              <CardHeader>
                <CardTitle className="text-lg text-foreground">{project.title}</CardTitle>
                <Badge className="w-fit">{project.badge}</Badge>
              </CardHeader>

              <CardContent className="flex flex-1 flex-col">
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>

                {project.link && (
                  <Button asChild variant="outline" className="mt-6 w-fit self-start">
                    <a href={project.link} target="_blank" rel="noreferrer noopener">
                      View Research
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!preview} onOpenChange={(open) => !open && setPreview(null)}>
        <DialogContent className="max-w-5xl">
          <DialogTitle className="text-base">{preview?.title}</DialogTitle>
          {preview?.image && (
            <img
              src={preview.image}
              alt={`${preview.title} full poster`}
              className="max-h-[75vh] w-full object-contain"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
