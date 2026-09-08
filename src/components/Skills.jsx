const skills = [
  "Blender",
  "Figma",
  "Canva",
  "Photoshop",
  "After Effects",
  "Illustrator",
  "Davinci Resolve",
  "Unity",
];

function Skills() {
  return (
    <section
      id="skills"
      className="brutal-border-top mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-36"
    >

      <div className="mb-16">
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/40">
          04 — Toolkit
        </p>

        <h2 className="text-5xl font-black uppercase tracking-[-0.05em] md:text-7xl">
          Skills & Tools
        </h2>
      </div>

      <div className="grid grid-cols-1 border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">

        {skills.map((item, index) => (
          <div
            key={item}
            className="reveal brutal-border-r brutal-border-bottom group relative min-h-40 border-r border-b border-white/15 p-6"
          >

            <span className="absolute right-5 top-5 text-xs text-white/20">
              0{index + 1}
            </span>

            <div className="flex h-full items-end">
              <h3 className="text-2xl font-bold uppercase tracking-[-0.04em]">
                {item}
              </h3>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;