"use client";

import { useEffect, useRef, useState } from "react";
import { contact, navLinks } from "../data";
import { Icon } from "./ui";

export default function Nav(): React.JSX.Element {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(-1);
  const progress = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.id));
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (progress.current) {
        progress.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
      }
      setScrolled(window.scrollY > 20);
      let current = -1;
      sections.forEach((s, i) => {
        if (s && s.getBoundingClientRect().top < window.innerHeight * 0.4) current = i;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="progress" ref={progress} aria-hidden="true" />
      <header className={`nav${scrolled ? " scrolled" : ""}`}>
        <div className="navin">
          <a className="brand" href="#top">
            <span className="mark">HJ</span>Hasan Jamal
          </a>
          <nav className="links" aria-label="Primary">
            {navLinks.map((l, i) => (
              <a key={l.id} href={`#${l.id}`} className={i === active ? "active" : undefined}>
                {l.label}
              </a>
            ))}
          </nav>
          <a className="btn btn-p btn-sm" href={contact.resume} download>
            <Icon.download />
            Résumé
          </a>
          <button
            className="menu-btn"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon.menu />
          </button>
        </div>
        <nav className={`sheet${open ? " open" : ""}`} aria-label="Mobile">
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      </header>
    </>
  );
}
