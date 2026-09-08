import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Project from "./components/Project";
import About from "./components/About";
import Stack from "./components/Skills";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

function App() {
  return (
    <main className="noise min-h-screen bg-black text-white">
      <Navbar />

      <Hero />

      <Project />

      <About />

      <Skills />

      <Contact />

      <footer className="brutal-border-top px-6 py-6 md:px-10">
        <div className="flex flex-col justify-between gap-3 text-xs uppercase tracking-[0.15em] text-white/40 md:flex-row">
          <span>© 2026 Emiliano Waturandang</span>
          <span>Built with React + Tailwind</span>
          <span>Manado / Indonesia</span>
        </div>
      </footer>
    </main>
  );
}

export default App;