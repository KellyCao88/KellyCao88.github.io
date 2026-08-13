import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    headline: "Design and Prototyping",
    skills: [
      "SolidWorks",
      "Fusion 360",
      "FEA",
      "CFD Simulation",
      "3D Modeling and Visualization",
      "GD&T",
      "Reverse Engineering",
    ],
  },
  {
    headline: "Quality and Regulatory Compliance",
    skills: [
      "Statistical Quality Controls",
      "DMAIC Framework",
      "Quality Compliance",
      "ISO 13485",
    ],
  },
  {
    headline: "Programming and Data Analysis",
    skills: [
      "Python",
      "MATLAB",
      "SQL",
      "C++",
      "Google Docs/Sheets",
      "Microsoft Word/Excel/Teams",
      "Slack",
      "Adobe InDesign",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Skills
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <Card
              key={category.headline}
              className="rounded-lg border border-border bg-card shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {category.headline}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="rounded-full px-3 py-1 text-sm font-medium"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
