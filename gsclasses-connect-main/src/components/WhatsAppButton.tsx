import { useState, useEffect } from "react";
import { whatsappLink } from "@/lib/constants";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const [shouldBounce, setShouldBounce] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShouldBounce(true);
      setTimeout(() => setShouldBounce(false), 2000);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <a
      href={whatsappLink("Hi GS Classes, I'd like to know more about your programs.")}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-whatsapp text-whatsapp-foreground flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-200 ${
        shouldBounce ? "animate-subtle-bounce" : ""
      }`}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} fill="currentColor" />
    </a>
  );
};

export default WhatsAppButton;
