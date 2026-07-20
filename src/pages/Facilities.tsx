import { motion } from "framer-motion";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { whatsappLink, callLink, phoneNumber } from "@/lib/constants";
import { breadcrumbJsonLd } from "@/lib/seo";
import {
  Users, Video, HeadphonesIcon, ClipboardCheck, Target, UserCheck, Phone
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const facilities = [
  {
    icon: Users,
    title: "Small Batch Size (Max 5 Students)",
    desc: "We intentionally limit our batches because your doubts deserve more than a 30-second window in a crowded room. Every student gets heard, every concept gets explained.",
  },
  {
    icon: Video,
    title: "Live Interactive Classes (Google Meet)",
    desc: "No pre-recorded lectures. Every class is live, interactive, and responsive to student questions. Real teaching, real engagement.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Doubt Sessions",
    desc: "Separate sessions specifically for clearing doubts. No rushing through problems. We stay until it clicks.",
  },
  {
    icon: ClipboardCheck,
    title: "Weekly Tests + Performance Tracking",
    desc: "Regular assessments to track progress and identify areas that need attention. Data-driven improvement, not guesswork.",
  },
  {
    icon: Target,
    title: "PYQs + Exam Strategy",
    desc: "Targeted practice with previous year questions and proven exam strategies. Preparation that aligns with what actually matters.",
  },
  {
    icon: UserCheck,
    title: "Personal Mentorship",
    desc: "Beyond academics — guidance on study habits, time management, and building confidence in mathematics.",
  },
];

const Facilities = () => (
  <div className="min-h-screen">
    <Seo
      title="Facilities — What Makes GS Classes Different"
      description="Small batches, live interactive classes on Google Meet, dedicated doubt sessions, weekly tests, PYQ practice, and personal mentorship — every detail built around understanding."
      path="/facilities"
      jsonLd={breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Facilities", path: "/facilities" },
      ])}
    />
    <section className="relative bg-ink bg-graph-paper pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[130px] -translate-y-1/3" />
      <div className="container relative text-center">
        <motion.span {...fadeInUp} className="inline-block text-xs font-bold uppercase tracking-widest text-warm mb-3">
          Facilities
        </motion.span>
        <motion.h1 {...fadeInUp} className="text-4xl md:text-5xl font-bold text-ink-foreground mb-4">
          What Makes GS Classes Different
        </motion.h1>
        <motion.p {...fadeInUp} className="text-ink-foreground/60 max-w-lg mx-auto text-lg">
          Every detail is designed around one principle — the student must understand.
        </motion.p>
      </div>
    </section>

    <Section>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {facilities.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="group relative bg-background rounded-3xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/70 hover:border-primary/30 hover:-translate-y-1"
          >
            <span className="absolute top-6 right-6 text-xs font-mono text-primary/25 tabular-nums">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center mb-5">
              <f.icon size={26} className="text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>

    <section className="relative bg-ink bg-graph-paper py-16 sm:py-20 overflow-hidden">
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-warm/20 rounded-full blur-[100px]" />
      <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/25 rounded-full blur-[100px]" />
      <div className="container relative text-center">
        <motion.h2 {...fadeInUp} className="text-2xl md:text-3xl font-bold text-ink-foreground mb-4 max-w-xl mx-auto">
          See it for yourself in a free demo class.
        </motion.h2>
        <motion.div {...fadeInUp} className="flex flex-wrap gap-3 justify-center">
          <Button variant="call" size="lg" className="rounded-full" asChild>
            <a href={callLink}>
              <Phone size={18} fill="currentColor" /> Call {phoneNumber}
            </a>
          </Button>
          <Button variant="hero" size="lg" className="rounded-full" asChild>
            <a href={whatsappLink("Hi GS Classes, I'd like to book a demo class.")}>
              <WhatsAppIcon size={18} /> Book Free Demo
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Facilities;
