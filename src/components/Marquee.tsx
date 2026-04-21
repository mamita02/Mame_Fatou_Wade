const items = [
  "Python", "TensorFlow", "React", "Next.js", "Flutter",
  "Supabase", "PostgreSQL", "Odoo", "WordPress", "GCP",
  "Power BI", "Docker", "Node.js", "PHP", "AWS",
];

export function Marquee() {
  const loop = [...items, ...items];
  return (
    <section className="relative overflow-hidden border-y border-border bg-primary py-6 text-primary-foreground">
      <div className="flex animate-marquee whitespace-nowrap">
        {loop.map((it, i) => (
          <span
            key={i}
            className="mx-8 inline-flex items-center gap-8 font-display text-2xl tracking-tight opacity-90"
          >
            {it}
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}
