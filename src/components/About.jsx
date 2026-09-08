function About() {
  return (
    <section
      id="about"
      className="brutal-border-top mx-auto grid max-w-[1600px] grid-cols-1 lg:grid-cols-12"
    >

      <div className="border-b border-white/15 p-6 md:p-10 lg:col-span-4 lg:border-b-0 lg:border-r">
        <p className="text-xs uppercase tracking-[0.2em] text-white/40">
          03 — About
        </p>
      </div>

      <div className="p-6 md:p-10 lg:col-span-8">

        <h2 className="max-w-5xl text-4xl font-bold uppercase leading-[0.95] tracking-[-0.05em] md:text-6xl lg:text-7xl">
          I like turning
          <span className="text-white/30"> ideas </span>
          into simple,
          <span className="text-white/30"> functional </span>
          digital experiences.
        </h2>

        <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2">

          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.15em] text-white/30">
              Based in
            </p>

            <p className="text-sm uppercase">
              Indonesia
            </p>
          </div>

          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.15em] text-white/30">
              Focus
            </p>

            <p className="text-sm uppercase leading-relaxed">
              3D modeling
              <br />
              UI / UX
              <br />
              Designer
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;