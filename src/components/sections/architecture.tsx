"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const layers = [
  { name: "MOBILE", detail: "Client", tone: "mobile", icon: "▯" },
  { name: "API", detail: "Interface", tone: "web", icon: "↔" },
  { name: "BACK-END", detail: "Services", tone: "web", icon: "⌘" },
  { name: "DATABASE", detail: "Données", tone: "web", icon: "▤" },
  { name: "DOCKER", detail: "Conteneurs", tone: "infra", icon: "◇" },
  { name: "SERVER", detail: "Infrastructure", tone: "infra", icon: "▥" },
] as const;

export function ArchitectureSection() {
  const reduceMotion = usePrefersReducedMotion();

  return (
    <section className="architecture-section">
      <div className="section-wrap">
        <Reveal className="architecture-heading">
          <p className="eyebrow"><span className="section-index">SYSTEM /</span> HOW I CONNECT THINGS</p>
          <h2>Une application n’est<br /><span>jamais seule.</span></h2>
          <p className="section-lede">Un aperçu conceptuel des couches qui peuvent relier un client à son infrastructure.</p>
        </Reveal>
        <div className="architecture-flow">
          {layers.map((layer, index) => (
            <div className="architecture-stage" key={layer.name}>
              <motion.div
                className={`architecture-node tone-${layer.tone}`}
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: reduceMotion ? 0.01 : 0.35, delay: reduceMotion ? 0 : index * 0.12 }}
              >
                <span className="architecture-icon" aria-hidden="true">{layer.icon}</span>
                <strong>{layer.name}</strong>
                <small>{layer.detail}</small>
              </motion.div>
              {index < layers.length - 1 && (
                <div className="architecture-connector" aria-hidden="true">
                  <span>↓</span>
                  <motion.i
                    initial={{ scaleY: reduceMotion ? 1 : 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true, amount: 0.9 }}
                    transition={{ duration: reduceMotion ? 0.01 : 0.35, delay: reduceMotion ? 0 : index * 0.12 + 0.12 }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        <Reveal className="architecture-response" delay={0.45}>
          <span className="response-line" aria-hidden="true" />
          <span className="response-status"><i /> RESPONSE / CONNECTED</span>
          <p>Une métaphore d’architecture — chaque projet a ses propres choix techniques.</p>
        </Reveal>
      </div>
    </section>
  );
}
