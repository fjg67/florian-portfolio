"use client";

import { motion } from "framer-motion";
import { disciplines, profile } from "@/data/portfolio";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export function Hero() {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <section className="hero section-wrap" id="accueil">
      <div className="hero-copy">
        <motion.p className="eyebrow hero-eyebrow" initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0.01 : 0.3, delay: 0.15 }}>
          <span className="status-pulse" /> BONJOUR, JE SUIS
        </motion.p>
        <motion.h1 initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} transition={{ duration: reduceMotion ? 0.01 : 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}>
          FLORIAN<br /><span>JOVE GARCIA</span>
        </motion.h1>
        <motion.div className="hero-role" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}>
          <p className="eyebrow">DÉVELOPPEUR</p>
          <p className="discipline-line">
            <span className="text-mobile">MOBILE</span><b>·</b><span className="text-web">WEB</span><b>·</b><span className="text-infra">INFRASTRUCTURE</span>
          </p>
        </motion.div>
        <motion.p className="hero-intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.68 }}>
          {profile.intro}
        </motion.p>
        <motion.div className="hero-actions" initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0.01 : 0.3, delay: 0.8 }}>
          <a className="button button-primary" href="#expertise">Explorer mon univers <span aria-hidden="true">↓</span></a>
          <a className="button button-quiet" href="#projets">Voir mes projets <span aria-hidden="true">↗</span></a>
        </motion.div>
      </div>
      <motion.div className="hero-visual" aria-label="Les trois dimensions Mobile, Web et Infrastructure"
        initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: reduceMotion ? 0.01 : 0.8, delay: 0.45 }}>
        <div className="orbit orbit-outer" />
        <div className="orbit orbit-inner" />
        <svg className="orbit-lines" viewBox="0 0 560 520" fill="none" aria-hidden="true">
          <path d="M280 258L130 150M280 258L430 150M280 258L280 423" />
          <circle cx="130" cy="150" r="4" /><circle cx="430" cy="150" r="4" /><circle cx="280" cy="423" r="4" />
        </svg>
        <div className="hero-core"><span>FJG</span><i>FLORIAN JOVE GARCIA</i></div>
        {disciplines.map((discipline) => (
          <div className={`hero-node node-${discipline.key}`} key={discipline.key}>
            <span className="node-dot" /><strong>{discipline.label}</strong><small>{discipline.technologies.slice(0, 2).join(" · ")}</small>
          </div>
        ))}
        <div className="visual-caption"><span>FIG. 01</span><span>ONE CONNECTED ECOSYSTEM</span></div>
      </motion.div>
      <a className="scroll-cue" href="#expertise"><span className="scroll-line" />SCROLL TO EXPLORE</a>
      <div className="hero-index mono" aria-hidden="true">MOBILE&nbsp; · &nbsp;WEB&nbsp; · &nbsp;INFRA</div>
    </section>
  );
}
