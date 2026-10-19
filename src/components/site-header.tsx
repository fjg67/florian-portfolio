"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/data/portfolio";
import { Terminal } from "@/components/terminal";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function SiteHeader() {
  const [activeSection, setActiveSection] = useState("accueil");
  const [menuOpen, setMenuOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);
  const reduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      progressRef.current?.style.setProperty("transform", `scaleX(${progress})`);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.2, 0.5, 1] },
    );
    document.querySelectorAll<HTMLElement>("main section[id]").forEach((section) => observer.observe(section));
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" ref={progressRef} />
      <header className="site-header">
        <a className="brand-mark" href="#accueil" aria-label="FJG — accueil" onClick={closeMenu}>FJG<span>.</span></a>
        <nav className="desktop-nav" aria-label="Navigation principale">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className={activeSection === item.href.slice(1) ? "nav-link active" : "nav-link"}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <span className="discipline-dots" aria-label="Mobile, Web, Infrastructure">
            <i className="dot-mobile" /><i className="dot-web" /><i className="dot-infra" />
          </span>
          <button className="terminal-trigger" onClick={() => { setMenuOpen(false); setTerminalOpen(true); }} aria-label="Ouvrir le terminal" title="Open terminal">&gt;_</button>
          <button
            className={menuOpen ? "menu-toggle is-open" : "menu-toggle"}
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span /><span />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-nav"
            aria-label="Navigation mobile"
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: reduceMotion ? 0.12 : 0.22 }}
          >
            {navigation.map((item, index) => (
              <a key={item.href} href={item.href} onClick={closeMenu} style={{ transitionDelay: `${index * 25}ms` }}>
                <span className="mono">{String(index + 1).padStart(2, "0")}</span>{item.label}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
      <Terminal open={terminalOpen} onClose={() => setTerminalOpen(false)} />
    </>
  );
}
