import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Logo from "@/components/Logo";
import { whatsappLink, callLink } from "@/lib/constants";
import { ArrowRight, Phone, Sparkles } from "lucide-react";

const DemoPopup = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [studentClass, setStudentClass] = useState("");

  useEffect(() => {
    // Intentionally not gated by sessionStorage/localStorage — shows on every
    // fresh visit or refresh, since the mount only happens once per real page load.
    const timer = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi GS Classes, I'm ${name} (Class ${studentClass}). I'd like to book a free demo class.`;
    window.open(whatsappLink(text), "_blank");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="w-[calc(100%-2rem)] max-w-md rounded-3xl border-border p-0 gap-0 overflow-hidden max-h-[90vh] overflow-y-auto">
        <div className="relative bg-ink bg-graph-paper px-7 pt-8 pb-6 text-center overflow-hidden">
          <div className="absolute -top-8 -right-8 w-40 h-40 bg-primary/25 rounded-full blur-[70px]" />
          <div className="relative flex flex-col items-center">
            <Logo className="w-12 h-12 rounded-2xl mb-4" textClassName="text-base" />
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-warm mb-2">
              <Sparkles size={12} /> Free Demo Class
            </span>
            <DialogTitle className="font-display text-2xl font-bold text-ink-foreground">
              See how GS Classes teaches differently
            </DialogTitle>
            <DialogDescription className="text-sm text-ink-foreground/60 mt-2">
              No pressure. No payment. Just a real class, free.
            </DialogDescription>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="px-7 py-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Student Name</label>
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

          <Button type="submit" variant="hero" size="lg" className="w-full rounded-full">
            Book Free Demo <ArrowRight size={18} />
          </Button>

          <a
            href={callLink}
            className="flex items-center justify-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors pt-1"
          >
            <Phone size={15} /> Prefer to talk? Call us instead
          </a>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DemoPopup;
