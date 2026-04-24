export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-cream py-24 lg:py-32">
      <div className="absolute -bottom-40 right-0 h-[30rem] w-[30rem] rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-none gap-12 px-6 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-7">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Contact</p>
          <h2 className="mt-4 font-display text-5xl text-primary lg:text-7xl text-balance">
            Discutons de votre prochain projet.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Une idée, un MVP, un site à refondre, un modèle IA à intégrer ?
            J'aime les projets ambitieux et les équipes qui les portent.
          </p>
        </div>

        <div className="lg:col-span-5 space-y-4">
          <a
            href="mailto:mamefatouwade@esp.sn"
            className="group flex items-center justify-between rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-soft hover:-translate-y-0.5"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Email</p>
              <p className="mt-1 font-display text-xl text-primary">mamefatouwade@esp.sn</p>
            </div>
            <span className="text-2xl text-accent transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="tel:+221782950135"
            className="group flex items-center justify-between rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-soft hover:-translate-y-0.5"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Téléphone</p>
              <p className="mt-1 font-display text-xl text-primary">+221 78 295 01 35</p>
            </div>
            <span className="text-2xl text-accent transition-transform group-hover:translate-x-1">→</span>
          </a>
          <div className="flex items-center justify-between rounded-2xl border border-border bg-card p-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Localisation</p>
              <p className="mt-1 font-display text-xl text-primary">Keur Massar · Dakar</p>
            </div>
            <span className="text-2xl text-accent">●</span>
          </div>
        </div>
      </div>

      <footer className="relative mx-auto mt-24 w-full max-w-none border-t border-border px-6 pt-12 pb-8 lg:px-12">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex items-start gap-4">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-display text-sm tracking-wider shadow-soft">
              MFW
            </span>
            <div>
              <p className="font-display text-xl text-primary">
                Mame Fatou <span className="text-accent">Wade</span>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Ingénieure IA & Développeuse full-stack
              </p>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-accent">Navigation</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-primary transition-colors">À propos</a></li>
                <li><a href="#work" className="hover:text-primary transition-colors">Réalisations</a></li>
                <li><a href="#flagship" className="hover:text-primary transition-colors">Projets phares</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-accent">Plus</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li><a href="#experience" className="hover:text-primary transition-colors">Parcours</a></li>
                <li><a href="#media" className="hover:text-primary transition-colors">Studio</a></li>
                <li><a href="#certifications" className="hover:text-primary transition-colors">Diplômes</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-accent">Contact</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li><a href="mailto:mamefatouwade@esp.sn" className="hover:text-primary transition-colors">mamefatouwade@esp.sn</a></li>
                <li><a href="tel:+221782950135" className="hover:text-primary transition-colors">+221 78 295 01 35</a></li>
                <li>Keur Massar · Dakar</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Mame Fatou Wade — Tous droits réservés.</p>
          <p className="font-display italic">Crafted with care in Dakar.</p>
        </div>
      </footer>
    </section>
  );
}
