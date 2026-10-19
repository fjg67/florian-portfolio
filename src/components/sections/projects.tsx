"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

function ProjectArtwork({ type }: { type: (typeof projects)[number]["visual"] }) {
  if (type === "inventory") {
    return (
      <div className="art-inventory" aria-hidden="true">
        <div className="inventory-desktop"><div className="mock-topbar"><i /><i /><i /><span>INVENTORY / OVERVIEW</span></div><div className="mock-dashboard"><div className="mock-sidebar"><b>FJG</b><i /><i /><i /><i /></div><div className="mock-main"><div className="mock-title"><span>Stock overview</span><span className="mock-button">+ Add item</span></div><div className="mock-metrics"><i /><i /><i /></div><div className="mock-table"><b /><b /><b /><i /><i /><i /><i /><i /><i /></div></div></div></div>
        <div className="inventory-phone"><div className="phone-speaker" /><div className="phone-ui"><span>INVENTORY</span><strong>Stock<br />overview</strong><i /><i /><i /></div></div>
        <div className="sync-path"><span>ARTICLE</span><i /><span>SCAN</span><i /><span>STOCK</span><i /><span>SYNC</span></div>
      </div>
    );
  }
  if (type === "vault") {
    return <div className="art-vault" aria-hidden="true"><div className="vault-orb" /><div className="vault-card"><span>VAULT / PERSONAL</span><b>Balance</b><i /><div><em /><em /><em /><em /></div><small>PRIVATE · SECURE</small></div><div className="vault-chart"><span /><span /><span /><span /><span /><span /><span /></div></div>;
  }
  return <div className="art-yams" aria-hidden="true"><div className="die die-one"><i /><i /><i /><i /><i /></div><div className="die die-two"><i /><i /><i /></div><div className="score-panel"><span>YAM’S / SCORE</span><b>— —</b><i /><i /><i /></div><div className="yams-spark">✳</div></div>;
}

export function ProjectsSection() {
  const [hovered, setHovered] = useState<string | null>(null);
  const reduceMotion = usePrefersReducedMotion();
  return (
    <section className="section-wrap projects-section" id="projets">
      <Reveal className="section-heading projects-heading">
        <div><p className="eyebrow"><span className="section-index">05 /</span> SELECTED PROJECTS</p><h2>Des idées.<br /><span>Du code. Des produits.</span></h2></div>
        <p className="section-lede">Des outils conçus pour répondre à des usages concrets.</p>
      </Reveal>
      <div className="project-grid">
        {projects.map((project, index) => (
          <Reveal className={index === 0 ? "project-wrap project-featured" : "project-wrap"} key={project.name} delay={index * 0.07}>
            <motion.article className={`project-card project-${project.visual} ${hovered === project.name ? "is-hovered" : ""}`}
              onMouseEnter={() => setHovered(project.name)} onMouseLeave={(event) => {
                setHovered(null);
                event.currentTarget.style.setProperty("--tilt-x", "0deg");
                event.currentTarget.style.setProperty("--tilt-y", "0deg");
              }}
              onMouseMove={(event) => {
                if (reduceMotion || window.matchMedia("(hover: none)").matches) return;
                const bounds = event.currentTarget.getBoundingClientRect();
                const x = (event.clientX - bounds.left) / bounds.width - 0.5;
                const y = (event.clientY - bounds.top) / bounds.height - 0.5;
                event.currentTarget.style.setProperty("--tilt-x", `${-y * 3}deg`);
                event.currentTarget.style.setProperty("--tilt-y", `${x * 3}deg`);
              }}
            >
              <div className="project-art"><ProjectArtwork type={project.visual} /></div>
              <div className="project-details">
                <div className="project-meta"><span className="mono">{project.number}</span><span>{project.category}</span></div>
                <h3>{project.name}<span aria-hidden="true">↗</span></h3>
                <p>{project.description}</p>
                <div className="project-tags">{project.platforms.map((platform) => <span key={platform}>{platform}</span>)}</div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </div>
      <Reveal className="project-footnote"><span className="mono">NOTE /</span> Visuels conceptuels — les captures réelles seront ajoutées ultérieurement.</Reveal>
    </section>
  );
}
