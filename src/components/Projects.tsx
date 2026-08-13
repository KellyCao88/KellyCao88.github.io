import { ImageIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const projects = [
  {
    title: "Patient-Specific Cardiovascular CFD",
    description:
      "Designed patient-specific computational fluid dynamics (CFD) models from medical imaging to visualize hemodynamics in modeled regions of interest.",
    badge: "Imaging and Simulation",
  },
  {
    title: "Dosing and Dispensing System Project",
    description:
      "Reviewed and modified previous CAD drawings and conducted iterative testing to improve volume and time efficiency of a bone graft dosing and dispensing system.",
    badge: "Sustaining Engineering and Testing",
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
  return (
    <section id="projects" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Featured Projects
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="overflow-hidden shadow-md transition-transform duration-300 hover:-translate-y-1"
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="aspect-video w-full object-cover bg-muted"
                />
              ) : (
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <ImageIcon className="h-10 w-10 text-muted-foreground/40" />
                </div>
              )}

              <CardHeader>
                <CardTitle className="text-lg text-foreground">{project.title}</CardTitle>
                <Badge className="w-fit">{project.badge}</Badge>
              </CardHeader>

              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
