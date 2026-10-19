import { Reveal } from "@/components/reveal";

const process = ["BESOIN", "IDÉE", "CODE", "API", "SERVEUR", "UTILISATEUR"];

export function AboutSection() {
  return (
    <section className="section-wrap about-section" id="profil">
      <Reveal className="section-heading">
        <p className="eyebrow"><span className="section-index">03 /</span> AU-DELÀ DU CODE</p>
        <h2>Plus qu’un<br /><span>développeur.</span></h2>
      </Reveal>
      <div className="about-layout">
        <Reveal className="about-copy">
          <p className="about-statement">Je comprends l’écosystème dans son ensemble.</p>
          <p>Du développement logiciel à l’infrastructure, en passant par l’expérience terrain et le support informatique : j’aime relier les besoins concrets aux solutions qui fonctionnent.</p>
          <p>Cette polyvalence me permet d’aborder un produit au-delà de son interface — de la première idée aux services et systèmes qui le rendent possible.</p>
        </Reveal>
        <Reveal className="process-card">
          <div className="process-top"><span className="mono">END-TO-END THINKING</span><span className="live-indicator"><i /> ACTIVE</span></div>
          <div className="process-flow">
            {process.map((item, index) => <div className="process-step" key={item}><span className="process-node">{String(index + 1).padStart(2, "0")}</span><span>{item}</span>{index < process.length - 1 && <i className="process-connector" />}</div>)}
          </div>
          <div className="process-bottom"><span>FROM FIRST NEED</span><span>TO REAL-WORLD USE</span></div>
        </Reveal>
      </div>
    </section>
  );
}
