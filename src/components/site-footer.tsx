import { CurrentYear } from "@/components/current-year";
import { navigation, profile } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <a className="brand-mark footer-brand" href="#accueil" aria-label="FJG — retour en haut">FJG<span>.</span></a>
        <p>Mobile <i className="dot-mobile" /> Web <i className="dot-web" /> Infrastructure <i className="dot-infra" /></p>
        <nav aria-label="Navigation de pied de page">{navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
      </div>
      <div className="footer-bottom"><span>Designed &amp; developed by {profile.name}</span><span>© <CurrentYear /> · Tous droits réservés</span><a href={`mailto:${profile.email}`}>{profile.email}</a></div>
    </footer>
  );
}
