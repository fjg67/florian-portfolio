import { disciplines, skillGroups } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";

export function TechnicalDna() {
  return (
    <section className="section-wrap dna-section" id="expertise">
      <Reveal className="section-heading">
        <p className="eyebrow"><span className="section-index">01 /</span> MON ADN TECHNIQUE</p>
        <h2>Trois expertises.<br /><span>Une seule vision.</span></h2>
        <p className="section-lede">Du terminal utilisateur jusqu’au serveur, chaque couche fait partie du même écosystème.</p>
      </Reveal>
      <div className="discipline-grid">
        {disciplines.map((item, index) => (
          <Reveal key={item.key} delay={index * 0.08}>
            <article className={`discipline-card tone-${item.key}`}>
              <div className="card-topline"><span className="mono">{item.number}</span><span className="card-signal"><i /> CONNECTED</span></div>
              <div className="discipline-symbol" aria-hidden="true"><span>{item.key === "mobile" ? "▯" : item.key === "web" ? "⌘" : "⌬"}</span></div>
              <h3>{item.label}</h3>
              <p>{item.summary}</p>
              <div className="tech-list">{item.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
              <div className="card-bottomline"><span>EXPLORE DOMAIN</span><span aria-hidden="true">↗</span></div>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal className="ecosystem-note">
        <span className="ecosystem-dots"><i className="dot-mobile" /><i className="dot-web" /><i className="dot-infra" /></span>
        <p>Une vision de bout en bout <span>— de l’application au système qui la propulse.</span></p>
      </Reveal>
      <div className="stack-preview">
        <Reveal><p className="eyebrow stack-label"><span className="section-index">02 /</span> OUTILS & TECHNOLOGIES</p></Reveal>
        <div className="stack-groups">
          {skillGroups.map((group, index) => (
            <Reveal key={group.label} delay={index * 0.035}>
              <div className={`stack-group tone-${group.tone}`}>
                <h3><span />{group.label}</h3>
                <div>{group.items.map((item) => <span className="skill-chip" key={item}>{item}</span>)}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
