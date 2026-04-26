import charFront from "@/assets/char-3d-front.png";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-cream pt-32 pb-20 lg:pt-40 lg:pb-32"
    >
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent/15 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 h-[28rem] w-[28rem] rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-none gap-12 px-6 lg:grid-cols-12 lg:gap-8 lg:px-12">
        <div className="lg:col-span-6 flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Available for collaborations
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[0.98] text-balance text-primary sm:text-5xl lg:text-6xl xl:text-7xl">
            I design <em className="text-accent not-italic">digital</em> products with taste.
          </h1>

          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            AI & Big Data Engineer, full-stack web developer.
            I turn ideas into elegant, high-performance, and intelligent platforms —
            from ML models to the final interface.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:shadow-deep hover:-translate-y-0.5"
            >
              View my work
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>

            <a
              href="/CV_Mame_Fatou_Wade.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/60 px-7 py-3.5 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
                />
              </svg>
              Download my resume
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-border pt-8 max-w-md">
            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                Delivered websites
              </dt>
              <dd className="mt-1 font-display text-3xl text-primary">6+</dd>
            </div>

            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                Years coding
              </dt>
              <dd className="mt-1 font-display text-3xl text-primary">5</dd>
            </div>

            <div>
              <dt className="text-xs uppercase tracking-widest text-muted-foreground">
                AI stack
              </dt>
              <dd className="mt-1 font-display text-3xl text-primary">∞</dd>
            </div>
          </dl>
        </div>

        {/* RIGHT — single 3D avatar, transparent */}
        <div className="relative lg:col-span-6 flex items-center justify-center">
          <div className="relative mx-auto flex h-[36rem] w-full items-end justify-center lg:h-[40rem]">
            {/* Soft warm halo behind */}
            <div className="pointer-events-none absolute inset-x-0 bottom-8 -z-10 h-2/3 rounded-[3rem] bg-gradient-warm opacity-60 blur-3xl" />

            <img
              src={charFront}
              alt="3D avatar — veiled woman coding on a laptop"
              width={968}
              height={1152}
              className="relative z-10 h-full w-auto object-contain drop-shadow-[0_35px_40px_rgba(60,30,15,0.45)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}