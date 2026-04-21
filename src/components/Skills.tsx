const groups = [
  {
    title: "Développement",
    items: ["HTML / CSS", "JavaScript / TypeScript", "React", "PHP", "Node.js", "Flutter", "Java"],
  },
  {
    title: "IA & Data",
    items: ["Python", "TensorFlow", "PyTorch", "Pandas", "CNN / LSTM / RNN", "Random Forest", "Power BI"],
  },
  {
    title: "Bases & Cloud",
    items: ["PostgreSQL", "Oracle PL/SQL", "MariaDB", "NoSQL", "AWS", "Azure", "Google Cloud"],
  },
  {
    title: "Outils & Plateformes",
    items: ["Supabase", "Odoo", "WordPress", "Docker", "Git", "Figma", "Postman"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative bg-secondary py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex flex-col items-start gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Expertise</p>
            <h2 className="mt-4 font-display text-4xl text-primary lg:text-5xl">
              Une stack complète,<br />pensée pour livrer.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            De la couche modèle jusqu'à l'interface utilisateur, je maîtrise chaque
            étape du cycle produit.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {groups.map((g) => (
            <article
              key={g.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-all hover:shadow-soft hover:-translate-y-1"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-warm opacity-0 transition-opacity group-hover:opacity-100" />
              <h3 className="font-display text-2xl text-primary">{g.title}</h3>
              <ul className="mt-5 space-y-2">
                {g.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
