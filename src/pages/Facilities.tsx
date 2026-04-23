import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Section from "@/components/Section";
import {
  Users, Video, HeadphonesIcon, ClipboardCheck, Target, UserCheck
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
  <>
    <Helmet>
      <title>Our Facilities | Live Classes & Small Batches | GS Classes</title>
      <meta name="description" content="GS Classes features small batches (max 5), live Google Meet sessions, personal doubt sessions, weekly tests, PYQ practice & mentorship. See what makes us different." />
      <link rel="canonical" href="https://gsclasses.online/facilities" />
    </Helmet>
  <div className="min-h-screen pt-20">
    <section className="py-16 md:py-20 bg-surface">
      <div className="container text-center">
        <motion.h1 {...fadeInUp} className="text-4xl md:text-5xl font-extrabold text-foreground mb-4">
          What Makes GS Classes Different
        </motion.h1>
        <motion.p {...fadeInUp} className="text-muted max-w-lg mx-auto">
          Every detail is designed around one principle — the student must understand.
        </motion.p>
      </div>
    </section>

    <div className="container py-16 md:py-24">
      <div className="space-y-16 md:space-y-24">
        {facilities.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`flex flex-col md:flex-row items-center gap-8 md:gap-14 ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="shrink-0">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-accent flex items-center justify-center">
                <f.icon size={36} className="text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">{f.title}</h3>
              <p className="text-muted leading-relaxed max-w-xl">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
  </>
);

export default Facilities;
