import { Award } from "lucide-react";

import { Card, CardContent, CardTitle } from "@/components/ui/card";

const certifications = [
  "Regulatory Affairs and Regulatory Science for Medical Devices Graduate Certificate",
  "Six Sigma Green Belt Certificate",
  "Finite Element Analysis Milestone Workshop Certificate",
  "Geometric Dimensioning and Tolerancing Workshop Certificate",
  "Reverse Engineering Milestone Workshop Certificate",
  "Google AI Essentials Certificate",
];

export function Certifications() {
  return (
    <section id="certifications" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Certifications
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification) => (
            <Card
              key={certification}
              className="flex items-start gap-4 rounded-lg border border-border bg-card p-5 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <div className="flex-shrink-0 rounded-full bg-primary/10 p-2.5">
                <Award className="h-5 w-5 text-primary" />
              </div>

              <CardContent className="flex-1 p-0">
                <CardTitle className="text-base font-medium leading-snug text-foreground">
                  {certification}
                </CardTitle>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
