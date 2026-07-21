import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Section from "@/components/Section";
import Seo from "@/components/Seo";
import { Badge } from "@/components/ui/badge";
import { siteUrl, breadcrumbJsonLd } from "@/lib/seo";
import {
  allFormulaItems,
  topicLabels,
  classLevelLabels,
  typeLabels,
  type ContentType,
  type Topic,
  type ClassLevel,
} from "@/data/formulaLab";
import { Search, X, Sigma, Lightbulb, Zap, ShieldCheck } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const typeIcons: Record<ContentType, typeof Sigma> = {
  formula: Sigma,
  tip: Lightbulb,
  shortcut: Zap,
  theorem: ShieldCheck,
};

const typeBadgeClasses: Record<ContentType, string> = {
  formula: "bg-primary/10 text-primary border-primary/20",
  tip: "bg-amber-500/10 text-amber-600 border-amber-500/20",
  shortcut: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20",
  theorem: "bg-violet-500/10 text-violet-600 border-violet-500/20",
};

const typeFilters: (ContentType | "all")[] = ["all", "formula", "tip", "shortcut", "theorem"];
const levelFilters: (ClassLevel | "all")[] = ["all", "6-8", "9-10", "11-12"];
const topicFilters: (Topic | "all")[] = [
  "all",
  "algebra",
  "trigonometry",
  "calculus",
  "geometry",
  "arithmetic",
  "statistics",
  "coordinate-geometry",
  "mensuration",
  "number-theory",
  "probability",
  "matrices",
  "vectors",
  "sets-relations",
  "complex-numbers",
  "sequences-series",
  "permutations-combinations",
];

