const projects = [
  {
    number: "01",
    year: "2026",
    type: "UI/UX HCI",
    title: "Laundry UI/UX HCI project",
    description:
      "A human-computer interaction project focused on designing a clear and practical laundry experience.",
  },
  {
    number: "02",
    year: "2026",
    type: "3D / BLENDER",
    title: "3D MODELING",
    description:
      "A Blender-based 3D modeling project exploring form, materials, and visual presentation.",
  },
  {
    number: "03",
    year: "2025",
    type: "GAME DEVELOPMENT",
    title: "GAME PROJECT",
    description:
      "An experimental interactive experience exploring gameplay, visual systems, and player interaction.",
  },
];

function Projects() {
  return (
    <section id="work" className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-36">

      <div className="mb-16 flex items-end justify-between border-b border-white/20 pb-5">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/40">
            02 — Selected Work
          </p>

          <h2 className="text-5xl font-black uppercase tracking-[-0.05em] md:text-7xl">
            Projects
          </h2>
        </div>

        <span className="hidden text-xs text-white/30 md:block">
          (03)
        </span>
      </div>

      <div>
        {projects.map((project) => (
          <article
            key={project.number}
            className="group brutal-border-bottom grid grid-cols-1 gap-8 py-10 transition-colors hover:bg-white/[0.025] md:grid-cols-12"
          >

            {/* Number */}
            <div className="text-xs text-white/30 md:col-span-1">
              {project.number}
            </div>

            {/* Project visual */}
            <div className="md:col-span-5">
              <div className="aspect-[4/3] brutal-border bg-white/[0.03]">

                <div className="flex h-full items-center justify-center">
                  <span className="text-xs uppercase tracking-[0.2em] text-white/20 transition-colors group-hover:text-white/50">
                    Project Preview
                  </span>
                </div>

              </div>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between md:col-span-6">

              <div>

                <div className="mb-5 flex justify-between text-xs uppercase tracking-[0.15em] text-white/35">
                  <span>{project.type}</span>
                  <span>{project.year}</span>
                </div>

                <h3 className="mb-5 text-3xl font-bold uppercase tracking-[-0.04em] md:text-5xl">
                  {project.title}
                </h3>

                <p className="max-w-lg text-sm leading-relaxed text-white/50 md:text-base">
                  {project.description}
                </p>

              </div>

              <div className="mt-10">

                <a
                  href="#"
                  className="inline-flex items-center gap-3 border-b border-white/30 pb-2 text-xs uppercase tracking-[0.15em] transition hover:border-white"
                >
                  View Project
                  <span>↗</span>
                </a>

              </div>

            </div>

          </article>
        ))}
      </div>

    </section>
  );
}

export default Projects;