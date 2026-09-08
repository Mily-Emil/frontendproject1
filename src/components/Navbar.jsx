import { useEffect, useState } from "react";

function formatCurrentDateTime(date) {
  return new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

function Navbar() {
  const [currentDateTime, setCurrentDateTime] = useState(() => new Date());

  useEffect(() => {
    const clock = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(clock);
  }, []);

  return (
    <nav className="brutal-border-bottom sticky top-0 z-50 bg-black/90 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-6 md:px-10">

        <a
          href="#top"
          className="text-sm font-bold uppercase tracking-tight"
        >
          EW / 26
        </a>

        <div className="hidden items-center gap-8 text-xs uppercase tracking-[0.15em] text-white/50 md:flex">
          <a
            href="#work"
            className="transition hover:text-white"
          >
            Work
          </a>

          <a
            href="#about"
            className="transition hover:text-white"
          >
            About
          </a>

          <a
            href="#skills"
            className="transition hover:text-white"
          >
            Skills & Tools
          </a>

          <a
            href="#contact"
            className="transition hover:text-white"
          >
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4 text-xs text-white/40">
          <span className="hidden tracking-[0.08em] sm:block" aria-live="polite">
            {formatCurrentDateTime(currentDateTime)}
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white" />
            AVAILABLE
          </span>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;