import { motion } from "framer-motion";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { whatsappLink, callLink, phoneNumber } from "@/lib/constants";
import { breadcrumbJsonLd } from "@/lib/seo";
import { Users, Lightbulb, HeartHandshake, Target, Phone, Award } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const pillars = [
  {
    icon: Users,
    title: "Who We Are",
    text: "GS Classes is a focused Mathematics coaching program for students from Class 6 to 12, including JEE foundation. We believe that every student can excel in Mathematics when given the right environment — small batches, personal attention, and a teaching approach rooted in concept clarity rather than rote learning.",
  },
  {
    icon: Award,
    title: "Our Founder",
    text: "GS Classes was founded in 2000 by Ghanshyam Marwal, who has spent over two decades helping students build genuine confidence in Mathematics — from board exams to competitive foundations.",
  },
  {
    icon: Lightbulb,
    title: "Our Teaching Philosophy",
    text: "We don't believe in shortcuts. Every formula has a reason, every theorem has a story. Our approach is to help students see the \"why\" behind every concept, so that solving problems becomes intuitive rather than mechanical. When you understand the logic, you don't need to memorize.",
  },
  {
    icon: HeartHandshake,
    title: "Why Small Batches Matter",
    text: "We keep our batches small — maximum 5 students — because your doubts deserve more than a 30-second window in a crowded room. In a small group, every question gets answered, every student gets noticed, and no one is left behind. This isn't a luxury; it's how teaching should work.",
  },
];

const About = () => (
  <div className="min-h-screen">
    <Seo
      title="About Us — GS Classes Mathematics Coaching Since 2000"
      description="GS Classes is a focused Mathematics coaching program for Class 6 to 12 and JEE, founded in 2000 by Ghanshyam Marwal, built on small batches, personal attention, and teaching for concept clarity over rote learning."
      path="/about"
      jsonLd={breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ])}
    />
    <section className="relative bg-ink bg-graph-paper pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[130px] -translate-y-1/3" />
      <div className="container relative text-center">
        <motion.span {...fadeInUp} className="inline-block text-xs font-bold uppercase tracking-widest text-warm mb-3">
          About Us
        </motion.span>
        <motion.h1 {...fadeInUp} className="text-4xl md:text-5xl font-bold text-ink-foreground mb-4">
          About GS Classes
        </motion.h1>
        <motion.p {...fadeInUp} className="text-ink-foreground/60 max-w-lg mx-auto text-lg">
          Mathematics isn't about memorizing. It's about seeing.
        </motion.p>
      </div>
    </section>

    <Section>
      <div className="max-w-3xl mx-auto divide-y divide-border border-t border-b border-border mb-6">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex flex-col md:flex-row gap-5 md:gap-8 py-9"
          >
            <div className="shrink-0 flex items-center gap-4">
              <span className="font-display text-3xl font-bold text-primary/15">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center">
                <p.icon size={26} className="text-primary" />
              </div>
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">{p.title}</h2>
              <p className="text-muted leading-relaxed">{p.text}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.24 }}
        className="relative overflow-hidden bg-ink bg-graph-paper rounded-[1.75rem] p-7 md:p-10 text-center max-w-3xl mx-auto"
      >
        <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-warm/20 rounded-full blur-[90px]" />
        <div className="absolute -top-10 -right-10 w-56 h-56 bg-primary/25 rounded-full blur-[90px]" />
        <div className="relative flex flex-col items-center">
          <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
            <Target size={26} className="text-warm" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-ink-foreground mb-3">Our Mission</h2>
          <p className="text-ink-foreground/60 leading-relaxed mb-6 max-w-xl">
            Help students actually understand Mathematics, not fear it. We want every student who comes to GS Classes to leave with confidence — not just in exams, but in their ability to think logically and solve problems independently.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button variant="call" size="lg" className="rounded-full" asChild>
              <a href={callLink}>
                <Phone size={18} fill="currentColor" /> Call {phoneNumber}
              </a>
            </Button>
            <Button variant="hero" size="lg" className="rounded-full" asChild>
              <a href={whatsappLink("Hi GS Classes, I'd like to learn more about your coaching.")}>
                <WhatsAppIcon size={18} /> Get in Touch
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </Section>
  </div>
);

export default About;
