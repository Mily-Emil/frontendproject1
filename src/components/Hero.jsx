function Hero() {
  return (
    <section
      id="top"
      className="mx-auto grid min-h-[calc(100vh-64px)] max-w-[1600px] grid-cols-1 border-x border-white/10 lg:grid-cols-12"
    >

      {/* Left */}
      <div className="flex flex-col justify-between border-b border-white/15 p-6 md:p-10 lg:col-span-8 lg:border-b-0 lg:border-r">

        <div>
          <p className="mb-8 text-xs uppercase tracking-[0.2em] text-white/40">
            01 — Introduction
          </p>

          <h1 className="text-[11vw] font-black uppercase leading-[0.75] tracking-[-0.08em] md:text-[8vw] lg:text-[5vw]">
            Emiliano
            <br />
            Waturandang
          </h1>
        </div>

        <div className="mt-20 max-w-xl">
          <p className="text-lg leading-relaxed text-white/60 md:text-xl">
            Computer Science student, 3D designer, and UI/UX designer. 
            I enjoy creating digital experiences that are both functional and visually appealing. My passion lies in turning ideas into reality through design and technology.
          </p>
        </div>

      </div>

      {/* Right */}
      <div className="flex flex-col justify-between p-6 md:p-10 lg:col-span-4">

        <div className="flex justify-between text-xs uppercase tracking-[0.15em] text-white/40">
          <span>Portfolio</span>
          <span>2026</span>
        </div>

        <div className="my-16">

          <div className="mb-5 text-xs uppercase tracking-[0.2em] text-white/40">
            Currently
          </div>

          <div className="brutal-border p-5">
            <p className="text-sm uppercase leading-relaxed">
              Studying Computer Science
              <br />
              & building digital products.
            </p>
          </div>

        </div>

        <a
          href="#work"
          className="group flex items-center justify-between border-t border-white/20 pt-5 text-xs uppercase tracking-[0.2em]"
        >
          <span>Scroll to explore</span>

          <span className="transition-transform duration-300 group-hover:translate-y-2">
            ↓
          </span>
        </a>

      </div>

    </section>
  );
}

export default Hero;