const certs = [
  {
    title: "Oracle Certified",
    issuer: "Oracle Corporation",
    year: "2024",
    description:
      "Certification officielle Oracle validant les compétences en bases de données et développement SQL.",
    file: "/certifications/Oracle_Certificate.pdf",
    accent: "from-accent/30 to-accent/5",
  },
  {
    title: "Attestation de Licence",
    issuer: "École Supérieure Polytechnique — UCAD",
    year: "2023",
    description:
      "Licence en Informatique — option Génie Logiciel. Diplôme officiel délivré par l'UCAD.",
    file: "/certifications/Attestation_Licence.pdf",
    accent: "from-primary/30 to-primary/5",
  },
  {
    title: "Attestation de Stage",
    issuer: "UMMISCO — IRD",
    year: "2024",
    description:
      "Stage en deep learning : modélisation acoustique passive pour la détection des sons de poissons.",
    file: "/certifications/Attestation_Stage.pdf",
    accent: "from-accent/25 to-primary/10",
  },
  {
    title: "Attestation de Stage",
    issuer: "Stage professionnel",
    year: "2024",
    description:
      "Attestation officielle de stage validant l'expérience professionnelle de Mame Fatou Wade.",
    file: "/certifications/Attestation_de_stage_Mame_Fatou.pdf",
    accent: "from-primary/25 to-accent/10",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="relative py-24 lg:py-32">
      <div className="mx-auto w-full max-w-none px-6 lg:px-16 xl:px-24">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Diplômes & certifications</p>
            <h2 className="mt-4 font-display text-4xl text-primary lg:text-5xl text-balance">
              Preuves, pas promesses.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Chaque document ci-dessous est téléchargeable — diplômes, attestations de stage
              et certifications officielles.
            </p>
          </div>
          <a
            href="/CV_Mame_Fatou_Wade.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card px-6 py-3 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
            </svg>
            CV complet (PDF)
          </a>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certs.map((c) => (
            <a
              key={c.title}
              href={c.file}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-deep"
            >
              <div
                className={`absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br ${c.accent} blur-2xl opacity-60 transition-opacity group-hover:opacity-100`}
              />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-soft">
                    <svg
                      className="h-7 w-7"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <span className="font-display text-3xl text-accent">{c.year}</span>
                </div>

                <h3 className="mt-6 font-display text-2xl text-primary">{c.title}</h3>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {c.issuer}
                </p>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {c.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
                  <span>Consulter le document</span>
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
