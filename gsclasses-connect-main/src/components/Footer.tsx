import { Link } from "react-router-dom";
import { whatsappLink } from "@/lib/constants";
import { MessageCircle, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-sm">GS</span>
            </div>
            <span className="font-display font-bold text-lg">GS Classes</span>
          </div>
          <p className="text-sm opacity-70 leading-relaxed">
            Building strong mathematical foundations through concept clarity and personal attention.
          </p>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider opacity-50">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["Home", "Courses", "Facilities", "About", "Contact"].map((l) => (
              <Link
                key={l}
                to={l === "Home" ? "/" : `/${l.toLowerCase()}`}
                className="text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                {l}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider opacity-50">Programs</h4>
          <div className="flex flex-col gap-2 text-sm opacity-70">
            <span>Class 8 Foundation</span>
            <span>Class 9–10 Concept Builder</span>
            <span>Class 11–12 Advanced</span>
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider opacity-50">Contact</h4>
          <div className="flex flex-col gap-3">
            <a
              href={whatsappLink("Hi GS Classes, I have a question.")}
              className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              <MessageCircle size={16} /> 9990118617
            </a>
            <a
              href="mailto:gsclasses74@gmail.com"
              className="flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition-opacity"
            >
              <Mail size={16} /> gsclasses74@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm opacity-50">© {new Date().getFullYear()} GS Classes. All rights reserved.</p>
        <a
          href={whatsappLink("Hi GS Classes")}
          className="inline-flex items-center gap-2 text-sm font-medium bg-whatsapp/20 text-whatsapp-foreground px-4 py-2 rounded-lg hover:bg-whatsapp/30 transition-colors"
        >
          <MessageCircle size={16} /> Chat on WhatsApp
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
