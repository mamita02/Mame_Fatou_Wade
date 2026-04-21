import { useEffect, useRef, useState } from "react";
import portrait from "@/assets/portrait-mfw.jpg";

const items = [
  {
    year: "2025",
    period: "En cours",
    role: "Développeuse IA / Web",
    company: "MCE Sénégal",
    tag: "Full-stack · CRM",
    description:
      "Sites web, chatbots et automatisations CRM. Construction d'un ERP reliant Odoo à une plateforme e-commerce via Python.",
    stack: ["Python", "Odoo", "React", "n8n"],
  },
  {
    year: "2025",
    period: "Projet phare",
    role: "Co-fondatrice & Dev IA/Web",
    company: "Saytu — Assemblée Nationale",
    tag: "Civic Tech · IA",
    description:
      "Observatoire numérique des finances publiques avec connexion SIGFIP/ASTER et IA pour la détection d'anomalies. 38 ministères, 6 842 Mds FCFA.",
    stack: ["FastAPI", "PostgreSQL", "ML"],
  },
  {
    year: "2025",
    period: "Hackathon",
    role: "Développeuse — Govathon",
    company: "Projet Emergia VR",
    tag: "VR · Formation",
    description:
      "Plateforme de formation en réalité virtuelle pour les premiers intervenants en médecine d'urgence. Prototype + pitch institutionnel.",
    stack: ["Unity", "C#", "Figma"],
  },
  {
    year: "2024",
    period: "Stage recherche",
    role: "Stagiaire IA & Big Data",
    company: "UMMISCO – IRD",
    tag: "Deep Learning",
    description:
      "Modèle de détection et classification des sons de poissons en milieu acoustique passif via deep learning.",
    stack: ["TensorFlow", "Librosa", "Python"],
  },
  {
    year: "2023",
    period: "Alternance",
    role: "Développeuse Web & Mobile",
    company: "Kwingo Group",
    tag: "Mobile · Web",
    description:
      "Applications web et mobiles en Flutter et JavaScript, conception et gestion des bases de données SQL.",
    stack: ["Flutter", "JavaScript", "SQL"],
  },
];

