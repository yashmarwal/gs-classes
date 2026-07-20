import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section";
import Seo from "@/components/Seo";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { whatsappLink, callLink, phoneNumber } from "@/lib/constants";
import { siteUrl, breadcrumbJsonLd } from "@/lib/seo";
import { BookOpen, GraduationCap, Star, CheckCircle2, Phone } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const courses = [
  {
    icon: BookOpen,
    title: "Class 6–8 Foundation Program",
    slug: "class-8-foundation",
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
    slug: "class-9-10-concept-builder",
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
    slug: "class-11-12-advanced",
    watermark: "Σ",
    desc: "Advanced level preparation covering core concepts, CBSE/ICSE boards, and JEE competitive foundation. Problem-solving techniques and analytical thinking at the forefront.",
    benefits: [
      "Deep concept breakdown",
      "Problem-solving techniques",
      "JEE foundation + PYQs",
      "Weekly tests & analysis",
      "1-on-1 guidance",
    ],
  },
];

const Courses = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const el = document.getElementById(location.hash.slice(1));
    if (el) {
      // Wait a frame so layout has settled before measuring scroll position
      requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
    }
  }, [location.hash]);

  const coursesJsonLd = courses.map((c) => ({
    "@context": "https://schema.org",
    "@type": "Course",
    name: c.title,
    description: c.desc,
    provider: {
      "@type": "EducationalOrganization",
      name: "GS Classes",
      sameAs: siteUrl,
    },
    url: `${siteUrl}/courses#${c.slug}`,
  }));

  return (
  <div className="min-h-screen">
    <Seo
      title="Our Programs — Class 6 to 12 & JEE Math Coaching | GS Classes"
      description="Structured Mathematics programs for Class 6–8 Foundation, Class 9–10 Concept Builder, and Class 11–12 Advanced with JEE foundation — CBSE & ICSE, built around concept clarity, not rote memorization."
      path="/courses"
      jsonLd={[
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Courses", path: "/courses" },
        ]),
        ...coursesJsonLd,
      ]}
    />
    {/* Page Header */}
    <section className="relative bg-ink bg-graph-paper pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[130px] -translate-y-1/3" />
      <div className="container relative text-center">
        <motion.span {...fadeInUp} className="inline-block text-xs font-bold uppercase tracking-widest text-warm mb-3">
          Programs
        </motion.span>
        <motion.h1 {...fadeInUp} className="text-4xl md:text-5xl font-bold text-ink-foreground mb-4">
          Our Programs
        </motion.h1>
        <motion.p {...fadeInUp} className="text-ink-foreground/60 max-w-lg mx-auto text-lg">
          Structured learning paths built around concept clarity, not rote memorization.
        </motion.p>
      </div>
    </section>

    {courses.map((c, i) => (
      <Section key={c.title} id={c.slug} className={i % 2 === 1 ? "bg-surface" : ""}>
        <div className="relative">
          {/* Watermark */}
          <span className="absolute -top-8 right-0 text-[12rem] font-display font-extrabold text-primary/[0.04] leading-none select-none pointer-events-none hidden md:block">
            {c.watermark}
          </span>

          <div className="grid md:grid-cols-2 gap-10 items-start relative">
            <motion.div {...fadeInUp}>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                  <c.icon size={22} className="text-primary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">{c.title}</h2>
              </div>
              <p className="text-muted leading-relaxed mb-6">{c.desc}</p>
              <div className="flex flex-wrap gap-3">
                <Button variant="hero" size="lg" className="rounded-full" asChild>
                  <a href={whatsappLink(`Hi GS Classes, I'd like to know more about the ${c.title}.`)}>
                    Reserve Your Spot <WhatsAppIcon size={18} />
                  </a>
                </Button>
                <Button variant="call" size="lg" className="rounded-full" asChild>
                  <a href={callLink}>
                    <Phone size={18} fill="currentColor" /> Call {phoneNumber}
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="bg-background rounded-3xl p-6 md:p-7 shadow-card border border-border/70">
                <h3 className="font-display font-bold text-foreground mb-4">What you get</h3>
                <ul className="space-y-3">
                  {c.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-foreground">
                      <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs text-muted border-t border-border/70 pt-4">
                  Next batch starts soon. Don't wait.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    ))}
  </div>
  );
};

export default Courses;
