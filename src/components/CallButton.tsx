import { callLink } from "@/lib/constants";
import { Phone } from "lucide-react";

const CallButton = () => (
  <a
    href={callLink}
    className="hidden md:flex fixed bottom-[92px] right-6 z-50 w-14 h-14 rounded-full bg-warm text-warm-foreground items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.15),0_0_18px_4px_hsl(var(--warm)/0.4)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.18),0_0_26px_6px_hsl(var(--warm)/0.5)] hover:scale-110 transition-all duration-200"
    aria-label={`Call GS Classes`}
  >
    <Phone size={24} fill="currentColor" />
  </a>
);

export default CallButton;
