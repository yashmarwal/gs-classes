import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { whatsappLink, callLink, phoneNumberDisplay, instagramLink } from "@/lib/constants";
import { Phone, Mail, Instagram } from "lucide-react";

const programs = [
  { label: "Class 6–8 Foundation", slug: "class-8-foundation" },
  { label: "Class 9–10 Concept Builder", slug: "class-9-10-concept-builder" },
  { label: "Class 11–12 Advanced", slug: "class-11-12-advanced" },
];

const Footer = () => (
  <footer className="relative bg-ink text-ink-foreground overflow-hidden bg-graph-paper">
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[140px] -translate-y-1/2" />
    <div className="container relative py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <Logo className="w-10 h-10 rounded-2xl" />
            <span className="font-display font-bold text-lg">GS Classes</span>
          </div>
          <p className="text-sm opacity-60 leading-relaxed">
            Building strong mathematical foundations through concept clarity and personal attention.
          </p>
        </div>

        <div>
          <h4 className="font-body font-bold mb-4 text-xs uppercase tracking-widest opacity-50">Quick Links</h4>
          <div className="flex flex-col gap-3">
            {[
              { label: "Home", to: "/" },
              { label: "Courses", to: "/courses" },
              { label: "Facilities", to: "/facilities" },
              { label: "Formula Lab", to: "/formula-lab" },
              { label: "About", to: "/about" },
              { label: "Contact", to: "/contact" },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-sm opacity-70 hover:opacity-100 hover:text-primary-foreground transition-opacity w-fit"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-body font-bold mb-4 text-xs uppercase tracking-widest opacity-50">Programs</h4>
          <div className="flex flex-col gap-3">
            {programs.map((p) => (
              <Link
                key={p.slug}
                to={`/courses#${p.slug}`}
                className="text-sm opacity-70 hover:opacity-100 hover:text-primary-foreground transition-opacity w-fit"
              >
                {p.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-body font-bold mb-4 text-xs uppercase tracking-widest opacity-50">Contact</h4>
          <div className="flex flex-col gap-3">
            <a
              href={callLink}
              className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity w-fit"
            >
              <Phone size={16} /> {phoneNumberDisplay}
            </a>
            <a
              href={whatsappLink("Hi GS Classes, I have a question.")}
              className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity w-fit"
            >
              <WhatsAppIcon size={16} /> WhatsApp
            </a>
            <a
              href="mailto:gsclasses74@gmail.com"
              className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity w-fit"
            >
              <Mail size={16} /> gsclasses74@gmail.com
            </a>
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity w-fit"
            >
              <Instagram size={16} /> Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm opacity-50">© {new Date().getFullYear()} GS Classes. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a
            href={callLink}
            className="inline-flex items-center gap-2 text-sm font-bold bg-warm text-warm-foreground px-4 py-2 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.15),0_0_18px_4px_hsl(var(--warm)/0.4)] hover:brightness-105 transition-all"
          >
            <Phone size={16} fill="currentColor" /> Call Now
          </a>
          <a
            href={whatsappLink("Hi GS Classes")}
            className="inline-flex items-center gap-2 text-sm font-semibold bg-whatsapp/15 text-whatsapp px-4 py-2 rounded-full hover:bg-whatsapp/25 transition-colors"
          >
            <WhatsAppIcon size={16} /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
