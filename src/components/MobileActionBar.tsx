import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { whatsappLink, callLink } from "@/lib/constants";
import { Phone, ArrowRight } from "lucide-react";

const MobileActionBar = () => (
  <motion.div
    initial={{ y: 80, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.4, delay: 0.3 }}
    className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-background/95 backdrop-blur-lg border-t border-border pb-safe"
  >
    <div className="flex items-stretch gap-2 p-2.5">
      <Button
        variant="call"
        size="lg"
        className="rounded-full px-4 shrink-0"
        asChild
      >
        <a href={callLink} aria-label="Call GS Classes">
          <Phone size={18} fill="currentColor" />
        </a>
      </Button>
      <Button
        variant="whatsapp"
        size="lg"
        className="rounded-full px-4 shrink-0"
        asChild
      >
        <a href={whatsappLink("Hi GS Classes, I have a question.")} aria-label="Chat on WhatsApp">
          <WhatsAppIcon size={18} />
        </a>
      </Button>
      <Button variant="hero" size="lg" className="flex-1 rounded-full" asChild>
        <a href={whatsappLink("Hi GS Classes, I'd like to book a demo class.")}>
          Book Free Demo <ArrowRight size={16} />
        </a>
      </Button>
    </div>
  </motion.div>
);

export default MobileActionBar;
