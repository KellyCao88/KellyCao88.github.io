import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const msCourses = [
  {
    title: "Regulatory Approval",
    description:
      "Drafted a pre-submission presentation in a team setting and described the device and asked clarifying questions.",
  },
  {
    title: "Wearable Sensors",
    description:
      "Analyzed personal data collected from a monitoring wearable to identify trends in heart, sleep, and breathing.",
  },
  {
    title: "Quality Control",
    description:
      "Applied the DMAIC framework and statistical quality control tools to help identify item defects and suggest potential improvements.",
  },
  {
    title: "Lean Manufacturing",
    description:
      "Synthesized research on the different types of waste and manufacturing environments for lean and pharmaceutical product development.",
  },
  {
    title: "Regulatory Compliance",
    description:
      "Evaluated FDA Quality System Regulations (21 CFR Part 820) and ISO 13485 standards for maintaining quality systems compliance.",
  },
  {
    title: "Clinical Medicine",
    description:
      "Studied infectious, pulmonary, oncological, and gastrointestinal diseases using an 11-point clinical framework to understand various disease states.",
  },
  {
    title: "Preclinical and Clinical Design",
    description:
      "Explored the design of preclinical and clinical testing plans to establish safety and efficacy.",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Implemented a tiny reproduction of the ECGformer model and performed a comparative analysis with the results from a research paper on heartbeat arrhythmia classifications.",
  },
  {
    title: "Machine Learning",
    description:
      "Effectively utilized Large Language Models, like Gemini Pro and Claude, to help brainstorm and generate code for minimizing the cost function of an inverse problem and explore the optimization landscape.",
  },
  {
    title: "BioMEMs",
    description:
      "Studied the design, fabrication, properties, and applications of bio-micro-electro-mechanical systems (BioMEMS).",
  },
];

const bsPracticalCourses = [
  {
    title: "BME Capstone I/II",
    description:
      "Reviewed and modified previous design drawings and conducted iterative testing to improve production rate and output volume.",
  },
  {
    title: "Statistical Methods and Application",
    description:
      "Utilized R programming language to conduct exploratory data analysis, apply probability theory, and perform data modeling.",
  },
  {
    title: "CAD/Fab",
    description:
      "Utilized SolidWorks and fabrication techniques to design a novel prototype of glasses with integrated pill holders.",
  },
];

const bsFoundationalCourses = [
  {
    category: "Biomedical and Mechanical",
    courses: [
      "Biomaterials",
      "Biotransport",
      "Intro to Tissue Biomechanics",
      "Statics and Structures",
      "Mechanics of Solids",
      "Anatomy and Physiology for Biomedical Engineers",
      "Biology of Cancer Cell",
    ],
  },
  {
    category: "Electrical and Systems",
    courses: [
      "Intro Circuits and Electronics",
      "Circuits as Systems",
      "Electronics Design Lab",
      "Biomedical Signals and Systems",
      "Bioinstrumentation",
    ],
  },
  {
    category: "Computational and Data",
    courses: [
      "Biological Networks",
      "Computational Genomics",
      "Software Engineering for Scientists",
      "Database Systems",
      "Data Structures",
    ],
  },
  {
    category: "Engineering Practice",
    courses: ["Designing for DEI in Engineering", "Bioethics"],
  },
];

export function Coursework() {
  return (
    <section id="coursework" className="relative px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Coursework
        </h2>

        <Accordion type="multiple" className="mt-12 rounded-lg border border-border bg-card shadow-sm">
          <AccordionItem value="ms-curriculum" className="px-5">
            <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
              Master of Science Curriculum
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-4 pb-2">
                {msCourses.map((course) => (
                  <li key={course.title} className="leading-relaxed text-foreground">
                    <span className="font-semibold">{course.title}:</span>{" "}
                    <span className="text-muted-foreground">{course.description}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="bs-curriculum" className="px-5 border-b-0">
            <AccordionTrigger className="text-lg font-semibold text-foreground hover:no-underline">
              Bachelor of Science Curriculum
            </AccordionTrigger>
            <AccordionContent>
              <div className="space-y-8 pb-2">
                <div>
                  <h3 className="mb-3 text-base font-semibold text-foreground">
                    Practical Applications
                  </h3>
                  <ul className="list-disc space-y-3 pl-5 leading-relaxed">
                    {bsPracticalCourses.map((course) => (
                      <li key={course.title}>
                        <span className="font-semibold text-foreground">{course.title}:</span>{" "}
                        <span className="text-muted-foreground">{course.description}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="mb-3 text-base font-semibold text-foreground">
                    Foundational Curriculum
                  </h3>
                  <div className="space-y-4">
                    {bsFoundationalCourses.map((group) => (
                      <div key={group.category}>
                        <p className="mb-2 font-semibold text-foreground">{group.category}</p>
                        <div className="flex flex-wrap gap-2">
                          {group.courses.map((course) => (
                            <Badge
                              key={course}
                              variant="secondary"
                              className="rounded-full px-2.5 py-1 text-xs font-normal"
                            >
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
