// src/components/ui/WhatsappIcon.jsx
"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK_GENERIC } from "@/lib/constants";
import Link from "next/link";
import { motion } from "framer-motion";

export default function WhatsappIcon() {
  return (
    <motion.div
      // Subtle bounce animation every 3 seconds, y-axis
      // Animation duration 0.6s for each part of the bounce (up/down)
      animate={{
        y: [0, -8, 0, -4, 0], // Keyframes for y-axis movement
        transition: {
          duration: 1.2, // Total duration for one full bounce sequence (0.6s up, 0.6s down effectively)
          repeat: Infinity,
          repeatDelay: 1.8, // (3s total) - 1.2s animation = 1.8s delay
          ease: "easeInOut",
        },
      }}
      whileHover={{ scale: 1.1 }} // Scale on hover (duration 0.15s)
      transition={{ type: "spring", stiffness: 400, damping: 10, duration: 0.15 }}
      className="fixed bottom-6 right-6 z-50" // Removed h-16 w-16, bg-primary etc. to apply on Link
    >
      <Link
        href={WHATSAPP_LINK_GENERIC}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="h-16 w-16 rounded-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center"
        // Removed animate-bounce as Framer Motion handles it
      >
        <MessageCircle className="h-8 w-8" />
      </Link>
    </motion.div>
  );
}