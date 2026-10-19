"use client";

import { FormEvent, useState } from "react";
import { profile } from "@/data/portfolio";
import { Reveal } from "@/components/reveal";

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [mailState, setMailState] = useState<"idle" | "ready" | "error">("idle");

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyError(false);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopyError(true);
    }
  }

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const subject = String(formData.get("subject") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const emailField = event.currentTarget.elements.namedItem("email");
    if (!name || !email || !subject || !message || !(emailField instanceof HTMLInputElement) || !emailField.validity.valid) {
      setMailState("error");
      return;
    }
    const body = `Nom : ${name}\nEmail : ${email}\n\n${message}`;
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setMailState("ready");
  }

  return (
    <section className="contact-section" id="contact">
      <div className="section-wrap contact-inner">
        <Reveal className="contact-heading">
          <p className="eyebrow"><span className="status-pulse" /> READY TO CONNECT?</p>
          <h2>CONSTRUISONS<br /><span>QUELQUE CHOSE</span><br />D’INCROYABLE.</h2>
          <p className="contact-lede">Une idée, un projet ou simplement envie d’échanger ?<br />Je serai ravi d’en discuter.</p>
          <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<span aria-hidden="true">↗</span></a>
          <p className="contact-location"><span className="location-pin">⌖</span> {profile.location}</p>
          <div className="contact-actions">
            <a className="button button-primary" href={`mailto:${profile.email}`}>Me contacter <span aria-hidden="true">↗</span></a>
            <button className="button button-quiet" onClick={copyEmail} aria-live="polite">{copied ? "✓ Email copié" : copyError ? "Copie indisponible" : "Copier mon email"}</button>
          </div>
          <form className="contact-form" onSubmit={submitForm} noValidate>
            <p className="eyebrow">OU ÉCRIVEZ-MOI UN MESSAGE</p>
            <div className="form-row"><label>Nom<input name="name" autoComplete="name" required /></label><label>Email<input name="email" type="email" autoComplete="email" required /></label></div>
            <label>Sujet<input name="subject" required /></label>
            <label>Message<textarea name="message" rows={4} required /></label>
            <button type="submit" className="button button-primary">Ouvrir mon application e-mail <span aria-hidden="true">↗</span></button>
            <p className={mailState === "error" ? "form-feedback form-error" : "form-feedback"} aria-live="polite">
              {mailState === "ready" ? "Votre application e-mail devrait s’ouvrir avec le message prérempli. Rien n’est envoyé depuis ce site." : mailState === "error" ? "Veuillez renseigner tous les champs avec une adresse e-mail valide." : "Le message est préparé dans votre application e-mail ; aucun envoi serveur n’est configuré."}
            </p>
          </form>
        </Reveal>
        <div className="contact-signature" aria-hidden="true"><span>FJG</span><div><i className="dot-mobile" /><i className="dot-web" /><i className="dot-infra" /></div></div>
      </div>
    </section>
  );
}
