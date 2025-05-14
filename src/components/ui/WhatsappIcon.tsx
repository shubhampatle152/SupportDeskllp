"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import WhatsappDialog from "./WhatsappDialog"; // Assuming WhatsappDialog is in the same directory or adjust path

export default function WhatsappIcon() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Button
        variant="default"
        size="icon"
        className="fixed bottom-6 right-6 h-16 w-16 rounded-full shadow-lg bg-primary hover:bg-primary/90 text-primary-foreground animate-bounce z-50 transition-transform hover:scale-110"
        onClick={() => setIsDialogOpen(true)}
        aria-label="Open WhatsApp Chat Helper"
      >
        <MessageCircle className="h-8 w-8" />
      </Button>
      <WhatsappDialog isOpen={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </>
  );
}
