import { Award } from "lucide-react";

import { cn } from "@/lib/utils";

type Certification = {
  name: string;
  issued?: string;
  url?: string;
};

const certifications: Certification[] = [
  {
    name: "Regulatory Affairs and Regulatory Science for Medical Devices Graduate Certificate",
  },
  {
    name: "Six Sigma Green Belt Certificate",
    issued: "Issued April 2026",
    url: "https://certificates.iise.org/673877b7-20ff-4dbf-a5be-b0a91ae6c674#acc.oml0t9Tn",
  },
  {
    name: "Finite Element Analysis Milestone Workshop Certificate",
    issued: "Issued May 2026",
    url: "https://engineering.purdue.edu/Engr/Academics/Undergraduate/certificates/Milestones/Finite_Element_Analysis/2025/Spring/by_fgTBTeewcG8XSQCmwkw.png",
  },
  {
    name: "Geometric Dimensioning and Tolerancing Workshop Certificate",
    issued: "Issued May 2026",
    url: "https://engineering.purdue.edu/Engr/Academics/Undergraduate/certificates/Milestones/Geometric_Dimensioning_and_Tolerancing/2025/Fall/2euHwcqglDtMqKV-oYPGzA.png",
  },
  {
    name: "Reverse Engineering Milestone Workshop Certificate",
    issued: "Issued May 2026",
    url: "https://engineering.purdue.edu/Engr/Academics/Undergraduate/certificates/Milestones/Reverse_Engineering/2025/Fall/jEIKNCVvBDHivGgBLZv5tw.png",
  },
  {
    name: "Completion Certificate - Job Interview in the AI-Era",
    issued: "Issued June 2026",
    url: "https://purdue.brightspace.com/d2l/awards/assertions/605741/view",
  },
  {
    name: "EBEC: Entry-Level Programming in Python",
    issued: "Issued July 2026",
    url: "https://engineering.purdue.edu/Engr/Academics/Undergraduate/certificates/Milestones/EBEC_Entry-Level_Programming_in_Python/2026/Spring/ngb24Jk0-qN1NjFPOlAqGA.png",
  },
  {
    name: "Google AI Essentials Certificate",
    issued: "Issued August 2024",
    url: "https://www.coursera.org/account/accomplishments/verify/P7CVABVA1EMN",
  },
];

const cardClasses =
  "flex items-start gap-4 rounded-lg border border-border bg-card p-5 text-card-foreground shadow-sm";

export function Certifications() {
  return (
    <section id="certifications" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Certifications
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification) => {
            const content = (
              <>
                <div className="flex-shrink-0 rounded-full bg-primary/10 p-2.5">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="text-base font-medium leading-snug text-foreground">
                    {certification.name}
                  </div>
                  {certification.issued && (
                    <div className="mt-1 text-sm text-muted-foreground">
                      {certification.issued}
                    </div>
                  )}
                </div>
              </>
            );

            if (!certification.url) {
              return (
                <div key={certification.name} className={cardClasses}>
                  {content}
                </div>
              );
            }

            return (
              <a
                key={certification.name}
                href={certification.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Verify ${certification.name}`}
                className={cn(
                  cardClasses,
                  "cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                )}
              >
                {content}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
