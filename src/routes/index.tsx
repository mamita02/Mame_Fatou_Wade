import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Mame Fatou Wade — Ingénieure IA & Développeuse Web" },
      {
        name: "description",
        content:
          "Portfolio de Mame Fatou Wade, ingénieure en Intelligence Artificielle & Big Data et développeuse full-stack basée à Dakar. Réalisations e-commerce, CRM et plateformes IA.",
      },
      { property: "og:title", content: "Mame Fatou Wade — Portfolio" },
      {
        property: "og:description",
        content:
          "Ingénieure IA & développeuse full-stack. Découvrez mes projets : Tima Love, PCNet Univers, MCE Pro CRM, Fly Valet, Marimika, Afroduct.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Work />
      <Experience />
      <Contact />
    </main>
  );
}
