import { education, passions } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";

export function EducationSection() {
  return (
    <>
      <section className="section-wrap education-section" id="formation">
        <Reveal className="section-heading">
          <p className="eyebrow"><span className="section-index">06 /</span> FORMATION</p>
          <h2>Apprendre.<br /><span>Construire. Continuer.</span></h2>
        </Reveal>
        <div className="education-list">
          {education.map((item, index) => (
            <Reveal key={`${item.title}-${index}`} delay={index * 0.035}>
              <article className="education-item"><span className="mono education-index">{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{item.title}</h3>{item.detail && <p>{item.detail}</p>}</div>
                <div className="education-school">{item.school && <span>{item.school}</span>}{item.status && <small>{item.status}</small>}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="section-wrap beyond-section" aria-labelledby="beyond-title">
        <Reveal className="beyond-heading"><p className="eyebrow">BEYOND CODE</p><h2 id="beyond-title">L’équilibre se construit<br /><span>aussi ailleurs.</span></h2></Reveal>
        <div className="passion-grid">
          {passions.map((passion, index) => <Reveal key={passion.title} delay={index * 0.06}><article className="passion-card"><span className="mono">{passion.symbol}</span><h3>{passion.title}</h3><p>{passion.detail}</p><i aria-hidden="true">↗</i></article></Reveal>)}
        </div>
      </section>
    </>
  );
}
