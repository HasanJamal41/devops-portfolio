"use client";

import { useEffect, useState } from "react";
import { contact, navLinks } from "../data";
import { Icon } from "./ui";

export default function Nav(): React.JSX.Element {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(-1);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Active link: whichever section crosses a thin band 40% down the screen.
    // An observer avoids reading layout on every scroll frame.
    const ids = navLinks.map((l) => l.id);
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(ids.indexOf(e.target.id));
        });
      },
      { rootMargin: "-40% 0px -59% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) spy.observe(el);
    });

    // Hide the bar while reading downwards, bring it back on any upward scroll.
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      if (y < 200) setActive(-1);
      if (Math.abs(y - lastY) > 6) {
        setHidden(y > lastY && y > 480);
        lastY = y;
      }
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth > 1024 && setOpen(false);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize, { passive: true });
    onScroll();
    return () => {
      spy.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <div className="progress" aria-hidden="true" />
      <header className={`nav${scrolled ? " scrolled" : ""}${hidden && !open ? " hide" : ""}`} onFocus={() => setHidden(false)}>
        <div className="navin">
          <a className="brand" href="#top" title="Back to top">
            <span className="mark" aria-hidden="true">HJ</span>Hasan Jamal
          </a>
          <nav className="links" aria-label="Primary">
            {navLinks.map((l, i) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={i === active ? "active" : undefined}
                aria-current={i === active ? "true" : undefined}
              >
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
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <Icon.menu />
          </button>
        </div>
        <nav id="mobile-menu" className={`sheet${open ? " open" : ""}`} aria-label="Mobile">
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={contact.resume} download onClick={() => setOpen(false)}>
            Download résumé
          </a>
        </nav>
      </header>
    </>
  );
}
