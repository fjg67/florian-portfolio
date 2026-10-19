import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found-grid" aria-hidden="true" />
      <p className="eyebrow"><span className="status-pulse" /> NETWORK / ROUTE ERROR</p>
      <h1>404</h1>
      <h2>CONNECTION LOST</h2>
      <p>Cette route semble s’être perdue dans le réseau.</p>
      <div className="lost-route" aria-label="Chemin entre client et serveur interrompu"><span>CLIENT</span><i /><b>×</b><i /><span>SERVER</span></div>
      <Link className="button button-primary" href="/">Reconnecter <span aria-hidden="true">↗</span></Link>
    </main>
  );
}
