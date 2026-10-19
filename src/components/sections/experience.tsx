import { experiences } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";

export function ExperienceSection() {
  return (
    <section className="section-wrap experience-section" id="parcours">
      <Reveal className="section-heading experience-heading">
        <div><p className="eyebrow"><span className="section-index">04 /</span> MON PARCOURS</p><h2>Du terrain<br /><span>au développement.</span></h2></div>
        <p className="section-lede">Des contextes différents, une même envie : rendre la technologie utile et fiable.</p>
      </Reveal>
      <div className="timeline">
        {experiences.map((item, index) => (
          <Reveal className="timeline-item" key={`${item.company}-${item.period}`} delay={index * 0.04}>
            <div className="timeline-marker"><span /></div>
            <div className="timeline-content">
              <div className="timeline-meta"><span className="timeline-period">{item.period}</span>{item.current && <span className="current-badge">POSTE ACTUEL</span>}</div>
              <h3>{item.company}</h3>
              <p className="timeline-role">{item.role}</p>
              {item.context && <p className="timeline-context">{item.context}</p>}
              {item.highlights.length > 0 && <ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>}
              {item.featured && (
                <div className="featured-work"><span className="featured-badge"><i /> DÉVELOPPEMENT INTERNE</span><p>{item.featured}</p></div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
