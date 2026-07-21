import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { whatsappLink, callLink } from "@/lib/constants";
import { Menu, X, Phone, Mail, ArrowUpRight } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/courses" },
  { label: "Facilities", to: "/facilities" },
  { label: "Formula Lab", to: "/formula-lab" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid ? "bg-background/90 backdrop-blur-lg shadow-[0_1px_0_hsl(var(--border))]" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2.5 group">
          <Logo className="w-10 h-10 rounded-xl group-hover:scale-105 transition-transform duration-200" />
          <span className={`font-display font-bold text-lg transition-colors ${solid ? "text-foreground" : "text-ink-foreground"}`}>
            GS Classes
          </span>
        </Link>

        <nav
          className={`hidden md:flex items-center gap-1 rounded-full p-1 border transition-colors duration-300 ${
            solid ? "bg-surface/70 border-border/60" : "bg-white/5 border-white/10 backdrop-blur-sm"
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 ${
                location.pathname === link.to
                  ? "text-primary-foreground bg-primary shadow-sm"
                  : solid
                    ? "text-muted hover:text-foreground"
                    : "text-ink-foreground/70 hover:text-ink-foreground"
              }`}
            >
              {link.label}
              {link.to === "/formula-lab" && location.pathname !== link.to && (
                <span className="absolute top-1 right-1.5 w-1.5 h-1.5 rounded-full bg-warm animate-pulse" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button size="default" variant="call" className="rounded-full gap-2" asChild>
            <a href={callLink}>
              <Phone size={16} fill="currentColor" /> Call Now
            </a>
          </Button>
          <Button size="default" className="rounded-full" asChild>
            <a href={whatsappLink("Hi GS Classes, I'd like to join.")}>Join Now</a>
          </Button>
        </div>

        <button
          className={`md:hidden relative z-[60] p-2 rounded-xl transition-colors ${menuOpen ? "invisible" : ""} ${
            solid ? "hover:bg-surface text-foreground" : "text-ink-foreground hover:bg-white/10"
          }`}
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen}
          tabIndex={menuOpen ? -1 : 0}
        >
          <Menu size={22} />
        </button>
      </div>

    </header>

    {/* Full-screen mobile nav overlay — rendered as a header sibling so its `fixed`
        positioning isn't trapped inside header's backdrop-blur containing block */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 z-50 bg-ink bg-graph-paper flex flex-col"
          >
            <div className="absolute top-16 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />

            <div className="relative container flex items-center justify-between h-16">
              <div className="flex items-center gap-2.5">
                <Logo className="w-10 h-10 rounded-xl" />
                <span className="font-display font-bold text-lg text-ink-foreground">GS Classes</span>
              </div>
              <button
                className="p-2 rounded-xl text-ink-foreground hover:bg-white/10 transition-colors"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="relative flex-1 flex flex-col justify-center px-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.08 + i * 0.06 }}
                >
                  <Link
                    to={link.to}
                    className={`group flex items-center gap-4 py-3.5 border-b border-white/10 ${
                      location.pathname === link.to ? "text-primary" : "text-ink-foreground"
                    }`}
                  >
                    <span className="text-xs font-mono text-ink-foreground/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-3xl font-bold">{link.label}</span>
                    <ArrowUpRight
                      size={20}
                      className="ml-auto opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0 transition-all"
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.4 }}
              className="relative px-8 pb-safe pb-8 pt-4 border-t border-white/10 space-y-4"
            >
              <div className="flex items-center gap-5 text-sm text-ink-foreground/60">
                <a href={callLink} className="flex items-center gap-2 hover:text-ink-foreground transition-colors">
                  <Phone size={16} /> Call
                </a>
                <a href={whatsappLink("Hi GS Classes, I have a question.")} className="flex items-center gap-2 hover:text-ink-foreground transition-colors">
                  <WhatsAppIcon size={16} /> WhatsApp
                </a>
                <a href="mailto:gsclasses74@gmail.com" className="flex items-center gap-2 hover:text-ink-foreground transition-colors">
                  <Mail size={16} /> Email
                </a>
              </div>
              <div className="flex gap-3">
                <Button size="lg" variant="call" className="flex-1 rounded-full" asChild>
                  <a href={callLink}>
                    <Phone size={18} fill="currentColor" /> Call Now
                  </a>
                </Button>
                <Button size="lg" className="flex-1 rounded-full" asChild>
                  <a href={whatsappLink("Hi GS Classes, I'd like to join.")}>Join Now</a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
