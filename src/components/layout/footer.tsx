import { Globe, Mail } from "lucide-react";
import { contactInfo, footerServices } from "@/lib/content";
import { Logo } from "@/components/ui/logo";
import { ExpertButton } from "@/components/ui/expert-button";
import { LinkArrow } from "@/components/ui/link-arrow";
import { LinkedInIcon, XIcon } from "@/components/ui/social-icons";

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-24 border-t border-white/5 bg-matte">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-1">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Votre partenaire technologique de confiance pour la transformation
            digitale.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted transition-colors hover:border-primary hover:text-primary"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-muted transition-colors hover:border-primary hover:text-primary"
            >
              <XIcon className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
            Nos Services
          </h3>
          <ul className="space-y-2">
            {footerServices.map((service) => (
              <li key={service.label}>
                <LinkArrow
                  href={service.href}
                  variant="muted"
                  className="text-sm font-normal"
                >
                  {service.label}
                </LinkArrow>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
            Zone d&apos;intervention
          </h3>
          <div className="flex items-start gap-2 text-sm text-muted">
            <Globe className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
            <p className="font-medium text-foreground">
              {contactInfo.location}
            </p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
            Contactez-nous
          </h3>
          <a
            href={`mailto:${contactInfo.email}`}
            className="mb-4 flex items-center gap-2 text-sm text-muted transition-colors hover:text-primary"
          >
            <Mail className="h-4 w-4 shrink-0 text-primary" aria-hidden />
            {contactInfo.email}
          </a>
          <ExpertButton href={`mailto:${contactInfo.email}`} />
        </div>
      </div>

      <div className="border-t border-white/5 px-6 py-6">
        <p className="text-center text-xs text-muted">
          © {new Date().getFullYear()} Mabanza Software. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