export function Experience() {
  const [active, setActive] = useState(0);
  const tilt = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [parallax, setParallax] = useState(0);

  // 3D tilt on portrait card
  useEffect(() => {
    const el = tilt.current;
    if (!el) return;
    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(1200px) rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateZ(0)`;
    };
    const reset = () => {
      el.style.transform = "perspective(1200px) rotateY(0) rotateX(0)";
    };
    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", reset);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, []);

  // Parallax background orbs
  useEffect(() => {
    const onScroll = () => {
      const sec = sectionRef.current;
      if (!sec) return;
      const rect = sec.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight));
      setParallax(progress);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative overflow-hidden bg-background py-24 lg:py-32"
    >
      {/* Decorative parallax orbs (subtle, not heavy brown) */}
      <div
        className="pointer-events-none absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-3xl"
        style={{ transform: `translateY(${parallax * -60}px)` }}
      />
      <div
        className="pointer-events-none absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-3xl"
        style={{ transform: `translateY(${parallax * 80}px)` }}
      />

      {/* Floating geometric shapes */}
      <div
        className="pointer-events-none absolute top-20 right-[10%] h-24 w-24 rounded-3xl border border-accent/30 rotate-12"
        style={{ transform: `translateY(${parallax * -120}px) rotate(${12 + parallax * 30}deg)` }}
      />
      <div
        className="pointer-events-none absolute bottom-32 left-[8%] h-16 w-16 rounded-full border-2 border-primary/20"
        style={{ transform: `translateY(${parallax * -80}px)` }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        {/* Header */}
        <div className="grid gap-6 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Parcours</p>
            <h2 className="mt-4 font-display text-4xl text-primary lg:text-6xl text-balance">
              Cinq années à construire des produits
              <span className="block italic text-accent">qui comptent vraiment.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-muted-foreground leading-relaxed">
              Survolez la chronologie pour explorer chaque chapitre — de la recherche en deep
              learning à un observatoire pour l'État.
            </p>
          </div>
        </div>

        {/* Main grid: portrait card + interactive timeline */}
        <div className="mt-20 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* LEFT — 3D tilt portrait card */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div
                ref={tilt}
                className="group relative transition-transform duration-300 ease-out will-change-transform"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Glow layers behind portrait */}
                <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-warm opacity-30 blur-3xl" />
                <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-accent/40 via-transparent to-primary/30 blur-xl" />

                {/* Portrait frame */}
                <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-deep">
                  <img
                    src={portrait}
                    alt="Portrait de Mame Fatou Wade"
                    width={800}
                    height={1000}
                    loading="lazy"
                    className="h-[520px] w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />

                  {/* Floating year badge — 3D layer */}
                  <div
                    className="absolute top-6 left-6 rounded-2xl bg-card/95 backdrop-blur px-4 py-3 shadow-soft border border-border"
                    style={{ transform: "translateZ(50px)" }}
                  >
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      Étape actuelle
                    </p>
                    <p className="font-display text-2xl text-primary leading-none mt-1">
                      {items[active].year}
                    </p>
                  </div>

                  {/* Bottom info — animated by active item */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-6"
                    style={{ transform: "translateZ(30px)" }}
                  >
                    <div key={active} className="animate-fade-in">
                      <p className="text-xs uppercase tracking-widest text-accent">
                        {items[active].period}
                      </p>
                      <p className="mt-1 font-display text-2xl text-primary-foreground">
                        {items[active].role}
                      </p>
                      <p className="text-sm text-primary-foreground/80">
                        {items[active].company}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Floating accent badge — top right, 3D layer */}
                <div
                  className="absolute -top-5 -right-5 rounded-2xl bg-accent text-accent-foreground px-4 py-3 shadow-soft animate-float"
                  style={{ transform: "translateZ(80px)" }}
                >
                  <p className="font-display text-xl leading-none">{String(active + 1).padStart(2, "0")}</p>
                  <p className="text-[9px] uppercase tracking-widest opacity-90 mt-1">/ 05</p>
                </div>

                {/* Floating chip — bottom left, 3D layer */}
                <div
                  className="absolute -bottom-4 -left-4 rounded-full bg-card px-4 py-2 shadow-soft border border-border"
                  style={{ transform: "translateZ(60px)" }}
                >
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    <span className="text-accent">●</span> Dakar · Sénégal
                  </p>
                </div>
              </div>

              {/* Mini progress dots under card */}
              <div className="mt-10 flex items-center gap-2">
                {items.map((_, i) => (
                  <button
                    key={i}
                    onMouseEnter={() => setActive(i)}
                    onClick={() => setActive(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === active ? "w-12 bg-accent" : "w-6 bg-border hover:bg-muted-foreground/40"
                    }`}
                    aria-label={`Étape ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — interactive timeline cards */}
          <div className="lg:col-span-7">
            <ol className="space-y-4">
              {items.map((it, i) => {
                const isActive = i === active;
                return (
                  <li key={it.role}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      className={`group relative w-full overflow-hidden rounded-2xl border text-left transition-all duration-500 ${
                        isActive
                          ? "border-accent/60 bg-card shadow-soft scale-[1.01]"
                          : "border-border bg-card/40 hover:border-accent/30 hover:bg-card"
                      }`}
                    >
                      {/* Animated accent bar */}
                      <span
                        className={`absolute left-0 top-0 h-full bg-gradient-warm transition-all duration-500 ${
                          isActive ? "w-1.5" : "w-0"
                        }`}
                      />

                      <div className="grid gap-4 p-6 lg:grid-cols-12 lg:gap-6 lg:p-7">
                        {/* Year + index */}
                        <div className="lg:col-span-3 flex items-baseline gap-3 lg:flex-col lg:items-start lg:gap-1">
                          <span
                            className={`font-display text-4xl leading-none transition-colors lg:text-5xl ${
                              isActive ? "text-accent" : "text-primary/40"
                            }`}
                          >
                            {it.year}
                          </span>
                          <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                            {it.period}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="lg:col-span-9">
                          <p
                            className={`text-[10px] uppercase tracking-widest transition-colors ${
                              isActive ? "text-accent" : "text-muted-foreground/70"
                            }`}
                          >
                            {it.tag}
                          </p>
                          <h3 className="mt-1 font-display text-2xl text-primary">{it.role}</h3>
                          <p className="text-sm uppercase tracking-wider text-muted-foreground">
                            {it.company}
                          </p>

                          {/* Expandable description */}
                          <div
                            className={`grid transition-all duration-500 ${
                              isActive
                                ? "mt-4 grid-rows-[1fr] opacity-100"
                                : "mt-0 grid-rows-[0fr] opacity-0"
                            }`}
                          >
                            <div className="overflow-hidden">
                              <p className="text-muted-foreground leading-relaxed">
                                {it.description}
                              </p>
                              <div className="mt-4 flex flex-wrap gap-2">
                                {it.stack.map((s) => (
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
                        </div>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
