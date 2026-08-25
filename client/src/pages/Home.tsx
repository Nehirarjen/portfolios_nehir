/* Swiss Editorial Notebook: asymmetric journal layout, metadata labels, restrained motion, and paper-like surfaces. */
import { ArrowUpRight, CalendarDays, Menu, X } from "lucide-react";
import { useState } from "react";
import SmoothScroll from "@/components/ui/smooth-scroll";

const entries = [
  {
    id: "01",
    date: "18 AUG 2026",
    tag: "QUARTILE 01",
    title: "A new year, a clearer voice",
    intro:
      "Starting Year 2 means becoming more intentional: not only with the English I use, but with how I explain technical ideas to another person.",
    body: "This first entry sets the direction for my portfolio. I want to document the moments where something became clearer — a new phrase, a better structure, or a more confident way to present my work.",
    image: "/manus-storage/editorial-desk_42aee227.png",
  },
  {
    id: "02",
    date: "25 AUG 2026",
    tag: "PROJECT 01",
    title: "Describing a technical idea",
    intro:
      "Good technical English is less about sounding complicated and more about making a complex idea easy to follow.",
    body: "For this project I practised breaking information into a beginning, a useful middle, and a clear next step. The hardest part was leaving out details that did not help the reader — a small edit that made the whole explanation stronger.",
    image: "/manus-storage/editorial-circuit_a80fe743.png",
  },
  {
    id: "03",
    date: "01 SEP 2026",
    tag: "REFLECTION",
    title: "What I learned by revising",
    intro:
      "A first draft shows what I know. Revision shows what I actually want to say.",
    body: "Looking back at my first attempts, I can see how much structure changes the tone of a text. I am learning to read my own work like someone who has never seen the project before — and to make space for the reader to understand it.",
    image: "/manus-storage/editorial-reflection_5106f61f.png",
  },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <SmoothScroll>
      <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Nehir's Year 2 Portfolio">
          <img src="/manus-storage/nehir-n-mark_39bf39b1.png" alt="Abstract N mark" />
          <span>NEHIR / Y2</span>
        </a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          <button onClick={() => { scrollToId("journal"); setMenuOpen(false); }}>Journal</button>
          <a href="mailto:nehir@example.com">Say hello <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main id="top">
        <section className="hero-wrap"><span className="index-spine" aria-hidden="true" />
          <aside className="side-index" aria-label="Portfolio details">
            <span className="index-label">TBZ / ICT ENGLISH</span>
            <span className="index-year">2026—27</span>
            <span className="index-rule" />
            <span className="index-caption">A living record<br />of learning.</span>
          </aside>
          <div className="hero-content">
            <p className="eyebrow"><span className="blue-dot" /> YEAR 2 PORTFOLIO <span className="slash">/</span> 001</p>
            <h1>Learning in<br /><em>public.</em></h1>
            <p className="hero-lead">A working journal for ICT English at the Technische Berufsschule Zürich. Notes on projects, language, and the small shifts that make my work clearer.</p>
            <button className="text-link" onClick={() => scrollToId("journal")}>Read the journal <ArrowUpRight size={18} /></button>
          </div>
          <div className="hero-note">
            <CalendarDays size={18} />
            <span><strong>Last updated</strong><br />25 August 2026</span>
          </div>
        </section>

        <section className="journal-section" id="journal"><span className="index-spine" aria-hidden="true" />
          <div className="entry-list">
            {entries.map((entry) => (
              <article className={`entry entry-sticky entry-${entry.id}`} key={entry.id}>
                <div className="entry-meta"><span className="entry-number">{entry.id}</span><span className="entry-date">{entry.date}</span></div>
                <div className="entry-main">
                  <div className="entry-copy">
                    <p className="entry-tag">{entry.tag}</p>
                    <h3>{entry.title}</h3>
                    <p className="entry-intro">{entry.intro}</p>
                    <p className="entry-body">{entry.body}</p>
                  </div>
                  <div className="entry-image"><img src={entry.image} alt="" /></div>
                </div>
              </article>
            ))}
          </div>
        </section>

      </main>

      </div>
    </SmoothScroll>
  );
}
