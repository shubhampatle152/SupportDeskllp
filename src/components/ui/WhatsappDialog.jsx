"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2, MessageCircle, Send } from "lucide-react";
import { generateInitialMessage } from "@/ai/flows/whatsapp-message-assistance";
import { WHATSAPP_PHONE_NUMBER } from "@/lib/constants";
import { useToast } from "@/hooks/use-toast";


export default function WhatsappDialog({ isOpen, onOpenChange }) {
  const [topic, setTopic] = useState("");
  const [generatedMessage, setGeneratedMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerateMessage = async () => {
    if (!topic.trim()) {
      toast({
        title: "Topic Required",
        description: "Please enter a topic for your message.",
        variant: "destructive",
      });
      return;
    }
    setIsLoading(true);
    setGeneratedMessage("");
    try {
      const input = { topic };
      const result = await generateInitialMessage(input);
      setGeneratedMessage(result.message);
    } catch (error) {
      console.error("Error generating message:", error);
      toast({
        title: "Error",
        description: "Failed to generate message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendViaWhatsApp = () => {
    if (!generatedMessage) {
      toast({
        title: "No Message",
        description: "Please generate a message first.",
        variant: "destructive",
      });
      return;
    }
    const encodedMessage = encodeURIComponent(generatedMessage);
    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
    onOpenChange(false); // Close dialog after attempting to send
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card text-card-foreground rounded-lg shadow-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold flex items-center gap-2">
            <MessageCircle className="text-primary h-7 w-7" />
            WhatsApp Message Helper
          </DialogTitle>
          <DialogDescription className="mt-1">
            Let AI help you craft the perfect initial message for WhatsApp support.
          </DialogDescription>
        </DialogHeader>
        
        <div className="py-4 space-y-4">
          <div>
            <Label htmlFor="topic" className="text-sm font-medium">
              What's the topic?
            </Label>
            <Input
              id="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="e.g., Question about pricing plans"
              className="mt-1"
            />
          </div>

          {generatedMessage && (
            <div>
              <Label htmlFor="generatedMessage" className="text-sm font-medium">
                Suggested Message:
              </Label>
              <Textarea
                id="generatedMessage"
                value={generatedMessage}
                readOnly
                rows={4}
                className="mt-1 bg-muted"
              />
            </div>
          )}
        </div>

        <DialogFooter className="sm:justify-between gap-2">
          <Button onClick={handleGenerateMessage} disabled={isLoading} className="w-full sm:w-auto">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              "Generate Message"
            )}
          </Button>
          {generatedMessage && (
            <Button onClick={handleSendViaWhatsApp} variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground w-full sm:w-auto">
              <Send className="mr-2 h-4 w-4" />
              Send via WhatsApp
            </Button>
          )}
           <DialogClose asChild>
            <Button type="button" variant="outline" className="w-full sm:w-auto mt-2 sm:mt-0">
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
