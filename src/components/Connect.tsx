import { ExternalLink, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";

const contactActions = [
  {
    label: "keca4089@gmail.com",
    href: "mailto:keca4089@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    label: "linkedin.com/in/kelly-cao-490a031b8",
    href: "https://www.linkedin.com/in/kelly-cao-490a031b8/",
    icon: Linkedin,
    external: true,
  },
  {
    label: "Resume",
    href: "/Resume.pdf",
    icon: ExternalLink,
    external: true,
    download: false,
  },
];

export function Connect() {
  return (
    <section
      id="contact"
      className="relative bg-slate-900 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl">
          Let&apos;s Connect
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
          Whether you are hiring for a role or simply want to connect, my inbox is always open.
        </p>

        <div className="mt-10 flex flex-col items-stretch justify-center gap-4 md:flex-row md:items-center">
          {contactActions.map((action) => {
            const Icon = action.icon;
            const isResume = action.label === "Resume";
            return (
              <Button
                key={action.label}
                variant={isResume ? "default" : "outline"}
                size="lg"
                className={
                  isResume
                    ? "h-12 gap-2 px-6 text-base font-medium shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg md:w-auto"
                    : "h-12 gap-2 border-slate-400/50 bg-transparent px-6 text-base font-medium text-slate-50 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-800 hover:text-white hover:shadow-lg md:w-auto"
                }
                asChild
              >
                <a
                  href={action.href}
                  {...(action.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  {...(action.download ? { download: true } : {})}
                >
                  <Icon className="h-5 w-5" />
                  {action.label}
                </a>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
