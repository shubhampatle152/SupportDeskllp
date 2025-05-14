
"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK_GENERIC } from "@/lib/constants";
import Link from "next/link";

export default function WhatsappIcon() {
  return (
    <Link
      href={WHATSAPP_LINK_GENERIC}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground z-50 transition-transform hover:scale-110 flex items-center justify-center animate-bounce"
    >
      <MessageCircle className="h-8 w-8" />
    </Link>
  );
}
