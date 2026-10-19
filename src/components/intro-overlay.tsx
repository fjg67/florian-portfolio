"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const INTRO_KEY = "fjg-intro-seen";
const INTRO_DURATION = 1900;

function markIntroSeen() {
  try {
    window.sessionStorage.setItem(INTRO_KEY, "true");
  } catch {
    return;
  }
}

export function IntroOverlay() {
  const [visible, setVisible] = useState(false);
  const skipButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const reduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    let alreadySeen = false;
    try {
      alreadySeen = window.sessionStorage.getItem(INTRO_KEY) === "true";
    } catch {
      alreadySeen = false;
    }

    if (alreadySeen || reduceMotion || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      markIntroSeen();
      return;
    }

    let timeout = 0;
    const frame = window.requestAnimationFrame(() => {
      markIntroSeen();
      setVisible(true);
      timeout = window.setTimeout(() => setVisible(false), INTRO_DURATION);
    });
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
    };
  }, [reduceMotion]);

  useEffect(() => {
    if (!visible) return;
    const activeElement = document.activeElement;
    previousFocusRef.current = activeElement instanceof HTMLElement && activeElement !== document.body ? activeElement : null;
    skipButtonRef.current?.focus();
    const skipOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setVisible(false);
    };
    window.addEventListener("keydown", skipOnEscape);
    return () => {
      window.removeEventListener("keydown", skipOnEscape);
      const focusTarget = previousFocusRef.current ?? document.querySelector<HTMLAnchorElement>("#accueil .hero-actions a");
      focusTarget?.focus();
    };
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="intro-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Introduction de Florian Jove Garcia"
          onKeyDown={(event) => {
            if (event.key === "Tab") {
              event.preventDefault();
              skipButtonRef.current?.focus();
            }
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduceMotion ? 0.1 : 0.45, ease: "easeInOut" }}
        >
          <div className="intro-grid" aria-hidden="true" />
          <div className="intro-content">
            <svg className="intro-network" viewBox="0 0 240 150" aria-hidden="true">
              <path className="intro-branch intro-branch-mobile" d="M120 55L47 112" />
              <path className="intro-branch intro-branch-web" d="M120 55L120 124" />
              <path className="intro-branch intro-branch-infra" d="M120 55L193 112" />
              <circle className="intro-center" cx="120" cy="50" r="5" />
              <circle className="intro-point intro-point-mobile" cx="42" cy="116" r="4" />
              <circle className="intro-point intro-point-web" cx="120" cy="130" r="4" />
              <circle className="intro-point intro-point-infra" cx="198" cy="116" r="4" />
            </svg>
            <div className="intro-disciplines" aria-hidden="true">
              <span className="text-mobile">MOBILE</span>
              <span className="text-web">WEB</span>
              <span className="text-infra">INFRA</span>
            </div>
            <p className="intro-name">FLORIAN JOVE GARCIA</p>
            <p className="intro-role">DÉVELOPPEUR MOBILE · WEB · INFRASTRUCTURE</p>
          </div>
          <button className="intro-skip" ref={skipButtonRef} onClick={() => setVisible(false)}>
            PASSER L’INTRO <span aria-hidden="true">↗</span>
          </button>
          <span className="intro-counter mono" aria-hidden="true">FJG / 001</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
