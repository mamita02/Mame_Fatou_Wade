import { useEffect, useRef, useState } from "react";
import logoAssemblee from "@/assets/logo-assemblee.png";
import logoGovathon from "@/assets/logo-govathon.png";

type Project = {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  year: string;
  tag: string;
  description: string;
  metrics: { label: string; value: string }[];
  stack: string[];
  logo: string;
  accent: string; // CSS color for unique vibe
};

const projects: Project[] = [
  {
    id: "saytu",
    title: "Saytu",
    subtitle: "Observatoire numérique des finances publiques",
    client: "Assemblée Nationale du Sénégal",
    year: "2025",
    tag: "Civic Tech · IA",
    description:
      "Plateforme institutionnelle reliant SIGFIP & ASTER pour offrir aux députés une lecture en temps réel du budget de l'État. Modèles d'IA pour la détection d'anomalies, visualisations dynamiques et tableaux de bord ministère par ministère.",
    metrics: [
      { label: "Ministères", value: "38" },
      { label: "Budget suivi", value: "6 842 Mds FCFA" },
      { label: "Sources liées", value: "SIGFIP · ASTER" },
    ],
    stack: ["FastAPI", "PostgreSQL", "React", "ML", "D3.js"],
    logo: logoAssemblee,
    accent: "oklch(0.45 0.15 145)", // green
  },
  {
    id: "emergia",
    title: "Emergia VR",
    subtitle: "Formation immersive en médecine d'urgence",
    client: "Govathon — Innovation Citoyenne",
    year: "2025",
    tag: "VR · Formation",
    description:
      "Simulateur en réalité virtuelle pour entraîner les premiers intervenants aux gestes qui sauvent. Conçu en hackathon avec un pitch institutionnel, prototype Unity et parcours pédagogique scénarisé.",
    metrics: [
      { label: "Format", value: "VR Unity" },
      { label: "Cible", value: "Premiers intervenants" },
      { label: "Étape", value: "Prototype + pitch" },
    ],
    stack: ["Unity", "C#", "Blender", "Figma"],
    logo: logoGovathon,
    accent: "oklch(0.65 0.18 50)", // amber
  },
];

