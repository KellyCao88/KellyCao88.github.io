import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Kelly Cao | Biomedical Engineer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Kelly Cao, a Biomedical Engineer specializing in design, testing, and regulatory compliance.",
      },
      { property: "og:title", content: "Kelly Cao | Biomedical Engineer Portfolio" },
      {
        property: "og:description",
        content:
          "Portfolio of Kelly Cao, a Biomedical Engineer specializing in design, testing, and regulatory compliance.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Kelly Cao | Biomedical Engineer Portfolio",
      },
      {
        name: "twitter:description",
        content:
          "Portfolio of Kelly Cao, a Biomedical Engineer specializing in design, testing, and regulatory compliance.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
}
