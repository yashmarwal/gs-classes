import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { whatsappLink, emailLink } from "@/lib/constants";
import { MessageCircle, Mail, Clock } from "lucide-react";

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
    <>
      <Helmet>
        <title>Contact GS Classes | WhatsApp +91 9990118617 | Delhi NCR</title>
        <meta name="description" content="Contact GS Classes for Maths coaching in Delhi NCR. Message us on WhatsApp at +91 9990118617 or email gsclasses74@gmail.com. Book a free demo class today!" />
        <link rel="canonical" href="https://gsclasses.in/contact" />
      </Helmet>
    <div className="min-h-screen pt-20">
      <section className="py-16 md:py-20 bg-surface">
        <div className="container text-center">
          <motion.h1 {...fadeInUp} className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
            Get in Touch
          </motion.h1>
          <motion.p {...fadeInUp} className="text-muted max-w-lg mx-auto">
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
              href={whatsappLink("Hi GS Classes, I'd like to know more.")}
              className="flex items-center gap-4 p-5 bg-surface rounded-2xl border border-border/50 hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-whatsapp/10 flex items-center justify-center shrink-0">
                <MessageCircle size={22} className="text-whatsapp" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">WhatsApp</p>
                <p className="text-sm text-muted">9990118617</p>
              </div>
            </a>

            <a
              href={emailLink("Enquiry about GS Classes", "Hi, I'd like to know more about your programs.")}
              className="flex items-center gap-4 p-5 bg-surface rounded-2xl border border-border/50 hover:shadow-card-hover transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
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
            <form onSubmit={handleSubmit} className="bg-surface rounded-2xl p-6 md:p-8 border border-border/50 space-y-5">
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
              <Button type="submit" variant="whatsapp" size="lg" className="w-full">
                <MessageCircle size={18} /> Message on WhatsApp
              </Button>
            </form>
          </motion.div>
        </div>
      </Section>
    </div>
    </>
  );
};

export default Contact;
