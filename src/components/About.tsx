export function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="mx-auto grid w-full max-w-none gap-16 px-6 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.3em] text-accent">À propos</p>
          <h2 className="mt-4 font-display text-4xl text-primary lg:text-5xl text-balance">
            Une approche entre rigueur scientifique et sens du détail.
          </h2>
        </div>

        <div className="lg:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            Diplômée d'un Master en Intelligence Artificielle & Big Data à l'École Supérieure
            Polytechnique de Dakar, je conçois des solutions complètes — de la modélisation ML
            jusqu'au déploiement web et mobile.
          </p>
          <p>
            J'ai eu la chance de travailler sur des projets institutionnels (Assemblée Nationale du
            Sénégal, Govathon 2025, IRD/UMMISCO) et entrepreneuriaux, en gardant toujours la même
            obsession : livrer des produits fiables, beaux, et qui résolvent <em>vraiment</em> un
            problème.
          </p>
          <ul className="grid grid-cols-2 gap-4 pt-4">
            {[
              ["IA", "Computer Vision · NLP · ML"],
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
