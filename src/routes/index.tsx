import { createFileRoute } from "@tanstack/react-router";

import { AboutMe } from "@/components/AboutMe";
import { Certifications } from "@/components/Certifications";
import { Connect } from "@/components/Connect";
import { Coursework } from "@/components/Coursework";
import { Experiences } from "@/components/Experiences";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Kelly Cao | Engineering Portfolio" },
      {
        name: "description",
        content:
          "Biomedical Engineer (BS/MS) specializing in full-lifecycle product development, quality systems, and regulatory compliance. View my latest work and resume.",
      },
      { property: "og:title", content: "Kelly Cao | Engineering Portfolio" },
      {
        property: "og:description",
        content:
          "Biomedical Engineer (BS/MS) specializing in full-lifecycle product development, quality systems, and regulatory compliance. View my latest work and resume.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://kelly-cao-folio.lovable.app/" },
      {
        property: "og:image",
        content: "https://kelly-cao-folio.lovable.app/thumbnail-portfolio.png",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Kelly Cao | Engineering Portfolio",
      },
      {
        name: "twitter:description",
        content:
          "Biomedical Engineer (BS/MS) specializing in full-lifecycle product development, quality systems, and regulatory compliance. View my latest work and resume.",
      },
      {
        name: "twitter:image",
        content: "https://kelly-cao-folio.lovable.app/thumbnail-portfolio.png",
      },
    ],
    links: [{ rel: "canonical", href: "https://kelly-cao-folio.lovable.app/" }],
  }),
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutMe />
        <Experiences />
        <Projects />
        <Skills />
        <Certifications />
        <Coursework />
        <Connect />
      </main>
    </>
  );
}
