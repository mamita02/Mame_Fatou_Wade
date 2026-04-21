import soutenance from "@/assets/mfw-soutenance.jpg";

const items = [
  {
    year: "2025",
    period: "En cours",
    role: "Développeuse IA / Web",
    company: "MCE Sénégal",
    tag: "Full-stack · CRM",
    description:
      "Développement de sites web, chatbots et automatisations CRM. Construction d'un ERP reliant Odoo à une plateforme e-commerce via Python.",
    stack: ["Python", "Odoo", "React", "n8n"],
  },
  {
    year: "2025",
    period: "Projet en cours",
    role: "Co-fondatrice & Dev IA/Web",
    company: "Saytu — Assemblée Nationale du Sénégal",
    tag: "Civic Tech · IA",
    description:
      "Observatoire numérique des finances publiques avec connexion SIGFIP/ASTER, IA embarquée pour la détection d'anomalies. 38 ministères, 14 régions, 6 842 Mds FCFA.",
    stack: ["FastAPI", "PostgreSQL", "ML", "Next.js"],
  },
  {
    year: "2025",
    period: "Hackathon",
    role: "Développeuse — Govathon",
    company: "Projet Emergia VR",
    tag: "VR · Formation",
    description:
      "Plateforme de formation en réalité virtuelle pour les premiers intervenants en médecine d'urgence. Prototype + pitch devant jury institutionnel.",
    stack: ["Unity", "C#", "Figma"],
  },
  {
    year: "2024",
    period: "Stage recherche",
    role: "Stagiaire IA & Big Data",
    company: "UMMISCO – IRD",
    tag: "Deep Learning",
    description:
      "Modèle de détection et classification des sons de poissons en milieu acoustique passif (deep learning).",
    stack: ["TensorFlow", "Librosa", "Python"],
  },
  {
    year: "2023",
    period: "Alternance",
    role: "Développeuse Web & Mobile",
    company: "Kwingo Group",
    tag: "Mobile · Web",
    description:
      "Développement d'applications web et mobiles en Flutter et JavaScript, gestion des bases de données SQL.",
    stack: ["Flutter", "JavaScript", "SQL"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-primary py-24 text-primary-foreground lg:py-32">
      <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute bottom-0 -left-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Parcours</p>
            <h2 className="mt-4 font-display text-4xl lg:text-5xl text-balance">
              Cinq années à construire des produits qui comptent.
            </h2>
            <p className="mt-6 text-primary-foreground/70 leading-relaxed">
              De la recherche en deep learning à la construction d'un observatoire pour
              l'Assemblée Nationale — chaque étape a forgé ma manière de concevoir des
              produits : rigoureux, utiles, et élégants.
            </p>

            <div className="mt-10 relative overflow-hidden rounded-2xl border border-primary-foreground/15">
              <img
                src={soutenance}
                alt="Mame Fatou Wade lors de sa soutenance de Master"
                className="h-64 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-xs uppercase tracking-widest text-accent">Soutenance de Master</p>
                <p className="font-display text-lg">IA & Big Data · ESP Dakar</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ol className="relative space-y-8 border-l border-primary-foreground/20 pl-8">
              {items.map((it, i) => (
                <li key={it.role} className="group relative">
                  <span className="absolute -left-[37px] top-2 flex h-4 w-4 items-center justify-center">
                    <span className="absolute h-4 w-4 rounded-full bg-accent/30 animate-ping" style={{ animationDelay: `${i * 0.3}s` }} />
                    <span className="relative h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-primary" />
                  </span>

                  <div className="rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 p-6 backdrop-blur-sm transition-all hover:border-accent/40 hover:bg-primary-foreground/10 hover:-translate-y-0.5">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <div>
                        <p className="font-display text-2xl text-primary-foreground">{it.role}</p>
                        <p className="mt-1 text-sm uppercase tracking-widest text-accent">
                          {it.company}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-display text-3xl text-accent leading-none">{it.year}</p>
                        <p className="text-[10px] uppercase tracking-widest text-primary-foreground/60 mt-1">
                          {it.period}
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-primary-foreground/80 leading-relaxed">
                      {it.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[10px] uppercase tracking-widest text-accent">
                        {it.tag}
                      </span>
                      {it.stack.map((s) => (
                        <span
                          key={s}
                          className="inline-flex items-center rounded-full border border-primary-foreground/20 px-3 py-1 text-[10px] uppercase tracking-widest text-primary-foreground/70"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
