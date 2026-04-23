import { useState } from "react";

type MediaItem = {
  id: string;
  title: string;
  platform: "TikTok" | "YouTube" | "Instagram";
  type: "Montage" | "Voix off" | "Reel";
  url: string;
  duration?: string;
  description: string;
};

// 👉 Remplace les URLs par tes vrais liens TikTok / YouTube / Instagram
const items: MediaItem[] = [
  {
    id: "v1",
    title: "Coulisses de dev — épisode 01",
    platform: "TikTok",
    type: "Montage",
    url: "https://www.tiktok.com/@mamefatouwade",
    duration: "0:45",
    description: "Une journée dans la vie d'une dev IA à Dakar.",
  },
  {
    id: "v2",
    title: "Voix off — projet Saytu",
    platform: "YouTube",
    type: "Voix off",
    url: "https://youtube.com/",
    duration: "2:10",
    description: "Narration institutionnelle pour la présentation officielle.",
  },
  {
    id: "v3",
    title: "Recette du week-end",
    platform: "TikTok",
    type: "Reel",
    url: "https://www.tiktok.com/@mamefatouwade",
    duration: "0:30",
    description: "Quand le code fait pause — cuisine sénégalaise revisitée.",
  },
  {
    id: "v4",
    title: "Démo Tima Love",
    platform: "Instagram",
    type: "Montage",
    url: "https://instagram.com/",
    duration: "1:00",
    description: "Walkthrough produit pour le lancement de la boutique.",
  },
];

const platformIcon = (p: MediaItem["platform"]) => {
  if (p === "TikTok") return "🎵";
  if (p === "YouTube") return "▶";
  return "◉";
};

export function MediaContent() {
  const [filter, setFilter] = useState<"all" | MediaItem["type"]>("all");
  const filtered = filter === "all" ? items : items.filter((i) => i.type === filter);

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
              Au-delà du code, je raconte des histoires en image et en voix —
              entre coulisses de dev, démos produit et créations personnelles.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="mt-12 flex flex-wrap gap-2">
          {(["all", "Montage", "Voix off", "Reel"] as const).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-2 text-xs uppercase tracking-widest transition-all ${
                filter === f
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border text-muted-foreground hover:border-accent/50 hover:text-foreground"
              }`}
            >
              {f === "all" ? "Tout" : f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filtered.map((item, idx) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-deep hover:border-accent/40"
            >
              {/* Vertical poster (9:16 like a reel) */}
              <div
                className="relative aspect-[9/16] w-full overflow-hidden"
                style={{
                  background: `linear-gradient(${135 + idx * 30}deg, color-mix(in oklab, var(--primary) ${60 - idx * 8}%, var(--background)), color-mix(in oklab, var(--accent) ${40 + idx * 5}%, var(--background)))`,
                }}
              >
                {/* Animated noise / gradient overlay */}
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

                {/* Top meta */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="rounded-full bg-background/90 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-widest text-foreground">
                    {platformIcon(item.platform)} {item.platform}
                  </span>
                  {item.duration && (
                    <span className="rounded-full bg-foreground/80 backdrop-blur px-2.5 py-1 text-[10px] font-mono text-background">
                      {item.duration}
                    </span>
                  )}
                </div>

                {/* Bottom type badge */}
                <div className="absolute bottom-4 left-4">
                  <span className="rounded-full bg-accent text-accent-foreground px-3 py-1 text-[10px] uppercase tracking-widest">
                    {item.type}
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
                  Voir la vidéo
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
              Plus de contenus sur mes réseaux
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              Coulisses, tutoriels et créations en continu.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href="https://www.tiktok.com/@mamefatouwade"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm transition-transform hover:-translate-y-0.5"
            >
              🎵 TikTok
            </a>
            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm transition-colors hover:border-accent/50"
            >
              ▶ YouTube
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm transition-colors hover:border-accent/50"
            >
              ◉ Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
