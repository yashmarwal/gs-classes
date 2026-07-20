import { useState } from "react";
import { motion } from "framer-motion";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { whatsappLink, emailLink, callLink, phoneNumberDisplay } from "@/lib/constants";
import { breadcrumbJsonLd } from "@/lib/seo";
import { Phone, Mail, Clock } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const Contact = () => {
  const [name, setName] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi GS Classes, I'm ${name}. Class: ${studentClass}. ${message}`;
    window.open(whatsappLink(text), "_blank");
  };

  return (
    <div className="min-h-screen">
      <Seo
        title="Contact Us — GS Classes Mathematics Coaching"
        description="Get in touch with GS Classes on WhatsApp, call, or email. We respond within a few hours — no spam, no pressure."
        path="/contact"
        jsonLd={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <section className="relative bg-ink bg-graph-paper pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[130px] -translate-y-1/3" />
        <div className="container relative text-center">
          <motion.span {...fadeInUp} className="inline-block text-xs font-bold uppercase tracking-widest text-warm mb-3">
            Contact
          </motion.span>
          <motion.h1 {...fadeInUp} className="text-4xl md:text-5xl font-bold text-ink-foreground mb-4">
            Get in Touch
          </motion.h1>
          <motion.p {...fadeInUp} className="text-ink-foreground/60 max-w-lg mx-auto text-lg">
            We respond within a few hours. No spam, no pressure.
          </motion.p>
        </div>
      </section>

      <Section>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Quick Contact */}
          <motion.div {...fadeInUp} className="space-y-5">
            <h2 className="text-2xl font-bold text-foreground mb-6">Quick Contact</h2>

            <a
              href={callLink}
              className="relative flex items-center gap-4 p-5 bg-warm rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.15),0_0_20px_5px_hsl(var(--warm)/0.4)] hover:brightness-105 transition-all duration-300"
            >
              <span className="absolute -top-2 -right-2 text-[10px] font-bold uppercase tracking-widest bg-ink text-ink-foreground px-2 py-0.5 rounded-full shadow-sm">
                Fastest
              </span>
              <div className="w-12 h-12 rounded-2xl bg-warm-foreground/15 flex items-center justify-center shrink-0">
                <Phone size={22} className="text-warm-foreground" fill="currentColor" />
              </div>
              <div>
                <p className="font-semibold text-warm-foreground text-sm">Call Now</p>
                <p className="text-sm text-warm-foreground/70">{phoneNumberDisplay}</p>
              </div>
            </a>

            <a
              href={whatsappLink("Hi GS Classes, I'd like to know more.")}
              className="flex items-center gap-4 p-5 bg-surface rounded-2xl border border-border/70 hover:shadow-card-hover hover:border-whatsapp/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-whatsapp/15 flex items-center justify-center shrink-0">
                <WhatsAppIcon size={22} className="text-whatsapp" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">WhatsApp</p>
                <p className="text-sm text-muted">9990118617</p>
              </div>
            </a>

            <a
              href={emailLink("Enquiry about GS Classes", "Hi, I'd like to know more about your programs.")}
              className="flex items-center gap-4 p-5 bg-surface rounded-2xl border border-border/70 hover:shadow-card-hover hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center shrink-0">
                <Mail size={22} className="text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Email</p>
                <p className="text-sm text-muted">gsclasses74@gmail.com</p>
              </div>
            </a>

            <div className="flex items-center gap-3 px-5 py-3 text-sm text-muted">
              <Clock size={16} /> We will respond within a few hours.
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <form onSubmit={handleSubmit} className="bg-surface rounded-3xl p-6 md:p-8 border border-border/70 space-y-5">
              <h2 className="text-xl font-bold text-foreground mb-2">Send us a Message</h2>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-11 px-4 rounded-xl border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Class</label>
                <input
                  type="text"
                  required
                  value={studentClass}
                  onChange={(e) => setStudentClass(e.target.value)}
                  className="w-full h-11 px-4 rounded-xl border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
                  placeholder="e.g. Class 10"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                <textarea
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors resize-none"
                  placeholder="What would you like to know?"
                />
              </div>
              <Button type="submit" variant="whatsapp" size="lg" className="w-full rounded-full">
                <WhatsAppIcon size={18} /> Message on WhatsApp
              </Button>
            </form>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