const FilterPill = ({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button
    onClick={onClick}
    className={`shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-colors duration-200 ${
      active
        ? "bg-primary text-primary-foreground border-primary shadow-sm"
        : "bg-background text-muted border-border hover:border-primary/30 hover:text-foreground"
    }`}
  >
    {children}
  </button>
);

const FormulaLab = () => {
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState<ContentType | "all">("all");
  const [levelFilter, setLevelFilter] = useState<ClassLevel | "all">("all");
  const [topicFilter, setTopicFilter] = useState<Topic | "all">("all");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    // Search runs independently of the filters — typing a query searches every
    // item regardless of active type/level/topic pills, instead of being
    // restricted to whatever subset those filters currently show.
    if (q) {
      return allFormulaItems.filter((item) => {
        const haystack = `${item.title} ${item.content} ${item.tags.join(" ")}`.toLowerCase();
        return haystack.includes(q);
      });
    }

    return allFormulaItems.filter((item) => {
      if (typeFilter !== "all" && item.type !== typeFilter) return false;
      if (levelFilter !== "all" && item.classLevel !== levelFilter && item.classLevel !== "all") return false;
      if (topicFilter !== "all" && item.topic !== topicFilter) return false;
      return true;
    });
  }, [query, typeFilter, levelFilter, topicFilter]);

  const hasActiveFilters = query || typeFilter !== "all" || levelFilter !== "all" || topicFilter !== "all";

  const learningResourceJsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: "GS Classes Formula Lab",
    description:
      "A free, searchable reference of 174 Mathematics formulas, theorems, shortcuts, and memory tips for Class 6 to 12, CBSE, ICSE, and JEE foundation.",
    url: `${siteUrl}/formula-lab`,
    learningResourceType: "Reference material",
    educationalLevel: "Class 6 to 12, JEE Foundation",
    inLanguage: "en",
    isAccessibleForFree: true,
    provider: { "@id": `${siteUrl}/#organization` },
    teaches: Object.values(topicLabels),
  };

  const clearFilters = () => {
    setQuery("");
    setTypeFilter("all");
    setLevelFilter("all");
    setTopicFilter("all");
  };

  return (
    <div className="min-h-screen">
      <Seo
        title="Formula Lab — Free Maths Formula Reference for Class 6–12 & JEE | GS Classes"
        description="A free, searchable library of 174 Maths formulas, theorems, shortcuts, and memory tips for Class 6 to 12, CBSE, ICSE, and JEE foundation — algebra, trigonometry, calculus, geometry, and more."
        path="/formula-lab"
        jsonLd={[
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Formula Lab", path: "/formula-lab" },
          ]),
          learningResourceJsonLd,
        ]}
      />

      {/* Page Header */}
      <section className="relative bg-ink bg-graph-paper pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[130px] -translate-y-1/3" />
        <div className="container relative text-center">
          <motion.span {...fadeInUp} className="inline-block text-xs font-bold uppercase tracking-widest text-warm mb-3">
            Formula Lab
          </motion.span>
          <motion.h1 {...fadeInUp} className="text-4xl md:text-5xl font-bold text-ink-foreground mb-4">
            Every Formula, One Place
          </motion.h1>
          <motion.p {...fadeInUp} className="text-ink-foreground/60 max-w-lg mx-auto text-lg">
            174 formulas, theorems, and shortcuts for Class 6 to 12 and JEE — searchable, free, no sign-up.
          </motion.p>
        </div>
      </section>

      <Section className="!pt-10 !pb-8">
        <div className="max-w-3xl mx-auto">
          <div className="relative mb-5">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search formulas, tips, tags…"
              className="w-full pl-11 pr-11 py-3.5 rounded-2xl border border-border bg-background text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-foreground transition-colors"
                aria-label="Clear search"
              >
                <X size={18} />
              </button>
            )}
          </div>

          <div className="space-y-3">
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              {typeFilters.map((t) => (
                <FilterPill key={t} active={typeFilter === t} onClick={() => setTypeFilter(t)}>
                  {t === "all" ? "All Types" : typeLabels[t]}
                </FilterPill>
              ))}
            </div>
            <div className="flex gap-2 overflow-x-auto no-scrollbar">
              {levelFilters.map((l) => (
                <FilterPill key={l} active={levelFilter === l} onClick={() => setLevelFilter(l)}>
                  {l === "all" ? "All Levels" : classLevelLabels[l]}
                </FilterPill>
              ))}
            </div>
            <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
              {topicFilters.map((t) => (
                <FilterPill key={t} active={topicFilter === t} onClick={() => setTopicFilter(t)}>
                  {t === "all" ? "All Topics" : topicLabels[t]}
                </FilterPill>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mt-5 text-sm">
            <span className="text-muted">
              <span className="font-semibold text-foreground">{filtered.length}</span> of {allFormulaItems.length} items
            </span>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="text-primary font-semibold hover:underline"
              >
                Clear filters
              </button>
            )}
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-lg font-semibold text-foreground mb-2">No results found</p>
            <p className="text-muted">Try a different search term or clear your filters.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            <AnimatePresence initial={false} mode="popLayout">
              {filtered.map((item) => {
                const Icon = typeIcons[item.type];
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.2 }}
                    className="bg-background rounded-2xl border border-border p-5 flex flex-col shadow-card"
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <span className={`inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wide px-2.5 py-1 rounded-full border ${typeBadgeClasses[item.type]}`}>
                        <Icon size={11} /> {typeLabels[item.type]}
                      </span>
                      <span className="text-[10px] font-semibold text-muted shrink-0">
                        {classLevelLabels[item.classLevel]}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-foreground mb-2 leading-snug">{item.title}</h3>

                    <p className="text-sm text-foreground/90 whitespace-pre-line font-mono leading-relaxed mb-3">
                      {item.content}
                    </p>

                    {item.example && (
                      <p className="text-xs text-muted leading-relaxed mb-3">
                        <span className="font-semibold text-foreground/70">Example: </span>
                        {item.example}
                      </p>
                    )}

                    {item.memoryTip && (
                      <div className="mt-auto pt-3 border-t border-border/70 flex items-start gap-2">
                        <Lightbulb size={14} className="text-warm mt-0.5 shrink-0" />
                        <p className="text-xs text-muted leading-relaxed">{item.memoryTip}</p>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-1.5 mt-3">
                      <Badge variant="secondary" className="text-[10px] font-normal bg-accent text-primary border-none">
                        {topicLabels[item.topic]}
                      </Badge>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </Section>
    </div>
  );
};

export default FormulaLab;
