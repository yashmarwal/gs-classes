import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section";
import { whatsappLink } from "@/lib/constants";
import { BookOpen, GraduationCap, Star, CheckCircle2, MessageCircle } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const courses = [
  {
    icon: BookOpen,
    title: "Class 8 Foundation Program",
    watermark: "√",
    desc: "Strong base building in Mathematics with focus on fundamentals, logic, and clarity. We ensure students develop a genuine understanding that carries forward through their academic journey.",
    benefits: [
      "Basics to advanced clarity",
      "Visual explanation methods",
      "Regular doubt solving",
      "Weekly tests",
      "Personal attention (max 5 students)",
    ],
  },
  {
    icon: GraduationCap,
    title: "Class 9–10 Concept Builder Program",
    watermark: "π",
    desc: "Designed to strengthen core concepts and prepare for board exams with deep understanding. Covers NCERT thoroughly with additional practice for exam confidence.",
    benefits: [
      "NCERT + extra questions",
      "PYQs practice",
      "Board-oriented preparation",
      "Test series",
      "Doubt sessions",
    ],
  },
  {
    icon: Star,
    title: "Class 11–12 Advanced Program",
    watermark: "Σ",
    desc: "Advanced level preparation covering core concepts, boards, and competitive foundation. Problem-solving techniques and analytical thinking at the forefront.",
    benefits: [
      "Deep concept breakdown",
      "Problem-solving techniques",
      "PYQs + advanced questions",
      "Weekly tests & analysis",
      "1-on-1 guidance",
    ],
  },
];

const Courses = () => (
  <>
    <Helmet>
      <title>Maths Programs Class 8–12 | GS Classes Delhi NCR</title>
      <meta name="description" content="Explore GS Classes maths programs for Class 8, 9, 10, 11 & 12. Small batches, live Google Meet classes, PYQs & weekly tests. Delhi NCR. Book a free demo!" />
      <link rel="canonical" href="https://gsclasses.in/courses" />
    </Helmet>
  <div className="min-h-screen pt-20">
    {/* Page Header */}
    <section className="py-16 md:py-20 bg-surface">
      <div className="container text-center">
        <motion.h1 {...fadeInUp} className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
          Our Programs
        </motion.h1>
        <motion.p {...fadeInUp} className="text-muted max-w-lg mx-auto">
          Structured learning paths built around concept clarity, not rote memorization.
        </motion.p>
      </div>
    </section>

    {courses.map((c, i) => (
      <Section key={c.title} className={i % 2 === 1 ? "bg-surface" : ""}>
        <div className="relative">
          {/* Watermark */}
          <span className="absolute -top-8 right-0 text-[12rem] font-display font-extrabold text-primary/[0.03] leading-none select-none pointer-events-none hidden md:block">
            {c.watermark}
          </span>

          <div className="grid md:grid-cols-2 gap-10 items-start relative">
            <motion.div {...fadeInUp}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center">
                  <c.icon size={22} className="text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">{c.title}</h2>
              </div>
              <p className="text-muted leading-relaxed mb-6">{c.desc}</p>
              <Button variant="hero" size="lg" asChild>
                <a href={whatsappLink(`Hi GS Classes, I'd like to know more about the ${c.title}.`)}>
                  Reserve Your Spot on WhatsApp <MessageCircle size={18} />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="bg-background rounded-2xl p-6 shadow-card border border-border/50">
                <h3 className="font-display font-bold text-foreground mb-4">What you get</h3>
                <ul className="space-y-3">
                  {c.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-foreground">
                      <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs text-muted border-t border-border/50 pt-4">
                  Next batch starts soon. Don't wait.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    ))}
  </div>
  </>
);

export default Courses;