export function FlagshipProjects() {
  const [active, setActive] = useState(0);
  const sceneRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // 3D tilt — track mouse over the whole scene
  useEffect(() => {
    const el = sceneRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      setTilt({ x, y });
    };
    const onLeave = () => setTilt({ x: 0, y: 0 });
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  // Auto-rotate
  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % projects.length), 9000);
    return () => clearInterval(id);
  }, []);

  const current = projects[active];

  return (
    <section
      id="flagship"
      className="relative overflow-hidden py-24 lg:py-32"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at top, color-mix(in oklab, var(--primary) 22%, var(--background)) 0%, var(--background) 60%), linear-gradient(180deg, var(--background), color-mix(in oklab, var(--primary) 8%, var(--background)))",
      }}
    >
      {/* Animated grid backdrop */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Floating orbs */}
      <div
        className="pointer-events-none absolute -top-32 right-[15%] h-80 w-80 rounded-full blur-3xl"
        style={{ backgroundColor: `color-mix(in oklab, ${current.accent} 30%, transparent)` }}
      />

      <div className="relative mx-auto w-full max-w-none px-6 lg:px-12">
        {/* Header */}
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Projets phares</p>
            <h2 className="mt-4 font-display text-4xl text-primary lg:text-6xl text-balance">
              Deux missions
              <span className="block italic text-accent">qui ont marqué un tournant.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-muted-foreground leading-relaxed">
              Des produits livrés à des institutions publiques, où la technique
              rencontre l'impact citoyen — chacun avec sa propre signature visuelle.
            </p>
          </div>
        </div>

        {/* 3D Stage */}
        <div
          ref={sceneRef}
          className="relative mt-16 lg:mt-20"
          style={{ perspective: "1800px" }}
        >
          <div
            className="grid gap-10 lg:grid-cols-12 lg:gap-16 transition-transform duration-300 ease-out"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateY(${tilt.x * 6}deg) rotateX(${-tilt.y * 4}deg)`,
            }}
          >
            {/* LEFT — 3D logo stage */}
            <div className="lg:col-span-5">
              <div
                className="relative aspect-square w-full"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Base platform — chocolate disc with rings */}
                <div
                  className="absolute inset-x-8 bottom-8 h-12 rounded-[50%]"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, color-mix(in oklab, var(--primary) 40%, transparent) 0%, transparent 70%)",
                    transform: "translateZ(-80px) rotateX(70deg)",
                    filter: "blur(8px)",
                  }}
                />

                {/* Concentric rings — orbiting */}
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="absolute inset-0 rounded-full border"
                    style={{
                      borderColor: `color-mix(in oklab, ${current.accent} ${30 - i * 8}%, transparent)`,
                      transform: `translateZ(${-40 - i * 20}px) rotateX(${65 + i * 5}deg) scale(${1 + i * 0.15})`,
                      animation: `float-slow ${10 + i * 2}s ease-in-out infinite`,
                    }}
                  />
                ))}

                {/* Floating accent shards */}
                <div
                  className="absolute top-[18%] left-[12%] h-16 w-16 rounded-2xl border border-accent/40 backdrop-blur-sm"
                  style={{
                    backgroundColor: "color-mix(in oklab, var(--accent) 12%, transparent)",
                    transform: "translateZ(120px) rotateZ(15deg)",
                    animation: "float-slow 7s ease-in-out infinite",
                  }}
                />
                <div
                  className="absolute bottom-[22%] right-[10%] h-20 w-20 rounded-full"
                  style={{
                    background: `linear-gradient(135deg, ${current.accent}, color-mix(in oklab, ${current.accent} 30%, var(--background)))`,
                    transform: "translateZ(140px)",
                    boxShadow: `0 30px 60px -10px color-mix(in oklab, ${current.accent} 50%, transparent)`,
                    animation: "float-slow 9s ease-in-out infinite",
                  }}
                />
                <div
                  className="absolute top-[10%] right-[20%] h-10 w-10 rounded-lg border-2 border-primary/30"
                  style={{
                    transform: "translateZ(90px) rotateZ(-20deg)",
                    animation: "float-slow 11s ease-in-out infinite",
                  }}
                />

                {/* Central glass card holding the logo */}
                <div
                  className="absolute inset-[18%] rounded-[2rem] border border-border/80 backdrop-blur-md flex items-center justify-center overflow-hidden"
                  style={{
                    backgroundColor: "color-mix(in oklab, var(--card) 85%, transparent)",
                    transform: "translateZ(60px)",
                    boxShadow: `0 40px 80px -20px color-mix(in oklab, var(--primary) 40%, transparent), inset 0 1px 0 0 color-mix(in oklab, white 30%, transparent)`,
                  }}
                >
                  {/* Logo crossfade */}
                  {projects.map((p, i) => (
                    <img
                      key={p.id}
                      src={p.logo}
                      alt={`Logo ${p.title}`}
                      className={`absolute inset-0 m-auto h-3/4 w-3/4 object-contain p-6 transition-all duration-1000 ${
                        i === active ? "opacity-100 scale-100" : "opacity-0 scale-90"
                      }`}
                    />
                  ))}

                  {/* Soft sheen */}
                  <div
                    className="pointer-events-none absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(135deg, color-mix(in oklab, white 25%, transparent) 0%, transparent 40%, transparent 60%, color-mix(in oklab, var(--primary) 12%, transparent) 100%)",
                    }}
                  />
                </div>

                {/* Year badge */}
                <div
                  className="absolute -top-2 -left-2 rounded-2xl bg-primary text-primary-foreground px-4 py-3 shadow-deep"
                  style={{ transform: "translateZ(160px)" }}
                >
                  <p className="font-display text-3xl leading-none">{current.year}</p>
                  <p className="text-[9px] uppercase tracking-widest opacity-80 mt-1">
                    Livré
                  </p>
                </div>

                {/* Tag chip */}
                <div
                  className="absolute -bottom-2 right-0 rounded-full border border-border bg-card px-4 py-2 shadow-soft"
                  style={{ transform: "translateZ(140px)" }}
                >
                  <p className="text-[10px] uppercase tracking-widest text-foreground">
                    <span style={{ color: current.accent }}>●</span> {current.tag}
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT — content panel */}
            <div className="lg:col-span-7" style={{ transformStyle: "preserve-3d" }}>
              <div
                className="relative rounded-3xl border border-border bg-card/70 backdrop-blur-sm p-8 lg:p-10 shadow-soft"
                style={{ transform: "translateZ(40px)" }}
                key={current.id}
              >
                <div className="animate-fade-in">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    {current.client}
                  </p>
                  <h3 className="mt-3 font-display text-4xl text-primary lg:text-5xl">
                    {current.title}
                  </h3>
                  <p className="mt-2 font-display text-xl italic" style={{ color: current.accent }}>
                    {current.subtitle}
                  </p>

                  <p className="mt-6 text-muted-foreground leading-relaxed">
                    {current.description}
                  </p>

                  {/* Metrics */}
                  <div className="mt-8 grid grid-cols-3 gap-3">
                    {current.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-2xl border border-border bg-background/60 px-4 py-4"
                      >
                        <p className="font-display text-xl text-primary leading-tight">
                          {m.value}
                        </p>
                        <p className="mt-1 text-[10px] uppercase tracking-widest text-muted-foreground">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Stack */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {current.stack.map((s) => (
                      <span
                        key={s}
                        className="inline-flex items-center rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-[10px] uppercase tracking-widest text-accent"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project switcher */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                {projects.map((p, i) => {
                  const isActive = i === active;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setActive(i)}
                      onMouseEnter={() => setActive(i)}
                      className={`group relative overflow-hidden rounded-2xl border p-4 text-left transition-all ${
                        isActive
                          ? "border-accent/60 bg-card shadow-soft"
                          : "border-border bg-card/40 hover:border-accent/30"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-background border border-border overflow-hidden"
                        >
                          <img src={p.logo} alt="" className="h-7 w-7 object-contain" />
                        </span>
                        <div className="min-w-0">
                          <p className="font-display text-lg text-primary leading-tight truncate">
                            {p.title}
                          </p>
                          <p className="text-[10px] uppercase tracking-widest text-muted-foreground truncate">
                            {p.client}
                          </p>
                        </div>
                      </div>
                      <span
                        className="absolute bottom-0 left-0 h-0.5 transition-all duration-500"
                        style={{
                          width: isActive ? "100%" : "0%",
                          backgroundColor: p.accent,
                        }}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
