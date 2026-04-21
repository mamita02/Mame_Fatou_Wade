const projects = [
  {
    title: "Tima Love",
    url: "https://tima-love.com/",
    domain: "tima-love.com",
    category: "E-commerce",
    description:
      "Boutique en ligne élégante avec catalogue, panier et paiement intégré. Identité raffinée et expérience d'achat fluide.",
    tags: ["WordPress", "WooCommerce", "UX"],
    year: "2025",
  },
  {
    title: "PCNet Univers",
    url: "https://pcnet-univers.com/",
    domain: "pcnet-univers.com",
    category: "E-commerce Tech",
    description:
      "Plateforme spécialisée dans la vente de matériel informatique avec catalogue dynamique et back-office complet.",
    tags: ["WordPress", "WooCommerce", "SEO"],
    year: "2025",
  },
  {
    title: "MCE Pro CRM",
    url: "https://crm.mce-pro.agency/",
    domain: "crm.mce-pro.agency",
    category: "SaaS / CRM",
    description:
      "ERP/CRM sur-mesure avec automatisation Odoo, synchronisation produits & commandes, dashboards temps réel.",
    tags: ["Odoo", "Python", "Automation"],
    year: "2025",
    featured: true,
  },
  {
    title: "Fly Valet",
    url: "https://fly-valet.fr/",
    domain: "fly-valet.fr",
    category: "Service Premium",
    description:
      "Site vitrine pour service de voiturier aéroportuaire. Réservation en ligne, identité haut de gamme.",
    tags: ["React", "Booking", "SEO"],
    year: "2024",
  },
  {
    title: "Marimika",
    url: "https://marimika.com/",
    domain: "marimika.com",
    category: "Lifestyle",
    description:
      "Site de marque mêlant storytelling visuel et e-commerce, pensé pour mettre en lumière le produit.",
    tags: ["WordPress", "Design", "Brand"],
    year: "2024",
  },
  {
    title: "Afroduct",
    url: "https://afroduct.com/",
    domain: "afroduct.com",
    category: "Marketplace",
    description:
      "Marketplace dédiée aux produits africains : multi-vendeurs, paiement, gestion logistique.",
    tags: ["WooCommerce", "Multi-vendor", "Payments"],
    year: "2025",
    featured: true,
  },
];

export function Work() {
  return (
    <section id="work" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col items-start gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Réalisations</p>
            <h2 className="mt-4 font-display text-4xl text-primary lg:text-5xl text-balance">
              Six projets,<br />une même exigence.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Une sélection de plateformes livrées en production — du e-commerce
            élégant aux ERP métiers.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-6 lg:auto-rows-[minmax(280px,auto)]">
          {projects.map((p, i) => (
            <a
              key={p.url}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:shadow-deep hover:-translate-y-1 ${
                p.featured ? "lg:col-span-4" : "lg:col-span-2"
              } ${i === 0 ? "lg:col-span-3" : ""} ${i === 1 ? "lg:col-span-3" : ""}`}
            >
              <div className="absolute inset-0 bg-gradient-warm opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-0 grain pointer-events-none" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors group-hover:text-primary-foreground/80">
                    {p.category}
                  </span>
                  <span className="text-xs text-muted-foreground transition-colors group-hover:text-primary-foreground/80">
                    {p.year}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-4xl text-primary transition-colors group-hover:text-primary-foreground lg:text-5xl">
                  {p.title}
                </h3>
                <p className="mt-4 max-w-md text-muted-foreground transition-colors group-hover:text-primary-foreground/85">
                  {p.description}
                </p>
              </div>

              <div className="relative mt-8 flex items-end justify-between">
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-background/80 px-3 py-1 text-xs text-muted-foreground transition-colors group-hover:border-primary-foreground/30 group-hover:bg-primary-foreground/10 group-hover:text-primary-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="flex items-center gap-2 text-sm font-medium text-primary transition-all group-hover:text-primary-foreground group-hover:translate-x-1">
                  Visiter →
                </span>
              </div>

              <div className="relative mt-6 border-t border-border/60 pt-4 text-xs text-muted-foreground transition-colors group-hover:border-primary-foreground/20 group-hover:text-primary-foreground/70">
                {p.domain}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
