import Biodata from "../props/PersonCard";

function Contact() {
  return (
    <section
      id="contact"
      className="brutal-border-top mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-36"
    >

      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">

        <div className="lg:col-span-4">

          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/40">
            05 — Contact
          </p>

          <p className="max-w-xs text-sm leading-relaxed text-white/40">
            Have an idea, project, or opportunity?
            Let's talk.
          </p>

        </div>

        <div className="lg:col-span-8">
          <div className="mb-10 max-w-4xl">
            <Biodata
              name="Emiliano Waturandang"
              age={23}
              hobby="Video Editor, 3D Blender, and Designer"
              city="Manado"
            />
          </div>

          <a
            href="mailto:hello@example.com"
            className="group block"
          >

            <h2 className="text-[13vw] font-black uppercase leading-[0.75] tracking-[-0.08em] transition-opacity group-hover:opacity-50 md:text-[9vw]">
              Let's
              <br />
              Talk
            </h2>

            <div className="mt-10 flex items-center gap-4 border-b border-white/20 pb-5 text-xs uppercase tracking-[0.2em] text-white/50">
              <span>warsoedo@gmail.com</span>
              <span>↗</span>
            </div>

          </a>

          <div className="mt-10 flex flex-wrap gap-8 text-xs uppercase tracking-[0.15em] text-white/40">

            <a
              href="#"
              className="transition hover:text-white"
            >
              GitHub ↗
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              LinkedIn ↗
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              Instagram ↗
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;