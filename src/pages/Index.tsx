import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section";
import Seo from "@/components/Seo";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import CountUp from "@/components/CountUp";
import FloatingMathSymbols from "@/components/FloatingMathSymbols";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { whatsappLink, callLink, phoneNumber } from "@/lib/constants";
import {
  Users, Video, HeadphonesIcon, ClipboardCheck, Brain,
  Phone, BookOpen, GraduationCap, Star,
  ArrowRight, Quote, ChevronLeft, ChevronRight, HelpCircle
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
    title: "Class 6–8 Foundation Program",
    desc: "Strong base building in Mathematics with focus on fundamentals, logic, and reasoning. Perfect start for long-term success.",
    badge: "Foundation",
    icon: BookOpen,
  },
  {
    title: "Class 9–10 Concept Builder",
    desc: "Strengthen core concepts and prepare for CBSE/ICSE board exams with deep understanding. NCERT mastery and beyond.",
    badge: "Boards Ready",
    icon: GraduationCap,
  },
  {
    title: "Class 11–12 Advanced Program",
    desc: "Advanced level preparation covering core concepts, CBSE/ICSE boards, and JEE competitive foundation with 1-on-1 guidance.",
    badge: "Advanced + JEE",
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
  { q: "Do you cover CBSE and ICSE, and JEE foundation?", a: "Yes. We teach students from Class 6 to 12 across CBSE and ICSE boards, and our Class 11–12 program includes JEE foundation for competitive exam preparation." },
];

const initials = (name: string) =>
  name.split(" ").map((p) => p[0]).join("").slice(0, 2);

const marqueeItems = [...features.map((f) => f.highlight), "Concept Clarity", "Real Results"];

