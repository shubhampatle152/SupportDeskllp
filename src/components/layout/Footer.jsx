
import Link from "next/link";
import { Zap, MessageCircle, Twitter, Linkedin, Facebook } from "lucide-react";
import { COMPANY_NAME, SOCIAL_LINKS, WHATSAPP_LINK_GENERIC } from "@/lib/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary mb-4 hover:opacity-80 transition-opacity">
              <Zap className="h-8 w-8" />
              <span>{COMPANY_NAME}</span>
            </Link>
            <p className="text-sm text-center md:text-left">&copy; {currentYear} {COMPANY_NAME}. All rights reserved.</p>
          </div>

          <div className="flex justify-center items-center gap-6">
            <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-primary transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-primary transition-colors">
              <Facebook className="h-6 w-6" />
            </a>
            <a href={WHATSAPP_LINK_GENERIC} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-primary transition-colors">
              <MessageCircle className="h-6 w-6" />
            </a>
          </div>
          
          <div className="flex flex-col items-center md:items-end text-sm">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:text-primary transition-colors mt-1">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
