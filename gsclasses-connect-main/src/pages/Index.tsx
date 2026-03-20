import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section";
import { whatsappLink } from "@/lib/constants";
import {
  Users, Video, HeadphonesIcon, ClipboardCheck, Brain,
  MessageCircle, Phone, BookOpen, GraduationCap, Star,
  ChevronRight, ArrowRight
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const features = [
  { icon: Users, title: "Small Batch Size", desc: "Maximum 5 students per batch for focused learning.", highlight: "Max 5 Students" },
  { icon: Video, title: "Live Classes", desc: "Interactive sessions on Google Meet. No recordings, no shortcuts.", highlight: "Google Meet" },
  { icon: HeadphonesIcon, title: "Personal Doubt Support", desc: "Your doubts deserve more than a 30-second window.", highlight: "1-on-1 Help" },
  { icon: ClipboardCheck, title: "Weekly Tests & PYQs", desc: "Regular assessments with previous year questions practice.", highlight: "Every Week" },
  { icon: Brain, title: "Concept Clarity Focus", desc: "Understanding over memorization. See the math, don't just solve it.", highlight: "Deep Learning" },
];

const programs = [
  {
    title: "Class 8 Foundation Program",
    desc: "Strong base building in Mathematics with focus on fundamentals, logic, and reasoning. Perfect start for long-term success.",
    badge: "Foundation",
    icon: BookOpen,
  },
  {
    title: "Class 9–10 Concept Builder",
    desc: "Strengthen core concepts and prepare for board exams with deep understanding. NCERT mastery and beyond.",
    badge: "Boards Ready",
    icon: GraduationCap,
  },
  {
    title: "Class 11–12 Advanced Program",
    desc: "Advanced level preparation covering core concepts, boards, and competitive foundation with 1-on-1 guidance.",
    badge: "Advanced",
    icon: Star,
  },
];

const steps = [
  { num: "01", title: "Contact on WhatsApp", desc: "Send us a message to get started." },
  { num: "02", title: "Book Demo Class", desc: "Experience a free class before committing." },
  { num: "03", title: "Join Your Batch", desc: "Get placed in a small batch of max 5 students." },
  { num: "04", title: "Start Learning", desc: "Build strong concepts with personal attention." },
];

const testimonials = [
  { name: "Priya Sharma", role: "Parent, Class 10", text: "My son's marks improved from 65 to 92 in just 4 months. The personal attention makes all the difference." },
  { name: "Rahul Verma", role: "Student, Class 12", text: "GS Sir explains concepts in a way that actually makes sense. I finally stopped fearing calculus." },
  { name: "Neha Gupta", role: "Parent, Class 9", text: "Small batches mean my daughter actually gets her doubts solved. Not possible in a 40-student tuition." },
  { name: "Arjun Patel", role: "Student, Class 11", text: "The weekly tests keep me on track. I can see exactly where I need to improve every week." },
];

const faqs = [
  { q: "How are classes conducted?", a: "All classes are conducted live on Google Meet. Every session is interactive with real-time doubt solving." },
  { q: "What is the batch size?", a: "We keep our batches small — maximum 5 students per batch — so every student gets personal attention." },
  { q: "Can I attend a demo class?", a: "Absolutely. We offer a free demo class so you can experience our teaching style before enrolling." },
  { q: "How do I enroll?", a: "Simply message us on WhatsApp. We'll help you find the right batch and get started immediately." },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230052FF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />

        <div className="container relative">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <motion.div className="lg:col-span-3" {...fadeInUp}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-semibold mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Trusted by 100+ students across Delhi NCR
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-foreground leading-[1.1] mb-6">
                Build Strong Concepts in Mathematics from Class 8 to 12
              </h1>
              <p className="text-lg md:text-xl text-muted max-w-xl mb-8 text-pretty">
                Small Batches. Personal Attention. Real Results.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="hero" size="lg" asChild>
                  <a href={whatsappLink("Hi GS Classes, I'd like to book a demo class.")}>
                    Book Free Demo <ArrowRight size={18} />
                  </a>
                </Button>
                <Button variant="hero-outline" size="lg" asChild>
                  <a href={whatsappLink("Hi GS Classes, I have a question.")}>
                    <MessageCircle size={18} /> Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              className="lg:col-span-2 hidden lg:block"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative">
                <div className="bg-surface rounded-3xl p-8 shadow-card border border-border/50">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-background rounded-xl">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-display font-bold text-sm">5</div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">Students per Batch</p>
                        <p className="text-xs text-muted">Maximum capacity</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-background rounded-xl">
                      <div className="w-10 h-10 rounded-lg bg-whatsapp/10 flex items-center justify-center text-whatsapp font-display font-bold text-sm">∞</div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">Doubt Sessions</p>
                        <p className="text-xs text-muted">Until you understand</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-background rounded-xl">
                      <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center text-accent-foreground font-display font-bold text-sm">✓</div>
                      <div>
                        <p className="text-sm font-semibold text-foreground">Weekly Tests</p>
                        <p className="text-xs text-muted">Track your progress</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-3 -right-3 w-full h-full bg-primary/5 rounded-3xl -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <Section className="bg-surface">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose GS Classes</h2>
          <p className="text-muted max-w-lg mx-auto">Everything designed around one goal — making sure you actually understand mathematics.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative bg-background rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300"
            >
              <span className="absolute top-5 right-5 text-xs font-mono text-accent-foreground/40 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center mb-4">
                <f.icon size={20} className="text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground mb-1">{f.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{f.desc}</p>
              <span className="inline-block mt-3 text-xs font-semibold text-primary bg-accent px-2.5 py-1 rounded-md">
                {f.highlight}
              </span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Programs */}
      <Section>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Programs</h2>
          <p className="text-muted max-w-lg mx-auto">Structured learning paths for every stage, from building basics to mastering advanced concepts.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-background rounded-3xl p-7 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 hover:border-primary/20"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center">
                  <p.icon size={22} className="text-primary" />
                </div>
                <span className="text-[10px] uppercase tracking-widest font-bold text-primary bg-accent px-2.5 py-1 rounded-md">{p.badge}</span>
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-5">{p.desc}</p>
              <a
                href="/courses"
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all duration-200"
              >
                View Details <ChevronRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section className="bg-surface">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-muted">Four simple steps to better mathematics.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-display font-extrabold text-primary/15 mb-3">{s.num}</div>
              <h3 className="font-display font-bold text-foreground mb-1">{s.title}</h3>
              <p className="text-sm text-muted">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Students & Parents Say</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-surface rounded-2xl p-6 border border-border/50"
            >
              <p className="text-sm text-foreground leading-relaxed mb-4">"{t.text}"</p>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-surface">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((f, i) => (
            <motion.details
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group bg-background rounded-xl border border-border/50 overflow-hidden"
            >
              <summary className="flex items-center justify-between cursor-pointer p-5 text-sm font-semibold text-foreground hover:text-primary transition-colors list-none [&::-webkit-details-marker]:hidden">
                {f.q}
                <ChevronRight size={16} className="text-muted transition-transform group-open:rotate-90" />
              </summary>
              <div className="px-5 pb-5 text-sm text-muted leading-relaxed">{f.a}</div>
            </motion.details>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div
            {...fadeInUp}
            className="bg-primary rounded-3xl p-10 md:p-16 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Still confused? Talk directly with us on WhatsApp.
            </h2>
            <p className="text-primary-foreground/70 mb-8 max-w-md mx-auto">
              No pressure. Just a quick chat to see if GS Classes is the right fit for your child.
            </p>
            <Button variant="hero-outline" size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0" asChild>
              <a href={whatsappLink("Hi GS Classes, I'd like to know more.")}>
                <MessageCircle size={18} /> Chat Now
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
