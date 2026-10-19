import { AboutSection } from "@/components/sections/about";
import { ArchitectureSection } from "@/components/sections/architecture";
import { ContactSection } from "@/components/sections/contact";
import { EducationSection } from "@/components/sections/education";
import { ExperienceSection } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { TechnicalDna } from "@/components/sections/technical-dna";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { IntroOverlay } from "@/components/intro-overlay";

export default function Home() {
  return (
    <>
      <IntroOverlay />
      <SiteHeader />
      <a className="skip-link" href="#main-content">Aller au contenu</a>
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <TechnicalDna />
        <AboutSection />
        <ArchitectureSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
