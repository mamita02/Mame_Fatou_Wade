type MediaItem = {
  id: string;
  title: string;
  client: string;
  url: string;
  description: string;
};

// Vraies vidéos TikTok montées avec voix off
const items: MediaItem[] = [
  {
    id: "v1",
    title: "SmartCouture",
    client: "Montage & voix off",
    url: "https://www.tiktok.com/@mamefatouwade",
    description:
      "Mise en avant de la plateforme couture intelligente — narration et montage rythmé pour valoriser l'expérience utilisateur.",
  },
  {
    id: "v2",
    title: "Emergia VR",
    client: "Montage & voix off",
    url: "https://www.tiktok.com/@mamefatouwade",
    description:
      "Immersion vidéo dans l'univers réalité virtuelle d'Emergia — voix off institutionnelle et transitions cinématiques.",
  },
  {
    id: "v3",
    title: "Safety Service Security",
    client: "Montage & voix off",
    url: "https://www.tiktok.com/@mamefatouwade",
    description:
      "Présentation corporate des services de sécurité — ton sérieux, voix off posée et identité visuelle soignée.",
  },
];

export function MediaContent() {

  return (
    <section
      id="media"
      className="relative overflow-hidden py-24 lg:py-32"
      style={{
        backgroundImage:
          "linear-gradient(180deg, var(--background) 0%, color-mix(in oklab, var(--primary) 10%, var(--background)) 100%)",
      }}
    >
      {/* Decorative film strip */}
      <div className="pointer-events-none absolute top-32 left-0 right-0 h-12 opacity-[0.04] flex gap-2">
        {Array.from({ length: 30 }).map((_, i) => (
          <div key={i} className="h-full w-12 shrink-0 bg-foreground rounded-sm" />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Studio créatif</p>
            <h2 className="mt-4 font-display text-4xl text-primary lg:text-6xl text-balance">
              Montage vidéo
              <span className="block italic text-accent">& voix off.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-muted-foreground leading-relaxed">
              Trois projets clients montés et narrés de A à Z — voix off
              posée, rythme cinématique et identité visuelle au service du message.
            </p>
          </div>
        </div>

        {/* Grid — 3 vraies vidéos TikTok */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-deep hover:border-accent/40"
            >
              {/* Vertical poster (9:16 like a TikTok) */}
              <div
                className="relative aspect-[9/16] w-full overflow-hidden"
                style={{
                  background: `linear-gradient(${135 + idx * 45}deg, color-mix(in oklab, var(--primary) ${65 - idx * 10}%, var(--background)), color-mix(in oklab, var(--accent) ${40 + idx * 8}%, var(--background)))`,
                }}
              >
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0 opacity-30 mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 20% 20%, white 0%, transparent 50%), radial-gradient(circle at 80% 80%, color-mix(in oklab, var(--accent) 60%, transparent) 0%, transparent 50%)",
                  }}
                />

                {/* Big play glyph */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 -m-4 rounded-full bg-background/30 blur-xl group-hover:bg-accent/40 transition-all" />
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-background/90 backdrop-blur shadow-deep transition-transform group-hover:scale-110">
                      <svg
                        className="h-8 w-8 translate-x-0.5 text-primary"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Top meta — TikTok */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="rounded-full bg-background/90 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-widest text-foreground">
                    🎵 TikTok
                  </span>
                </div>

                {/* Bottom badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full bg-accent text-accent-foreground px-3 py-1 text-[10px] uppercase tracking-widest">
                    {item.client}
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="flex flex-1 flex-col gap-2 p-5">
                <h3 className="font-display text-xl text-primary leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                <span className="mt-2 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                  Voir sur TikTok
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-6 lg:p-8">
          <div>
            <p className="font-display text-2xl text-primary">
              Retrouvez tous mes montages sur TikTok
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Voix off, montages clients et créations en continu.
            </p>
          </div>
          <a
            href="https://www.tiktok.com/@mamefatouwade"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm transition-transform hover:-translate-y-0.5"
          >
            🎵 @mamefatouwade
          </a>
        </div>
      </div>
    </section>
  );
}
