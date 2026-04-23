import charLeft from "@/assets/char-3d-left.png";
import charFront from "@/assets/char-3d-front.png";
import charRight from "@/assets/char-3d-right.png";

const personas = [
  {
    name: "Architecte",
    title: "L'esprit produit",
    description:
      "Pose les fondations — UX, base de données, architecture. Chaque ligne de code pensée pour durer.",
    image: charLeft,
    alt: "Personnage 3D d'une jeune femme voilée, posture d'architecte produit",
  },
  {
    name: "Stratège IA",
    title: "Le cerveau data",
    description:
      "Modèles ML, pipelines Big Data, détection d'anomalies. L'intelligence au service du métier.",
    image: charFront,
    alt: "Personnage 3D d'une jeune femme voilée tenant une sphère IA holographique",
  },
  {
    name: "Développeuse",
    title: "Les mains sur le code",
    description:
      "React, FastAPI, Cloud. Je transforme la stratégie en plateformes vivantes et performantes.",
    image: charRight,
    alt: "Personnage 3D d'une jeune femme voilée codant sur un ordinateur portable",
  },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-cream pt-32 pb-20 lg:pt-40 lg:pb-28"
    >
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Disponible pour collaborations
            </span>

            <h1 className="mt-6 font-display text-5xl leading-[0.95] text-balance text-primary sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
              Trois facettes,
              <span className="block italic text-accent">un seul produit numérique.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg text-muted-foreground">
              Ingénieure en Intelligence Artificielle & Big Data, développeuse web full-stack.
              Je transforme des idées en plateformes élégantes, performantes et intelligentes —
              du modèle ML jusqu'à l'interface finale.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:shadow-deep hover:-translate-y-0.5"
              >
                Voir mes réalisations
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
              <a
                href="/CV_Mame_Fatou_Wade.pdf"
                download
                className="group inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/60 px-6 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                </svg>
                Télécharger CV
              </a>
            </div>

            <dl className="grid grid-cols-3 gap-4 border-t border-border pt-6">
              <div>
                <dt className="text-[10px] uppercase tracking-widest text-muted-foreground">Sites livrés</dt>
                <dd className="mt-1 font-display text-2xl text-primary">6+</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-widest text-muted-foreground">Années code</dt>
                <dd className="mt-1 font-display text-2xl text-primary">5</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-widest text-muted-foreground">Stack IA</dt>
                <dd className="mt-1 font-display text-2xl text-primary">∞</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* 3D Persona cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {personas.map((p, i) => (
            <article
              key={p.name}
              className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-border/60 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-deep"
              style={{
                background:
                  "linear-gradient(180deg, color-mix(in oklab, var(--accent) 18%, var(--card)) 0%, color-mix(in oklab, var(--accent) 55%, var(--card)) 100%)",
                animation: `fade-in 0.7s ease-out ${i * 0.15}s backwards`,
              }}
            >
              {/* Top label */}
              <div className="px-7 pt-7 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent-foreground/90">
                  {p.name}
                </p>
                <h2 className="mt-3 font-display text-2xl leading-tight text-primary lg:text-[1.65rem]">
                  {p.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-primary/75">
                  {p.description}
                </p>
              </div>

              {/* 3D Character */}
              <div className="relative mt-2 flex flex-1 items-end justify-center overflow-hidden">
                {/* Soft halo behind character */}
                <div className="absolute bottom-12 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-white/15 blur-2xl" />
                <img
                  src={p.image}
                  alt={p.alt}
                  width={768}
                  height={1024}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="relative z-10 h-[22rem] w-auto object-contain transition-transform duration-700 group-hover:scale-[1.04] group-hover:-translate-y-2 drop-shadow-[0_30px_30px_rgba(60,30,15,0.35)]"
                />
              </div>

              {/* Bottom action chips */}
              <div className="relative z-10 flex items-center justify-between px-6 pb-6">
                <button
                  type="button"
                  aria-label="Favori"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/25 text-primary backdrop-blur-sm transition-colors hover:bg-white/40"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.539-1.118l1.519-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </button>
                <a
                  href={i === 2 ? "#work" : i === 1 ? "#flagship" : "#about"}
                  aria-label={`En savoir plus — ${p.title}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/25 text-primary backdrop-blur-sm transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
