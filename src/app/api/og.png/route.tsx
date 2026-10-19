import { createSocialCard } from "@/components/social-card";

export const alt = "Florian Jove Garcia — Développeur Mobile, Web & Infrastructure";
export const dynamic = "force-static";

export function GET() {
  return createSocialCard();
}
