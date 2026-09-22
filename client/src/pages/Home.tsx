/* Swiss Editorial Notebook: asymmetric journal layout, metadata labels, restrained motion, and paper-like surfaces. */
import { ArrowUpRight, CalendarDays, Menu, X } from "lucide-react";
import { useState } from "react";
import SmoothScroll from "@/components/ui/smooth-scroll";
import entry01Photo from "@/photos/img.png";

const entries = [
  {
    id: "01",
    date: "18 AUG 2026",
    tag: "QUARTILE 01",
    title: "A new year, a clearer voice",
    intro:
      "Starting Year 2 means becoming more intentional: not only with the English I use, but with how I explain technical ideas to another person.",
    body: "This first entry sets the direction for my portfolio. I want to document the moments where something became clearer — a new phrase, a better structure, or a more confident way to present my work.",
    image: entry01Photo,
  },
  {
    id: "02",
    date: "25 AUG 2026",
    tag: "PROJECT 01",
    title: "Situation:",
    intro:
      "You are a second-year apprentice who is about to move to another department in your (real) company. Your superior gave you the task to create a booklet for the apprentice who is about to take over your job. Start thinking about the various tasks you do at work, which ones you like, and realistically, which ones could be put in this learning documentation.",
    body: `Brainstorming and background info:

• What's the name of your company?
Bucher-Guyer AG

• What's your current department?
None, I don't work at the company yet, I'm completing education at another company for the first two years.

• What tasks do you carry out on a regular basis?
A task i do aon a regular basis are user tasks, even though they change from time to time.

• Which of these is a complex task?
They can get complex when, for example, a merging or pipeline error occurs.

• Why do you like or dislike doing this task?
They get difficult pretty quickly, but otherwise, they're nice and entertaining to do.

• How do you manage this complex task?
By getting help or support from my coworkers and instructor.

• How can you organise clear and effective explanations of a complex task for your classmate?
By explaining the structure of user stories, for example "definition of done".

• What are the dos and the don’ts with regard to this task?
Don't do anything with the git structre you don't understand, as it risks doing something wrong.

• What issues would you have to deal with if you forgot an essential step of your complex task?
If there's something wrong with my code, the reviewer of my story leaves a comment with requested changes.

• What skills do you need to complete these tasks? 
Coding skills.

• Start to list below some specific vocabular terms you need to know to do the various tasks at your work:
User story, scrum, git, branch, backend, frontend.`,
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
                <div className={`entry-main${entry.image ? "" : " entry-main-no-image"}`}>
                  <div className="entry-copy">
                    <p className="entry-tag">{entry.tag}</p>
                    <h3>{entry.title}</h3>
                    <p className="entry-intro">{entry.intro}</p>
                    <p className="entry-body">{entry.body}</p>
                  </div>
                  {entry.image && (
                    <div className="entry-image"><img src={entry.image} alt={entry.id === "01" ? "Coastal village beside clear blue water" : ""} /></div>
                  )}
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