const Index = () => {
  const [activeProgram, setActiveProgram] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const ActiveProgramIcon = programs[activeProgram].icon;

  const nextTestimonial = () => setActiveTestimonial((i) => (i + 1) % testimonials.length);
  const prevTestimonial = () => setActiveTestimonial((i) => (i - 1 + testimonials.length) % testimonials.length);

  // Cursor-tracking spotlight glow behind the hero copy
  const heroRef = useRef<HTMLElement>(null);
  const spotX = useMotionValue(50);
  const spotY = useMotionValue(50);
  const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = heroRef.current?.getBoundingClientRect();
    if (!rect) return;
    spotX.set(((e.clientX - rect.left) / rect.width) * 100);
    spotY.set(((e.clientY - rect.top) / rect.height) * 100);
  };
  const spotlightBackground = useTransform(
    [spotX, spotY],
    ([x, y]) => `radial-gradient(500px circle at ${x}% ${y}%, hsl(var(--primary) / 0.16), transparent 65%)`
  );

  // Subtle 3D tilt on the active program card
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const tiltRotateX = useSpring(useTransform(tiltY, [-0.5, 0.5], [7, -7]), { stiffness: 300, damping: 30 });
  const tiltRotateY = useSpring(useTransform(tiltX, [-0.5, 0.5], [-7, 7]), { stiffness: 300, damping: 30 });
  const handleTiltMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    tiltX.set((e.clientX - rect.left) / rect.width - 0.5);
    tiltY.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const resetTilt = () => {
    tiltX.set(0);
    tiltY.set(0);
  };

  // GSAP ScrollTrigger: fill the "How It Works" timeline track as the user scrolls past it
  const timelineTrackRef = useRef<HTMLDivElement>(null);
  const timelineFillRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!timelineTrackRef.current || !timelineFillRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        timelineFillRef.current,
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: timelineTrackRef.current,
            start: "top 70%",
            end: "bottom 80%",
            scrub: 0.5,
          },
        },
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen">
      <Seo
        title="GS Classes — Online Maths Tuition for Class 6 to 12 & JEE | CBSE, ICSE"
        description="Expert online Maths coaching for Class 6 to 12, CBSE, ICSE & JEE, in small batches of max 5 students. Live classes on Google Meet, personal doubt support, weekly tests, and concept clarity."
        path="/"
      />
      {/* Hero — dark editorial band with graph-paper motif */}
      <section
        ref={heroRef}
        onMouseMove={handleHeroMouseMove}
        className="relative bg-ink bg-graph-paper pt-32 pb-16 md:pt-44 md:pb-20 overflow-hidden"
      >
        <div className="absolute top-10 right-0 w-[600px] h-[600px] bg-primary/25 rounded-full blur-[130px] -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-warm/15 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4" />
        <motion.div className="absolute inset-0 hidden md:block" style={{ background: spotlightBackground }} />
        <FloatingMathSymbols />

        <div className="container relative text-center">
          <motion.div {...fadeInUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-ink-foreground/80 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-warm animate-pulse" />
            Trusted by 500+ students across Delhi NCR
          </motion.div>

          <motion.h1
            {...fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-ink-foreground leading-[1.05] mb-6 max-w-4xl mx-auto"
          >
            Build Strong Concepts in{" "}
            <span className="bg-gradient-to-r from-primary via-primary to-warm bg-clip-text text-transparent">
              Mathematics
            </span>
            , from Class 6 to 12 &amp; JEE
          </motion.h1>

          <motion.p {...fadeInUp} className="text-lg md:text-xl text-ink-foreground/60 max-w-xl mx-auto mb-10 text-pretty">
            Small Batches. Personal Attention. Real Results.
          </motion.p>

          <motion.div {...fadeInUp} className="flex flex-col sm:flex-row flex-wrap gap-3 justify-center mb-16">
            <Button variant="hero" size="lg" className="rounded-full" asChild>
              <a href={whatsappLink("Hi GS Classes, I'd like to book a demo class.")}>
                Book Free Demo <ArrowRight size={18} />
              </a>
            </Button>
            <Button variant="call" size="lg" className="hidden sm:inline-flex rounded-full" asChild>
              <a href={callLink}>
                <Phone size={18} fill="currentColor" /> Call {phoneNumber}
              </a>
            </Button>
            <Button variant="whatsapp" size="lg" className="hidden sm:inline-flex rounded-full" asChild>
              <a href={whatsappLink("Hi GS Classes, I have a question.")}>
                <WhatsAppIcon size={18} /> Chat on WhatsApp
              </a>
            </Button>
          </motion.div>

          {/* Inline stat rail, replaces the old floating card */}
          <motion.div
            {...fadeInUp}
            className="grid grid-cols-3 divide-x divide-white/10 max-w-2xl mx-auto"
          >
            {[
              { value: <CountUp to={5} />, label: "Students per Batch" },
              { value: "∞", label: "Doubt Sessions" },
              { value: "✓", label: "Weekly Tests" },
            ].map((s) => (
              <div key={s.label} className="px-2 sm:px-6 py-2 text-center">
                <p className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-ink-foreground mb-1">{s.value}</p>
                <p className="text-[11px] sm:text-xs text-ink-foreground/50 text-balance">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Marquee strip */}
      <div className="bg-accent border-y border-border overflow-hidden py-3">
        <div className="flex whitespace-nowrap marquee-track w-max">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-3 mx-4 text-sm font-semibold text-primary">
              {item}
              <span className="w-1.5 h-1.5 rounded-full bg-warm" />
            </span>
          ))}
        </div>
      </div>

      {/* Features — editorial numbered list, not cards */}
      <Section>
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Why Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Why Choose GS Classes</h2>
          <p className="text-muted">Everything designed around one goal — making sure you actually understand mathematics.</p>
        </div>
        <div className="divide-y divide-border border-t border-border">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group flex flex-col gap-3 md:grid md:grid-cols-12 md:items-center md:gap-8 py-6 md:py-8"
            >
              <div className="flex items-center gap-3 md:contents">
                <span className="md:col-span-1 w-7 md:w-auto shrink-0 font-display text-lg md:text-3xl font-bold text-primary/30 md:text-primary/15 md:group-hover:text-primary/30 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="md:col-span-1 w-11 h-11 rounded-2xl bg-accent flex items-center justify-center shrink-0">
                  <f.icon size={20} className="text-primary" />
                </div>
                <h3 className="md:col-span-3 font-display font-bold text-lg text-foreground">{f.title}</h3>
              </div>
              <p className="md:col-span-5 text-sm text-muted leading-relaxed">{f.desc}</p>
              <span className="md:col-span-2 md:text-right text-xs font-semibold text-primary bg-accent px-2.5 py-1 rounded-full w-fit md:ml-auto">
                {f.highlight}
              </span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Programs — tabbed selector instead of a 3-card grid */}
      <Section className="bg-surface bg-graph-paper-light">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Programs</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Our Programs</h2>
          <p className="text-muted max-w-lg mx-auto">Structured learning paths for every stage, from building basics to mastering advanced concepts.</p>
        </div>

        <div className="flex md:flex-wrap md:justify-center gap-2 mb-10 overflow-x-auto no-scrollbar snap-x snap-mandatory px-6 -mx-6 md:px-0 md:mx-0">
          {programs.map((p, i) => (
            <button
              key={p.title}
              onClick={() => setActiveProgram(i)}
              className={`shrink-0 snap-start px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${
                activeProgram === i
                  ? "bg-primary text-primary-foreground border-primary shadow-md"
                  : "bg-background text-muted border-border hover:border-primary/30 hover:text-foreground"
              }`}
            >
              {p.badge}
            </button>
          ))}
        </div>

        <motion.div
          onMouseMove={handleTiltMove}
          onMouseLeave={resetTilt}
          style={{ rotateX: tiltRotateX, rotateY: tiltRotateY, transformPerspective: 800 }}
          className="max-w-3xl mx-auto"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProgram}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="bg-background rounded-[1.75rem] p-8 md:p-10 shadow-elevated border border-border text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-5">
                <ActiveProgramIcon size={28} className="text-primary" />
              </div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-primary bg-accent px-2.5 py-1 rounded-full">
                {programs[activeProgram].badge}
              </span>
              <h3 className="font-display font-bold text-2xl text-foreground mt-4 mb-3">{programs[activeProgram].title}</h3>
              <p className="text-muted leading-relaxed mb-7 max-w-xl mx-auto">{programs[activeProgram].desc}</p>
              <Button variant="hero" size="lg" className="rounded-full" asChild>
                <a href="/courses">
                  View Details <ArrowRight size={18} />
                </a>
              </Button>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </Section>

      {/* How It Works — vertical connected timeline */}
      <Section>
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Process</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">How It Works</h2>
          <p className="text-muted">Four simple steps to better mathematics.</p>
        </div>
        <div ref={timelineTrackRef} className="relative max-w-2xl mx-auto">
          <span className="absolute left-7 top-7 bottom-7 w-px bg-border" />
          <div
            ref={timelineFillRef}
            className="absolute left-7 top-7 w-px bg-primary"
            style={{ height: "0%" }}
          />
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex gap-6 pb-10 last:pb-0"
            >
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center font-display font-bold shadow-md z-10">
                {s.num}
              </div>
              <div className="pt-2">
                <h3 className="font-display font-bold text-lg text-foreground mb-1">{s.title}</h3>
                <p className="text-sm text-muted">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Testimonials — single rotating quote carousel */}
      <Section className="bg-surface bg-graph-paper-light">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">What Students & Parents Say</h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.5}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) nextTestimonial();
              else if (info.offset.x > 60) prevTestimonial();
            }}
            className="relative bg-background rounded-[1.75rem] p-8 md:p-12 shadow-elevated border border-border text-center min-h-[260px] flex flex-col justify-center cursor-grab active:cursor-grabbing touch-pan-y"
          >
            <Quote size={40} className="text-primary/15 mx-auto mb-4" />
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
              >
                <p className="text-lg text-foreground leading-relaxed mb-6 text-pretty">
                  "{testimonials[activeTestimonial].text}"
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-warm flex items-center justify-center text-primary-foreground text-xs font-bold shrink-0">
                    {initials(testimonials[activeTestimonial].name)}
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-foreground">{testimonials[activeTestimonial].name}</p>
                    <p className="text-xs text-muted">{testimonials[activeTestimonial].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary/40 hover:text-primary transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setActiveTestimonial(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === activeTestimonial ? "bg-primary w-6" : "bg-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary/40 hover:text-primary transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </Section>

      {/* FAQ — split layout */}
      <Section>
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">Frequently Asked Questions</h2>
            <div className="hidden md:flex w-16 h-16 rounded-2xl bg-accent items-center justify-center mt-6">
              <HelpCircle size={28} className="text-primary" />
            </div>
          </div>
          <div className="md:col-span-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="group bg-surface rounded-2xl border border-border/70 overflow-hidden px-5 [&>h3]:m-0"
                >
                  <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline hover:text-primary py-5">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted leading-relaxed pb-5">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Section>

      {/* Final CTA — dark bookend to the hero */}
      <section className="relative bg-ink bg-graph-paper py-16 sm:py-20 md:py-28 overflow-hidden">
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-warm/20 rounded-full blur-[100px]" />
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/25 rounded-full blur-[100px]" />
        <div className="container relative text-center">
          <motion.h2 {...fadeInUp} className="text-2xl md:text-4xl font-bold text-ink-foreground mb-4 max-w-2xl mx-auto">
            Still confused? Talk directly with us on WhatsApp.
          </motion.h2>
          <motion.p {...fadeInUp} className="text-ink-foreground/60 mb-8 max-w-md mx-auto">
            No pressure. Just a quick chat to see if GS Classes is the right fit for your child.
          </motion.p>
          <motion.div {...fadeInUp} className="flex flex-wrap gap-3 justify-center">
            <Button variant="call" size="lg" className="rounded-full" asChild>
              <a href={callLink}>
                <Phone size={18} fill="currentColor" /> Call {phoneNumber}
              </a>
            </Button>
            <Button variant="hero" size="lg" className="rounded-full" asChild>
              <a href={whatsappLink("Hi GS Classes, I'd like to know more.")}>
                <WhatsAppIcon size={18} /> Chat Now
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
