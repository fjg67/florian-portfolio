import { Reveal } from "@/components/reveal";

const process = ["CONCEVOIR", "DÉVELOPPER", "DÉPLOYER", "ACCOMPAGNER"];

export function AboutSection() {
  return (
    <section className="section-wrap about-section" id="profil">
      <Reveal className="section-heading">
        <p className="eyebrow"><span className="section-index">03 /</span> AU-DELÀ DU CODE</p>
        <h2>Plus qu’un<br /><span>développeur.</span></h2>
      </Reveal>
      <div className="about-layout">
        <Reveal className="about-copy">
          <p className="about-statement">Je relie les usages aux systèmes qui rendent les produits fiables.</p>
          <p>Mon expérience du support et du terrain m’aide à partir des besoins concrets. Je conçois ensuite des applications et des services en gardant à l’esprit leur déploiement et leur usage au quotidien.</p>
          <p>Cette vision traverse le mobile, le web et l’infrastructure : de la première décision technique à l’accompagnement des personnes qui utilisent l’outil.</p>
        </Reveal>
        <Reveal className="process-card">
          <div className="process-top"><span className="mono">DU BESOIN À L’USAGE</span><span className="live-indicator"><i /> APPROCHE DE BOUT EN BOUT</span></div>
          <div className="process-flow">
            {process.map((item, index) => <div className="process-step" key={item}><span className="process-node">{String(index + 1).padStart(2, "0")}</span><span>{item}</span>{index < process.length - 1 && <i className="process-connector" />}</div>)}
          </div>
          <div className="process-bottom"><span>COMPRENDRE LE TERRAIN</span><span>FAIRE DURER LA SOLUTION</span></div>
        </Reveal>
      </div>
    </section>
  );
}
