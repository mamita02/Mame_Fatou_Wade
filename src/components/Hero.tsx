import portrait from "@/assets/portrait-mfw.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-cream pt-32 pb-20 lg:pt-40 lg:pb-32"
    >
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-12">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Disponible pour collaborations
          </span>

          <h1 className="mt-6 font-display text-5xl leading-[0.95] text-balance text-primary sm:text-6xl lg:text-7xl xl:text-8xl">
            Je conçois des produits <em className="text-accent not-italic">numériques</em> qui ont du goût.
          </h1>

          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Ingénieure en Intelligence Artificielle & Big Data, développeuse web full-stack.
            Je transforme des idées en plateformes élégantes, performantes et intelligentes —
            du modèle ML jusqu'à l'interface finale.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:shadow-deep hover:-translate-y-0.5"
            >
              Voir mes réalisations
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="/CV_Mame_Fatou_Wade.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/60 px-7 py-3.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
              </svg>
              Télécharger mon CV
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-border pt-8 max-w-md">
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Sites livrés</dt>
              <dd className="mt-1 font-display text-3xl text-primary">6+</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Années code</dt>
              <dd className="mt-1 font-display text-3xl text-primary">5</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">Stack IA</dt>
              <dd className="mt-1 font-display text-3xl text-primary">∞</dd>
            </div>
          </dl>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-warm opacity-90 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] shadow-deep">
              <img
                src={portrait}
                alt="Portrait de Mame Fatou Wade, ingénieure IA et développeuse"
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-card/95 backdrop-blur px-5 py-4 shadow-soft border border-border">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Basée à</p>
              <p className="font-display text-lg text-primary">Dakar · Sénégal</p>
            </div>
            <div className="absolute -top-6 -right-6 rounded-2xl bg-primary text-primary-foreground px-5 py-4 shadow-soft animate-float">
              <p className="font-display text-2xl leading-none">M.Sc.</p>
              <p className="text-[10px] uppercase tracking-widest opacity-80 mt-1">IA & Big Data</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
