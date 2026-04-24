import { useState, useEffect } from "react";
import { whatsappLink } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const [shouldBounce, setShouldBounce] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShouldBounce(true);
      setTimeout(() => setShouldBounce(false), 2000);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {showTooltip && (
        <span className="bg-foreground text-background text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap">
          Chat with us
        </span>
      )}
      <a
        href={whatsappLink("Hi GS Classes, I'd like to know more about your programs.")}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-14 h-14 rounded-full bg-whatsapp text-whatsapp-foreground flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-200 ${
          shouldBounce ? "animate-subtle-bounce" : ""
        }`}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} fill="currentColor" />
      </a>
    </div>
  );
};

export default WhatsAppButton;
