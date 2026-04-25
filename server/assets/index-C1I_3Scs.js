import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-ikhIAlnn.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const links = [
  { href: "#about", label: "À propos" },
  { href: "#work", label: "Réalisations" },
  { href: "#flagship", label: "Projets phares" },
  { href: "#experience", label: "Parcours" },
  { href: "#media", label: "Studio" },
  { href: "#certifications", label: "Diplômes" },
  { href: "#contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "header",
    {
      className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/60" : "bg-transparent"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mx-auto flex w-full max-w-none items-center justify-between px-6 py-5 lg:px-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "group flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-display text-sm tracking-wider", children: "MFW" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-lg tracking-tight", children: [
            "Mame Fatou ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "Wade" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden items-center gap-8 md:flex", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: l.href,
            className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
            children: l.label
          }
        ) }, l.href)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "/CV_Mame_Fatou_Wade.pdf",
            download: true,
            className: "hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 md:inline-flex",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-4 w-4", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" }) }),
              "Mon CV"
            ]
          }
        )
      ] })
    }
  );
}
const charFront = "/Mame_Fatou_Wade/assets/char-3d-front-CdFD4K6Y.png";
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "top",
      className: "relative overflow-hidden bg-gradient-cream pt-32 pb-20 lg:pt-40 lg:pb-32",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent/15 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid w-full max-w-none gap-12 px-6 lg:grid-cols-12 lg:gap-8 lg:px-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-6 flex flex-col justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-accent" }),
              "Disponible pour collaborations"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 font-display text-4xl leading-[0.98] text-balance text-primary sm:text-5xl lg:text-6xl xl:text-7xl", children: [
              "Je conçois des produits ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "text-accent not-italic", children: "numériques" }),
              " qui ont du goût."
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-xl text-lg text-muted-foreground", children: "Ingénieure en Intelligence Artificielle & Big Data, développeuse web full-stack. Je transforme des idées en plateformes élégantes, performantes et intelligentes — du modèle ML jusqu'à l'interface finale." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-center gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "#work",
                  className: "group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:shadow-deep hover:-translate-y-0.5",
                  children: [
                    "Voir mes réalisations",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "transition-transform group-hover:translate-x-1", children: "→" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "/CV_Mame_Fatou_Wade.pdf",
                  download: true,
                  className: "group inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/60 px-7 py-3.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-4 w-4", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" }) }),
                    "Télécharger mon CV"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "mt-14 grid grid-cols-3 gap-6 border-t border-border pt-8 max-w-md", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Sites livrés" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "mt-1 font-display text-3xl text-primary", children: "6+" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Années code" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "mt-1 font-display text-3xl text-primary", children: "5" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Stack IA" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "mt-1 font-display text-3xl text-primary", children: "∞" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative lg:col-span-6 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto flex h-[36rem] w-full items-end justify-center lg:h-[40rem]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-x-0 bottom-8 -z-10 h-2/3 rounded-[3rem] bg-gradient-warm opacity-60 blur-3xl" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: charFront,
                alt: "Avatar 3D — femme voilée codant sur un ordinateur portable",
                width: 968,
                height: 1152,
                className: "relative z-10 h-full w-auto object-contain drop-shadow-[0_35px_40px_rgba(60,30,15,0.45)]"
              }
            )
          ] }) })
        ] })
      ]
    }
  );
}
const items$2 = [
  "Python",
  "TensorFlow",
  "React",
  "Next.js",
  "Flutter",
  "Supabase",
  "PostgreSQL",
  "Odoo",
  "WordPress",
  "GCP",
  "Power BI",
  "Docker",
  "Node.js",
  "PHP",
  "AWS"
];
function Marquee() {
  const loop = [...items$2, ...items$2];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden border-y border-border bg-primary py-6 text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex animate-marquee whitespace-nowrap", children: loop.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "span",
    {
      className: "mx-8 inline-flex items-center gap-8 font-display text-2xl tracking-tight opacity-90",
      children: [
        it,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "✦" })
      ]
    },
    i
  )) }) });
}
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "relative py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid w-full max-w-none gap-16 px-6 lg:grid-cols-12 lg:px-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent", children: "À propos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl text-primary lg:text-5xl text-balance", children: "Une approche entre rigueur scientifique et sens du détail." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Diplômée d'un Master en Intelligence Artificielle & Big Data à l'École Supérieure Polytechnique de Dakar, je conçois des solutions complètes — de la modélisation ML jusqu'au déploiement web et mobile." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "J'ai eu la chance de travailler sur des projets institutionnels (Assemblée Nationale du Sénégal, Govathon 2025, IRD/UMMISCO) et entrepreneuriaux, en gardant toujours la même obsession : livrer des produits fiables, beaux, et qui résolvent ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("em", { children: "vraiment" }),
        " un problème."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid grid-cols-2 gap-4 pt-4", children: [
        ["IA", "Computer Vision · NLP · ML"],
        ["Web", "React · Next · WordPress"],
        ["Mobile", "Flutter · Android Studio"],
        ["Data", "BigQuery · Snowflake · Power BI"]
      ].map(([k, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "li",
        {
          className: "rounded-xl border border-border bg-card p-4",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl text-primary", children: k }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: v })
          ]
        },
        k
      )) })
    ] })
  ] }) });
}
const groups = [
  {
    title: "Développement",
    items: ["HTML / CSS", "JavaScript / TypeScript", "React", "PHP", "Node.js", "Flutter", "Java"]
  },
  {
    title: "IA & Data",
    items: ["Python", "TensorFlow", "PyTorch", "Pandas", "CNN / LSTM / RNN", "Random Forest", "Power BI"]
  },
  {
    title: "Bases & Cloud",
    items: ["PostgreSQL", "Oracle PL/SQL", "MariaDB", "NoSQL", "AWS", "Azure", "Google Cloud"]
  },
  {
    title: "Outils & Plateformes",
    items: ["Supabase", "Odoo", "WordPress", "Docker", "Git", "Figma", "Postman"]
  }
];
function Skills() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "skills", className: "relative bg-secondary py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-none px-6 lg:px-16 xl:px-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start gap-4 lg:flex-row lg:items-end lg:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent", children: "Expertise" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl text-primary lg:text-5xl", children: [
          "Une stack complète,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "pensée pour livrer."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-md text-muted-foreground", children: "De la couche modèle jusqu'à l'interface utilisateur, je maîtrise chaque étape du cycle produit." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: groups.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "article",
      {
        className: "group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:shadow-soft hover:-translate-y-1",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-1 bg-gradient-warm opacity-0 transition-opacity group-hover:opacity-100" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-primary", children: g.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-2", children: g.items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-accent" }),
            it
          ] }, it)) })
        ]
      },
      g.title
    )) })
  ] }) });
}
const projects$1 = [
  {
    title: "Tima Love",
    url: "https://tima-love.com/",
    domain: "tima-love.com",
    category: "E-commerce",
    description: "Boutique en ligne élégante avec catalogue, panier et paiement intégré. Identité raffinée et expérience d'achat fluide.",
    tags: ["React", "Supabase", "UX"],
    year: "2025"
  },
  {
    title: "PCNet Univers",
    url: "https://pcnet-univers.com/",
    domain: "pcnet-univers.com",
    category: "E-commerce Tech",
    description: "Plateforme spécialisée dans la vente de matériel informatique avec catalogue dynamique et back-office complet.",
    tags: ["Tailwind", "Node js", "SEO"],
    year: "2025"
  },
  {
    title: "MCE Pro CRM",
    url: "https://crm.mce-pro.agency/",
    domain: "crm.mce-pro.agency",
    category: "SaaS / CRM",
    description: "ERP/CRM sur-mesure avec automatisation, synchronisation produits & commandes, dashboards temps réel.",
    tags: ["Supabase", "React", "Automation"],
    year: "2025",
    featured: true
  },
  {
    title: "Fly Valet",
    url: "https://fly-valet.fr/",
    domain: "fly-valet.fr",
    category: "Service Premium",
    description: "Site vitrine pour service de voiturier aéroportuaire. Réservation en ligne, identité haut de gamme.",
    tags: ["Wordpress", "Booking", "SEO"],
    year: "2024"
  },
  {
    title: "Marimika",
    url: "https://marimika.com/",
    domain: "marimika.com",
    category: "Lifestyle",
    description: "Site de marque mêlant storytelling visuel et e-commerce, pensé pour mettre en lumière le produit.",
    tags: ["WordPress", "Woocommerce", "Brand", "Shipping"],
    year: "2024"
  },
  {
    title: "Afroduct",
    url: "https://afroduct.com/",
    domain: "afroduct.com",
    category: "Marketplace",
    description: "Marketplace dédiée aux produits africains : multi-vendeurs, paiement, gestion logistique.",
    tags: ["WooCommerce", "Multi-vendor", "Payments"],
    year: "2025",
    featured: true
  }
];
function Work() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "work", className: "relative py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-none px-6 lg:px-16 xl:px-24", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start gap-4 lg:flex-row lg:items-end lg:justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent", children: "Réalisations" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl text-primary lg:text-5xl text-balance", children: [
          "Six projets,",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "une même exigence."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-md text-muted-foreground", children: "Une sélection de plateformes livrées en production — du e-commerce élégant aux ERP métiers." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-6 lg:grid-cols-6 lg:auto-rows-[minmax(280px,auto)]", children: projects$1.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: p.url,
        target: "_blank",
        rel: "noopener noreferrer",
        className: `group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:shadow-deep hover:-translate-y-1 ${p.featured ? "lg:col-span-4" : "lg:col-span-2"} ${i === 0 ? "lg:col-span-3" : ""} ${i === 1 ? "lg:col-span-3" : ""}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-warm opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grain pointer-events-none" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-primary-foreground/80", children: p.category }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground transition-colors group-hover:text-primary-foreground/80", children: p.year })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-display text-4xl text-primary transition-colors group-hover:text-primary-foreground lg:text-5xl", children: p.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-md text-muted-foreground transition-colors group-hover:text-primary-foreground/85", children: p.description })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-8 flex items-end justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: p.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "rounded-full border border-border bg-background/80 px-3 py-1 text-xs text-muted-foreground transition-colors group-hover:border-primary-foreground/30 group-hover:bg-primary-foreground/10 group-hover:text-primary-foreground",
                children: t
              },
              t
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex items-center gap-2 text-sm font-medium text-primary transition-all group-hover:text-primary-foreground group-hover:translate-x-1", children: "Visiter →" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-6 border-t border-border/60 pt-4 text-xs text-muted-foreground transition-colors group-hover:border-primary-foreground/20 group-hover:text-primary-foreground/70", children: p.domain })
        ]
      },
      p.url
    )) })
  ] }) });
}
const logoAssemblee = "/Mame_Fatou_Wade/assets/logo-assemblee-Bo7QIeIg.png";
const logoGovathon = "/Mame_Fatou_Wade/assets/logo-govathon-DYqUaAjp.png";
const projects = [
  {
    id: "saytu",
    title: "Saytu",
    subtitle: "Observatoire numérique des finances publiques",
    client: "Assemblée Nationale du Sénégal",
    year: "2025",
    tag: "Civic Tech · IA",
    description: "Plateforme institutionnelle reliant SIGFIP & ASTER pour offrir aux députés une lecture en temps réel du budget de l'État. Modèles d'IA pour la détection d'anomalies, visualisations dynamiques et tableaux de bord ministère par ministère.",
    metrics: [
      { label: "Ministères", value: "38" },
      { label: "Budget suivi", value: "6 842 Mds FCFA" },
      { label: "Sources liées", value: "SIGFIP · ASTER" }
    ],
    stack: ["FastAPI", "PostgreSQL", "React", "ML", "D3.js"],
    logo: logoAssemblee,
    accent: "oklch(0.45 0.15 145)"
    // green
  },
  {
    id: "emergia",
    title: "Emergia VR",
    subtitle: "Formation immersive en médecine d'urgence",
    client: "Govathon — Innovation Citoyenne",
    year: "2025",
    tag: "VR · Formation",
    description: "Simulateur en réalité virtuelle pour entraîner les premiers intervenants aux gestes qui sauvent. Conçu en hackathon avec un pitch institutionnel, prototype Unity et parcours pédagogique scénarisé.",
    metrics: [
      { label: "Format", value: "VR Unity" },
      { label: "Cible", value: "Premiers intervenants" },
      { label: "Étape", value: "Prototype + pitch" }
    ],
    stack: ["Unity", "C#", "Blender", "Figma"],
    logo: logoGovathon,
    accent: "oklch(0.65 0.18 50)"
    // amber
  }
];
function FlagshipProjects() {
  const [active, setActive] = reactExports.useState(0);
  const sceneRef = reactExports.useRef(null);
  const [tilt, setTilt] = reactExports.useState({ x: 0, y: 0 });
  reactExports.useEffect(() => {
    const el = sceneRef.current;
    if (!el) return;
    const onMove = (e) => {
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
  reactExports.useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % projects.length), 9e3);
    return () => clearInterval(id);
  }, []);
  const current = projects[active];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "flagship",
      className: "relative overflow-hidden py-24 lg:py-32",
      style: {
        backgroundImage: "radial-gradient(ellipse at top, color-mix(in oklab, var(--primary) 22%, var(--background)) 0%, var(--background) 60%), linear-gradient(180deg, var(--background), color-mix(in oklab, var(--primary) 8%, var(--background)))"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "pointer-events-none absolute inset-0 opacity-[0.07]",
            style: {
              backgroundImage: "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "pointer-events-none absolute -top-32 right-[15%] h-80 w-80 rounded-full blur-3xl",
            style: { backgroundColor: `color-mix(in oklab, ${current.accent} 30%, transparent)` }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto w-full max-w-none px-6 lg:px-16 xl:px-24", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-12 lg:items-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent", children: "Projets phares" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl text-primary lg:text-6xl text-balance", children: [
                "Deux missions",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block italic text-accent", children: "qui ont marqué un tournant." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Des produits livrés à des institutions publiques, où la technique rencontre l'impact citoyen — chacun avec sa propre signature visuelle." }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              ref: sceneRef,
              className: "relative mt-16 lg:mt-20",
              style: { perspective: "1800px" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "grid gap-10 lg:grid-cols-12 lg:gap-16 transition-transform duration-300 ease-out",
                  style: {
                    transformStyle: "preserve-3d",
                    transform: `rotateY(${tilt.x * 6}deg) rotateX(${-tilt.y * 4}deg)`
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "relative aspect-square w-full",
                        style: { transformStyle: "preserve-3d" },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "absolute inset-x-8 bottom-8 h-12 rounded-[50%]",
                              style: {
                                background: "radial-gradient(ellipse at center, color-mix(in oklab, var(--primary) 40%, transparent) 0%, transparent 70%)",
                                transform: "translateZ(-80px) rotateX(70deg)",
                                filter: "blur(8px)"
                              }
                            }
                          ),
                          [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "absolute inset-0 rounded-full border",
                              style: {
                                borderColor: `color-mix(in oklab, ${current.accent} ${30 - i * 8}%, transparent)`,
                                transform: `translateZ(${-40 - i * 20}px) rotateX(${65 + i * 5}deg) scale(${1 + i * 0.15})`,
                                animation: `float-slow ${10 + i * 2}s ease-in-out infinite`
                              }
                            },
                            i
                          )),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "absolute top-[18%] left-[12%] h-16 w-16 rounded-2xl border border-accent/40 backdrop-blur-sm",
                              style: {
                                backgroundColor: "color-mix(in oklab, var(--accent) 12%, transparent)",
                                transform: "translateZ(120px) rotateZ(15deg)",
                                animation: "float-slow 7s ease-in-out infinite"
                              }
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "absolute bottom-[22%] right-[10%] h-20 w-20 rounded-full",
                              style: {
                                background: `linear-gradient(135deg, ${current.accent}, color-mix(in oklab, ${current.accent} 30%, var(--background)))`,
                                transform: "translateZ(140px)",
                                boxShadow: `0 30px 60px -10px color-mix(in oklab, ${current.accent} 50%, transparent)`,
                                animation: "float-slow 9s ease-in-out infinite"
                              }
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "absolute top-[10%] right-[20%] h-10 w-10 rounded-lg border-2 border-primary/30",
                              style: {
                                transform: "translateZ(90px) rotateZ(-20deg)",
                                animation: "float-slow 11s ease-in-out infinite"
                              }
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "div",
                            {
                              className: "absolute inset-[18%] rounded-[2rem] border border-border/80 backdrop-blur-md flex items-center justify-center overflow-hidden",
                              style: {
                                backgroundColor: "color-mix(in oklab, var(--card) 85%, transparent)",
                                transform: "translateZ(60px)",
                                boxShadow: `0 40px 80px -20px color-mix(in oklab, var(--primary) 40%, transparent), inset 0 1px 0 0 color-mix(in oklab, white 30%, transparent)`
                              },
                              children: [
                                projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "img",
                                  {
                                    src: p.logo,
                                    alt: `Logo ${p.title}`,
                                    className: `absolute inset-0 m-auto h-3/4 w-3/4 object-contain p-6 transition-all duration-1000 ${i === active ? "opacity-100 scale-100" : "opacity-0 scale-90"}`
                                  },
                                  p.id
                                )),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "div",
                                  {
                                    className: "pointer-events-none absolute inset-0",
                                    style: {
                                      background: "linear-gradient(135deg, color-mix(in oklab, white 25%, transparent) 0%, transparent 40%, transparent 60%, color-mix(in oklab, var(--primary) 12%, transparent) 100%)"
                                    }
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs(
                            "div",
                            {
                              className: "absolute -top-2 -left-2 rounded-2xl bg-primary text-primary-foreground px-4 py-3 shadow-deep",
                              style: { transform: "translateZ(160px)" },
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-3xl leading-none", children: current.year }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] uppercase tracking-widest opacity-80 mt-1", children: "Livré" })
                              ]
                            }
                          ),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "div",
                            {
                              className: "absolute -bottom-2 right-0 rounded-full border border-border bg-card px-4 py-2 shadow-soft",
                              style: { transform: "translateZ(140px)" },
                              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] uppercase tracking-widest text-foreground", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: current.accent }, children: "●" }),
                                " ",
                                current.tag
                              ] })
                            }
                          )
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", style: { transformStyle: "preserve-3d" }, children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "relative rounded-3xl border border-border bg-card/70 backdrop-blur-sm p-8 lg:p-10 shadow-soft",
                          style: { transform: "translateZ(40px)" },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-in", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.3em] text-muted-foreground", children: current.client }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-4xl text-primary lg:text-5xl", children: current.title }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-display text-xl italic", style: { color: current.accent }, children: current.subtitle }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-muted-foreground leading-relaxed", children: current.description }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-3 gap-3", children: current.metrics.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                              "div",
                              {
                                className: "rounded-2xl border border-border bg-background/60 px-4 py-4",
                                children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl text-primary leading-tight", children: m.value }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[10px] uppercase tracking-widest text-muted-foreground", children: m.label })
                                ]
                              },
                              m.label
                            )) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: current.stack.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                              "span",
                              {
                                className: "inline-flex items-center rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-[10px] uppercase tracking-widest text-accent",
                                children: s
                              },
                              s
                            )) })
                          ] })
                        },
                        current.id
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-2 gap-3", children: projects.map((p, i) => {
                        const isActive = i === active;
                        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "button",
                          {
                            type: "button",
                            onClick: () => setActive(i),
                            onMouseEnter: () => setActive(i),
                            className: `group relative overflow-hidden rounded-2xl border p-4 text-left transition-all ${isActive ? "border-accent/60 bg-card shadow-soft" : "border-border bg-card/40 hover:border-accent/30"}`,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "span",
                                  {
                                    className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-background border border-border overflow-hidden",
                                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.logo, alt: "", className: "h-7 w-7 object-contain" })
                                  }
                                ),
                                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-lg text-primary leading-tight truncate", children: p.title }),
                                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest text-muted-foreground truncate", children: p.client })
                                ] })
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  className: "absolute bottom-0 left-0 h-0.5 transition-all duration-500",
                                  style: {
                                    width: isActive ? "100%" : "0%",
                                    backgroundColor: p.accent
                                  }
                                }
                              )
                            ]
                          },
                          p.id
                        );
                      }) })
                    ] })
                  ]
                }
              )
            }
          )
        ] })
      ]
    }
  );
}
const portrait = "/Mame_Fatou_Wade/assets/portrait-mfw-E84sG57k.jpg";
const soutenance = "/Mame_Fatou_Wade/assets/mfw-soutenance-DFqA82qB.jpg";
const photos = [
  { src: portrait, caption: "Portrait studio" },
  { src: soutenance, caption: "Soutenance — Master IA & Big Data" }
];
const items$1 = [
  {
    year: "2025",
    period: "En cours",
    role: "Développeuse IA / Web",
    company: "MCE Sénégal",
    tag: "Full-stack · CRM",
    description: "Sites web, chatbots et automatisations CRM. Construction d'un ERP reliant Odoo à une plateforme e-commerce via Python.",
    stack: ["Python", "Odoo", "React", "n8n"]
  },
  {
    year: "2024",
    period: "Stage recherche",
    role: "Stagiaire IA & Big Data",
    company: "UMMISCO – IRD",
    tag: "Deep Learning",
    description: "Modèle de détection et classification des sons de poissons en milieu acoustique passif via deep learning.",
    stack: ["TensorFlow", "Librosa", "Python"]
  },
  {
    year: "2023",
    period: "Alternance",
    role: "Développeuse Web & Mobile",
    company: "Kwingo Group",
    tag: "Mobile · Web",
    description: "Applications web et mobiles en Flutter et JavaScript, conception et gestion des bases de données SQL.",
    stack: ["Flutter", "JavaScript", "SQL"]
  }
];
function Experience() {
  const [active, setActive] = reactExports.useState(0);
  const [photoIdx, setPhotoIdx] = reactExports.useState(0);
  const tilt = reactExports.useRef(null);
  const sectionRef = reactExports.useRef(null);
  const [parallax, setParallax] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const id = setInterval(() => {
      setPhotoIdx((p) => (p + 1) % photos.length);
    }, 5e3);
    return () => clearInterval(id);
  }, []);
  reactExports.useEffect(() => {
    const el = tilt.current;
    if (!el) return;
    const handleMove = (e) => {
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
  reactExports.useEffect(() => {
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "experience",
      ref: sectionRef,
      className: "relative overflow-hidden py-24 lg:py-32",
      style: {
        backgroundImage: "linear-gradient(180deg, var(--background) 0%, color-mix(in oklab, var(--primary) 18%, var(--background)) 50%, var(--background) 100%)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "pointer-events-none absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-3xl",
            style: { transform: `translateY(${parallax * -60}px)` }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "pointer-events-none absolute top-1/3 -right-40 h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-3xl",
            style: { transform: `translateY(${parallax * 80}px)` }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "pointer-events-none absolute top-20 right-[10%] h-24 w-24 rounded-3xl border border-accent/30 rotate-12",
            style: { transform: `translateY(${parallax * -120}px) rotate(${12 + parallax * 30}deg)` }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "pointer-events-none absolute bottom-32 left-[8%] h-16 w-16 rounded-full border-2 border-primary/20",
            style: { transform: `translateY(${parallax * -80}px)` }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto w-full max-w-none px-6 lg:px-16 xl:px-24", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-12 lg:items-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent", children: "Parcours" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl text-primary lg:text-6xl text-balance", children: [
                "Cinq années à construire des produits",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block italic text-accent", children: "qui comptent vraiment." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Survolez la chronologie pour explorer chaque chapitre — de la recherche en deep learning à un observatoire pour l'État." }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20 grid gap-12 lg:grid-cols-12 lg:gap-16", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:sticky lg:top-28", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  ref: tilt,
                  className: "group relative transition-transform duration-300 ease-out will-change-transform",
                  style: { transformStyle: "preserve-3d" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-6 rounded-[2.5rem] bg-gradient-warm opacity-30 blur-3xl" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-accent/40 via-transparent to-primary/30 blur-xl" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-[2rem] border border-border bg-card shadow-deep", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-[520px] w-full", children: photos.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: p.src,
                          alt: `Mame Fatou Wade — ${p.caption}`,
                          width: 800,
                          height: 1e3,
                          loading: "lazy",
                          className: `absolute inset-0 h-full w-full object-cover transition-all duration-1000 ease-out ${i === photoIdx ? "opacity-100 scale-100" : "opacity-0 scale-105"}`
                        },
                        p.src
                      )) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "absolute bottom-24 right-4 flex items-center gap-1.5",
                          style: { transform: "translateZ(60px)" },
                          children: photos.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                            "button",
                            {
                              type: "button",
                              onClick: () => setPhotoIdx(i),
                              "aria-label": `Photo ${i + 1}`,
                              className: `h-1.5 rounded-full transition-all ${i === photoIdx ? "w-8 bg-accent" : "w-3 bg-primary-foreground/50 hover:bg-primary-foreground/80"}`
                            },
                            i
                          ))
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "absolute top-6 left-6 rounded-2xl bg-card/95 backdrop-blur px-4 py-3 shadow-soft border border-border",
                          style: { transform: "translateZ(50px)" },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: "Étape actuelle" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl text-primary leading-none mt-1", children: items$1[active].year })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "absolute bottom-0 left-0 right-0 p-6",
                          style: { transform: "translateZ(30px)" },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "animate-fade-in", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-accent", children: items$1[active].period }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-display text-2xl text-primary-foreground", children: items$1[active].role }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-primary-foreground/80", children: items$1[active].company })
                          ] }, active)
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "absolute -top-5 -right-5 rounded-2xl bg-accent text-accent-foreground px-4 py-3 shadow-soft animate-float",
                        style: { transform: "translateZ(80px)" },
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl leading-none", children: String(active + 1).padStart(2, "0") }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] uppercase tracking-widest opacity-90 mt-1", children: "/ 05" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "absolute -bottom-4 -left-4 rounded-full bg-card px-4 py-2 shadow-soft border border-border",
                        style: { transform: "translateZ(60px)" },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "●" }),
                          " Dakar · Sénégal"
                        ] })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex items-center gap-2", children: items$1.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onMouseEnter: () => setActive(i),
                  onClick: () => setActive(i),
                  className: `h-1.5 rounded-full transition-all ${i === active ? "w-12 bg-accent" : "w-6 bg-border hover:bg-muted-foreground/40"}`,
                  "aria-label": `Étape ${i + 1}`
                },
                i
              )) })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-4", children: items$1.map((it, i) => {
              const isActive = i === active;
              return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onMouseEnter: () => setActive(i),
                  onFocus: () => setActive(i),
                  onClick: () => setActive(i),
                  className: `group relative w-full overflow-hidden rounded-2xl border text-left transition-all duration-500 ${isActive ? "border-accent/60 bg-card shadow-soft scale-[1.01]" : "border-border bg-card/40 hover:border-accent/30 hover:bg-card"}`,
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: `absolute left-0 top-0 h-full bg-gradient-warm transition-all duration-500 ${isActive ? "w-1.5" : "w-0"}`
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 p-6 lg:grid-cols-12 lg:gap-6 lg:p-7", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3 flex items-baseline gap-3 lg:flex-col lg:items-start lg:gap-1", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: `font-display text-4xl leading-none transition-colors lg:text-5xl ${isActive ? "text-accent" : "text-primary/40"}`,
                            children: it.year
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: it.period })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-9", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: `text-[10px] uppercase tracking-widest transition-colors ${isActive ? "text-accent" : "text-muted-foreground/70"}`,
                            children: it.tag
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 font-display text-2xl text-primary", children: it.role }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm uppercase tracking-wider text-muted-foreground", children: it.company }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: `grid transition-all duration-500 ${isActive ? "mt-4 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"}`,
                            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: it.description }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: it.stack.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  className: "inline-flex items-center rounded-full border border-accent/30 bg-accent/5 px-3 py-1 text-[10px] uppercase tracking-widest text-accent",
                                  children: s
                                },
                                s
                              )) })
                            ] })
                          }
                        )
                      ] })
                    ] })
                  ]
                }
              ) }, it.role);
            }) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-24 grid gap-6 lg:grid-cols-12 lg:gap-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 relative overflow-hidden rounded-3xl border border-border bg-card p-8 lg:p-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-16 -right-16 h-48 w-48 rounded-full bg-accent/15 blur-3xl" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent", children: "Langues" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-3xl text-primary lg:text-4xl", children: "Bilingue, à l'aise partout." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 space-y-5", children: [
                  { name: "Français", level: "Langue maternelle", value: 100 },
                  { name: "Anglais", level: "Professionnel — C1", value: 85 },
                  { name: "Wolof", level: "Langue maternelle", value: 100 }
                ].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline justify-between", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xl text-primary", children: l.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-widest text-muted-foreground", children: l.level })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "h-full rounded-full bg-gradient-warm transition-all duration-700",
                      style: { width: `${l.value}%` }
                    }
                  ) })
                ] }, l.name)) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "lg:col-span-7 relative overflow-hidden rounded-3xl border border-border p-8 lg:p-10",
                style: {
                  backgroundImage: "linear-gradient(135deg, color-mix(in oklab, var(--primary) 12%, var(--card)) 0%, var(--card) 60%)"
                },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between gap-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent", children: "Loisirs & passions" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-3xl text-primary lg:text-4xl", children: "Au-delà de l'écran." })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:block font-display text-6xl italic text-accent/40 leading-none", children: "&" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3", children: [
                      { label: "Code", icon: "</>" },
                      { label: "Cuisine", icon: "🍲" },
                      { label: "Recherche", icon: "🔬" },
                      { label: "Commerce", icon: "🛍" },
                      { label: "Création de contenu", icon: "🎬" },
                      { label: "Lecture", icon: "📖" }
                    ].map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "div",
                      {
                        className: "group relative overflow-hidden rounded-2xl border border-border bg-background/60 px-4 py-5 transition-all hover:-translate-y-1 hover:border-accent/40 hover:shadow-soft",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: h.icon }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-display text-lg text-primary leading-tight", children: h.label }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute bottom-0 left-0 h-0.5 w-0 bg-gradient-warm transition-all duration-500 group-hover:w-full" })
                        ]
                      },
                      h.label
                    )) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-xl text-sm text-muted-foreground leading-relaxed", children: "Curieuse de nature, je mets ma créativité au service de prestations variées : contenus autour du dev, recettes et bien plus — toujours avec la même rigueur technique." })
                  ] })
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const smartcoutureImg = "/Mame_Fatou_Wade/assets/media-smartcouture-C6WTSHtC.png";
const emergiaImg = "/Mame_Fatou_Wade/assets/media-emergia-oQ3NzPAk.png";
const safetyImg = "/Mame_Fatou_Wade/assets/media-safety-CmmnqxfY.png";
const items = [
  {
    id: "v1",
    title: "SmartCouture",
    client: "Montage & voix off",
    url: "src/assets/SmartCouture.mp4",
    description: "Mise en avant de la plateforme couture intelligente — narration et montage rythmé pour valoriser l'expérience utilisateur.",
    image: smartcoutureImg
  },
  {
    id: "v2",
    title: "Emergia VR",
    client: "Montage & voix off",
    url: "src/assets/EmergiaVR.MP4",
    description: "Immersion vidéo dans l'univers réalité virtuelle d'Emergia — voix off institutionnelle et transitions cinématiques.",
    image: emergiaImg
  },
  {
    id: "v3",
    title: "Safety Service Security",
    client: "Montage & voix off",
    url: "src/assets/SafetyService.MP4",
    description: "Présentation corporate des services de sécurité — ton sérieux, voix off posée et identité visuelle soignée.",
    image: safetyImg
  }
];
function MediaContent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "media",
      className: "relative overflow-hidden py-24 lg:py-32",
      style: {
        backgroundImage: "linear-gradient(180deg, var(--background) 0%, color-mix(in oklab, var(--primary) 10%, var(--background)) 100%)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute top-32 left-0 right-0 h-12 opacity-[0.04] flex gap-2", children: Array.from({ length: 30 }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-12 shrink-0 bg-foreground rounded-sm" }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto w-full max-w-none px-6 lg:px-16 xl:px-24", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-12 lg:items-end", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent", children: "Studio créatif" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-4 font-display text-4xl text-primary lg:text-6xl text-balance", children: [
                "Montage vidéo",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block italic text-accent", children: "& voix off." })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground leading-relaxed", children: "Trois projets clients montés et narrés de A à Z — voix off posée, rythme cinématique et identité visuelle au service du message." }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: item.url,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-500 hover:-translate-y-2 hover:shadow-deep hover:border-accent/40",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[9/16] w-full overflow-hidden bg-muted", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: item.image,
                      alt: item.title,
                      className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105",
                      loading: "lazy"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -m-4 rounded-full bg-background/30 blur-xl group-hover:bg-accent/40 transition-all" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex h-20 w-20 items-center justify-center rounded-full bg-background/90 backdrop-blur shadow-deep transition-transform group-hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "svg",
                      {
                        className: "h-8 w-8 translate-x-0.5 text-primary",
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 5v14l11-7z" })
                      }
                    ) })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-4 left-4 right-4 flex items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-background/90 backdrop-blur px-3 py-1 text-[10px] uppercase tracking-widest text-foreground", children: "🎵 TikTok" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 left-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-accent text-accent-foreground px-3 py-1 text-[10px] uppercase tracking-widest", children: item.client }) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col gap-2 p-5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl text-primary leading-tight", children: item.title }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground leading-relaxed", children: item.description }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-2 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-accent opacity-0 group-hover:opacity-100 transition-opacity", children: [
                    "Voir sur TikTok",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-3 w-3", fill: "none", stroke: "currentColor", strokeWidth: "2.5", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17 8l4 4m0 0l-4 4m4-4H3" }) })
                  ] })
                ] })
              ]
            },
            item.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-6 lg:p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-2xl text-primary", children: "Retrouvez tous mes montages sur TikTok" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Voix off, montages clients et créations en continu." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "https://www.tiktok.com/@sabar_chic?_r=1&_t=ZN-95onlhctT4E",
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm transition-transform hover:-translate-y-0.5",
                children: "🎵 @mamefatouwade"
              }
            )
          ] })
        ] })
      ]
    }
  );
}
const certs = [
  {
    title: "Oracle Certified",
    issuer: "Oracle Corporation",
    year: "2024",
    description: "Certification officielle Oracle validant les compétences en bases de données et développement SQL.",
    file: "/certifications/Oracle_Certificate.pdf",
    accent: "from-accent/30 to-accent/5"
  },
  {
    title: "Attestation de Licence",
    issuer: "École Supérieure Polytechnique — UCAD",
    year: "2023",
    description: "Licence en Informatique — option Génie Logiciel. Diplôme officiel délivré par l'UCAD.",
    file: "/certifications/Attestation_Licence.pdf",
    accent: "from-primary/30 to-primary/5"
  },
  {
    title: "Attestation de Master",
    issuer: "UMMISCO — IRD",
    year: "2025",
    description: "Stage en deep learning : modélisation acoustique passive pour la détection des sons de poissons.",
    file: "/certifications/Attestation_Stage.pdf",
    accent: "from-accent/25 to-primary/10"
  },
  {
    title: "Attestation de Stage",
    issuer: "Stage professionnel",
    year: "2025",
    description: "Attestation officielle de stage validant l'expérience professionnelle de Mame Fatou Wade.",
    file: "/certifications/Attestation_de_stage_Mame_Fatou.pdf",
    accent: "from-primary/25 to-accent/10"
  }
];
function Certifications() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "certifications", className: "relative py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-none px-6 lg:px-12 xl:px-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent", children: "Diplômes & certifications" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl text-primary lg:text-5xl text-balance", children: "Preuves, pas promesses." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Chaque document ci-dessous est téléchargeable — diplômes, attestations de stage et certifications officielles." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "/CV_Mame_Fatou_Wade.pdf",
          download: true,
          className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card px-6 py-3 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-4 w-4", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" }) }),
            "CV complet (PDF)"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: certs.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: c.file,
        target: "_blank",
        rel: "noopener noreferrer",
        className: "group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-deep",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br ${c.accent} blur-2xl opacity-60 transition-opacity group-hover:opacity-100`
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "svg",
                {
                  className: "h-5 w-5",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    }
                  )
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl text-accent", children: c.year })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-lg text-primary leading-tight", children: c.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[10px] uppercase tracking-widest text-muted-foreground", children: c.issuer }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs text-muted-foreground leading-relaxed", children: c.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center gap-2 text-xs font-medium text-primary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Consulter" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "svg",
                {
                  className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-1",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  viewBox: "0 0 24 24",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M17 8l4 4m0 0l-4 4m4-4H3" })
                }
              )
            ] })
          ] })
        ]
      },
      c.title
    )) })
  ] }) });
}
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "relative overflow-hidden bg-gradient-cream py-24 lg:py-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-40 right-0 h-[30rem] w-[30rem] rounded-full bg-accent/15 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid w-full max-w-none gap-12 px-6 lg:grid-cols-12 lg:px-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.3em] text-accent", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-5xl text-primary lg:text-7xl text-balance", children: "Discutons de votre prochain projet." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-xl text-lg text-muted-foreground", children: "Une idée, un MVP, un site à refondre, un modèle IA à intégrer ? J'aime les projets ambitieux et les équipes qui les portent." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "mailto:mamefatouwade@esp.sn",
            className: "group flex items-center justify-between rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-soft hover:-translate-y-0.5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Email" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-display text-xl text-primary", children: "mamefatouwade@esp.sn" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl text-accent transition-transform group-hover:translate-x-1", children: "→" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://www.linkedin.com/in/mame-fatou-wade-3024b3220/",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "group flex items-center justify-between rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-soft hover:-translate-y-0.5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "LinkedIn" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-display text-xl text-primary", children: "linkedin.com/in/mame-fatou-wade" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "h-6 w-6 text-accent", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "tel:+221782950135",
            className: "group flex items-center justify-between rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-soft hover:-translate-y-0.5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Téléphone" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-display text-xl text-primary", children: "+221 78 295 01 35" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl text-accent transition-transform group-hover:translate-x-1", children: "→" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between rounded-2xl border border-border bg-card p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Localisation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-display text-xl text-primary", children: "Keur Massar · Dakar" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl text-accent", children: "●" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative mx-auto mt-24 w-full max-w-none border-t border-border px-6 pt-12 pb-8 lg:px-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-display text-sm tracking-wider shadow-soft", children: "MFW" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display text-xl text-primary", children: [
              "Mame Fatou ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "Wade" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Ingénieure IA & Développeuse full-stack" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 sm:grid-cols-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-accent", children: "Navigation" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-2 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#about", className: "hover:text-primary transition-colors", children: "À propos" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#work", className: "hover:text-primary transition-colors", children: "Réalisations" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#flagship", className: "hover:text-primary transition-colors", children: "Projets phares" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-accent", children: "Plus" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-2 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#experience", className: "hover:text-primary transition-colors", children: "Parcours" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#media", className: "hover:text-primary transition-colors", children: "Studio" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#certifications", className: "hover:text-primary transition-colors", children: "Diplômes" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.25em] text-accent", children: "Contact" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-3 space-y-2 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:mamefatouwade@esp.sn", className: "hover:text-primary transition-colors", children: "mamefatouwade@esp.sn" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+221782950135", className: "hover:text-primary transition-colors", children: "+221 78 295 01 35" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Keur Massar · Dakar" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Mame Fatou Wade — Tous droits réservés."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display italic", children: "Made with love and pride" })
      ] })
    ] })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Marquee, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Skills, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Work, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FlagshipProjects, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Experience, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(MediaContent, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Certifications, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {})
  ] });
}
export {
  Index as component
};
