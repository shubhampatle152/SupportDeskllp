"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import ScheduleCallForm from "@/components/forms/ScheduleCallForm";

interface SchedulingModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SchedulingModal({ isOpen, onOpenChange }: SchedulingModalProps) {
  const handleFormSubmit = () => {
    onOpenChange(false); // Close modal after form submission
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg bg-card text-card-foreground rounded-lg shadow-xl p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-primary">Schedule a Discovery Call</DialogTitle>
          <DialogDescription className="mt-1">
            Tell us a bit about your needs and pick a time that works for you. We're excited to connect!
          </DialogDescription>
        </DialogHeader>
        <div className="mt-6">
          <ScheduleCallForm onFormSubmit={handleFormSubmit} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
