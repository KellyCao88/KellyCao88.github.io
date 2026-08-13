import { useState } from "react";
import { BookOpen, ExternalLink, HeartPulse } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type Project = {
  title: string;
  description: string;
  fullDescription: string;
  badge: string;
  image?: string;
  link?: string;
  paperLink?: string;
};

const projects: Project[] = [
  {
    title: "Patient-Specific Cardiovascular CFD",
    description:
      "Designed patient-specific computational fluid dynamics (CFD) models from medical imaging to visualize hemodynamics in modeled regions of interest.",
    fullDescription:
      "Designed patient-specific computational fluid dynamics (CFD) models from medical imaging to visualize hemodynamics in modeled regions of interest.",
    badge: "Imaging and Simulation",
    link: "#",
    paperLink: "https://doi.org/10.1007/s00246-024-03443-7",
  },
  {
    title: "Dosing and Dispensing System",
    description:
      "Reviewed and modified previous CAD drawings and conducted iterative testing to improve volume and time efficiency of a bone graft dosing and dispensing system.",
    fullDescription:
      "Reviewed and modified previous CAD drawings and conducted iterative testing to improve volume and time efficiency of a bone graft dosing and dispensing system.",
    badge: "Sustaining Engineering and Testing",
    image: "/senior-design-poster.png",
  },
  {
    title: "ECGformer Heartbeat Arrhythmia Classification",
    description:
      "Trained and evaluated a transformer-based encoder-only model for the classification of heartbeat arrhythmias from a preprocessed dataset.",
    fullDescription:
      "Trained and evaluated a transformer-based encoder-only model for the classification of heartbeat arrhythmias from a preprocessed dataset.",
    badge: "Machine Learning and Artificial Intelligence",
    image: "/ece570-poster.png",
  },
];

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

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
              onClick={() => setSelected(project)}
              className="flex h-full cursor-pointer flex-col overflow-hidden pt-0 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              role="button"
              tabIndex={0}
              aria-label={`Open details for ${project.title}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelected(project);
                }
              }}
            >
              {project.image ? (
                <div className="group h-64 w-full overflow-hidden bg-gray-50 p-6">
                  <img
                    src={project.image}
                    alt={`${project.title} poster`}
                    className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              ) : (
                <div className="flex h-64 w-full items-center justify-center bg-gradient-to-br from-primary/15 via-secondary to-muted">
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-h-[90vh] max-w-3xl overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl">{selected?.title}</DialogTitle>
            {selected && <DialogDescription>{selected.badge}</DialogDescription>}
          </DialogHeader>

          {selected && (
            <div className="space-y-6">
              {selected.image ? (
                <div className="w-full overflow-hidden rounded-lg bg-muted">
                  <img
                    src={selected.image}
                    alt={`${selected.title} poster`}
                    className="w-full object-contain"
                  />
                </div>
              ) : (
                <div className="flex aspect-video w-full items-center justify-center rounded-lg bg-gradient-to-br from-primary/15 via-secondary to-muted">
                  <HeartPulse className="h-20 w-20 text-primary" strokeWidth={1.5} />
                </div>
              )}

              <p className="text-base leading-relaxed text-foreground sm:text-lg">
                {selected.fullDescription}
              </p>

              {selected.link && (
                <Button asChild variant="outline" className="w-fit">
                  <a href={selected.link} target="_blank" rel="noreferrer noopener">
                    View Project
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}

              {selected.paperLink && (
                <Button asChild variant="outline" className="w-fit">
                  <a href={selected.paperLink} target="_blank" rel="noopener noreferrer">
                    Read Published Paper
                    <BookOpen className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
