import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Graduate Data Science Researcher",
    company: "Tha Data Mine",
    dates: "Aug 2025 - Dec 2025",
    bullets: [
      "Programmed an automated dashboard for stakeholders using Python and PowerBi to track performance metrics.",
      "Collaborated with the Innovative Medicine Hematology team to identify and visualize performance trends.",
    ],
  },
  {
    title: "Reef-Safe Personal Care Product Intern",
    company: "Magwai",
    dates: "May 2025 - Sep 2025",
    bullets: [
      "Conducted comprehensive market reviews to understand current trends and research areas for marine safe products.",
      "Collaborated with a product team on reef-safe formulations and evaluated sustainable toll manufacturers and packaging suppliers.",
    ],
  },
  {
    title: "Entry BioCAD Tech",
    company: "3D Systems",
    dates: "May 2023 - August 2023",
    bullets: [
      "Designed patient-specific orthognathic splints for oral maxillofacial surgical procedures.",
      "Developed detailed case reports by incorporating images of orthognathic splints with relevant anatomy and surgeon preferred images.",
    ],
  },
];

export function Experiences() {
  return (
    <section id="experiences" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Experiences
        </h2>

        <div className="relative mt-12">
          {/* Vertical timeline track */}
          <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-border lg:left-[15px]" />

          <ul className="relative space-y-10">
            {experiences.map((experience) => (
              <li key={experience.title} className="relative pl-10 lg:pl-14">
                {/* Blue dot / icon */}
                <div className="absolute left-0 top-1 grid h-6 w-6 place-items-center rounded-full bg-primary shadow-sm lg:h-8 lg:w-8">
                  <Briefcase className="h-3 w-3 text-primary-foreground lg:h-4 lg:w-4" />
                </div>

                {/* Content */}
                <div className="rounded-lg border border-border bg-card p-5 shadow-sm">
                  <h3 className="text-lg font-bold text-foreground">
                    {experience.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {experience.company} | {experience.dates}
                  </p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-base leading-relaxed text-muted-foreground">
                    {experience.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
