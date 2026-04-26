export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto grid w-full max-w-none gap-16 px-6 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">About</p>
          <h2 className="mt-4 font-display text-4xl text-primary lg:text-5xl text-balance">
            A blend of scientific rigor and attention to detail.
          </h2>
        </div>

        <div className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Graduated with a Master's in Artificial Intelligence & Big Data from the École Supérieure
            Polytechnique of Dakar, I design comprehensive solutions — from ML modeling
            to web and mobile deployment.
          </p>
          <p>
            I have had the opportunity to work on institutional projects (National Assembly of
            Senegal, Govathon 2025, IRD/UMMISCO) and entrepreneurial ones, always keeping the same
            obsession: delivering reliable, beautiful products that <em>truly</em> solve a
            problem.
          </p>
          <ul className="grid grid-cols-2 gap-4 pt-4">
            {[
              ["AI", "Computer Vision · NLP · ML"],
              ["Web", "React · Next · WordPress"],
              ["Mobile", "Flutter · Android Studio"],
              ["Data", "BigQuery · Snowflake · Power BI"],
            ].map(([k, v]) => (
              <li
                key={k}
                className="rounded-xl border border-border bg-card p-4"
              >
                <p className="font-display text-2xl text-primary">{k}</p>
                <p className="mt-1 text-sm text-muted-foreground">{v}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}