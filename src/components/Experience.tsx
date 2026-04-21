const items = [
  {
    period: "2025 – 2026",
    role: "Développeuse IA / Web",
    company: "MCE Sénégal",
    description:
      "Développement de sites web, chatbots et automatisations CRM. Construction d'un ERP reliant Odoo à une plateforme e-commerce via Python.",
  },
  {
    period: "2025 – 2026",
    role: "Co-fondatrice & Dev IA/Web",
    company: "Projet Saytu — Assemblée Nationale du Sénégal",
    description:
      "Observatoire numérique des finances publiques avec connexion SIGFIP/ASTER, IA embarquée pour la détection d'anomalies. 38 ministères, 14 régions, 6 842 Mds FCFA.",
  },
  {
    period: "2025",
    role: "Développeuse — Govathon",
    company: "Projet Emergia VR",
    description:
      "Plateforme de formation en réalité virtuelle pour les premiers intervenants en médecine d'urgence. Prototype + pitch devant jury institutionnel.",
  },
  {
    period: "2024 – 2025",
    role: "Stagiaire IA & Big Data",
    company: "UMMISCO – IRD",
    description:
      "Modèle de détection et classification des sons de poissons en milieu acoustique passif (deep learning).",
  },
  {
    period: "2023 – 2024",
    role: "Développeuse Web & Mobile",
    company: "Kwingo Group",
    description:
      "Développement d'applications web et mobiles en Flutter et JavaScript, gestion des bases de données SQL.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative bg-primary py-24 text-primary-foreground lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Parcours</p>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl text-balance">
            Cinq années à construire des produits qui comptent.
          </h2>
        </div>

        <ol className="mt-16 space-y-px border-t border-primary-foreground/15">
          {items.map((it) => (
            <li
              key={it.role + it.period}
              className="group grid gap-4 border-b border-primary-foreground/15 py-8 transition-colors hover:bg-primary-foreground/5 lg:grid-cols-12 lg:gap-8 lg:py-10"
            >
              <div className="lg:col-span-2">
                <p className="font-display text-xl text-accent">{it.period}</p>
              </div>
              <div className="lg:col-span-4">
                <p className="font-display text-2xl">{it.role}</p>
                <p className="mt-1 text-sm uppercase tracking-widest text-primary-foreground/60">
                  {it.company}
                </p>
              </div>
              <p className="text-primary-foreground/80 lg:col-span-6">{it.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
