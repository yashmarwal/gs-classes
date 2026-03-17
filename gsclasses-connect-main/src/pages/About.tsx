import { motion } from "framer-motion";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const About = () => (
  <div className="min-h-screen pt-20">
    <section className="py-16 md:py-20 bg-surface">
      <div className="container text-center">
        <motion.h1 {...fadeInUp} className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
          About GS Classes
        </motion.h1>
        <motion.p {...fadeInUp} className="text-muted max-w-lg mx-auto">
          Mathematics isn't about memorizing. It's about seeing.
        </motion.p>
      </div>
    </section>

    <Section>
      <div className="max-w-2xl mx-auto space-y-8">
        <motion.div {...fadeInUp}>
          <h2 className="text-2xl font-bold text-foreground mb-4">Who We Are</h2>
          <p className="text-muted leading-relaxed">
            GS Classes is a focused Mathematics coaching program for students from Class 8 to 12. We believe that every student can excel in Mathematics when given the right environment — small batches, personal attention, and a teaching approach rooted in concept clarity rather than rote learning.
          </p>
        </motion.div>

        <motion.div {...fadeInUp}>
          <h2 className="text-2xl font-bold text-foreground mb-4">Our Teaching Philosophy</h2>
          <p className="text-muted leading-relaxed">
            We don't believe in shortcuts. Every formula has a reason, every theorem has a story. Our approach is to help students see the "why" behind every concept, so that solving problems becomes intuitive rather than mechanical. When you understand the logic, you don't need to memorize.
          </p>
        </motion.div>

        <motion.div {...fadeInUp}>
          <h2 className="text-2xl font-bold text-foreground mb-4">Why Small Batches Matter</h2>
          <p className="text-muted leading-relaxed">
            We keep our batches small — maximum 5 students — because your doubts deserve more than a 30-second window in a crowded room. In a small group, every question gets answered, every student gets noticed, and no one is left behind. This isn't a luxury; it's how teaching should work.
          </p>
        </motion.div>

        <motion.div {...fadeInUp}>
          <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
          <p className="text-muted leading-relaxed mb-6">
            Help students actually understand Mathematics, not fear it. We want every student who comes to GS Classes to leave with confidence — not just in exams, but in their ability to think logically and solve problems independently.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href={whatsappLink("Hi GS Classes, I'd like to learn more about your coaching.")}>
              <MessageCircle size={18} /> Get in Touch
            </a>
          </Button>
        </motion.div>
      </div>
    </Section>
  </div>
);

export default About;
