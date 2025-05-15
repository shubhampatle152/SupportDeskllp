// src/components/forms/ScheduleCallForm.jsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon, Clock, Loader2 } from "lucide-react"; // Added Loader2
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react"; // Added useState
import { motion } from "framer-motion"; // Added motion
import ConfettiBurst from "@/components/ui/ConfettiBurst"; // Import Confetti

const scheduleCallFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  preferredDate: z.date({ required_error: "A date is required." }),
  preferredTime: z.string({ required_error: "A time is required." }),
});


const availableTimes = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "01:00 PM", "01:30 PM",
  "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM",
  "04:00 PM", "04:30 PM",
];


// Shake animation variants for invalid submit
// Duration: 0.1s for each part of shake, total 0.4s
const shakeVariants = {
  shake: {
    x: [0, -10, 10, -10, 10, 0], // Shake horizontally
    transition: { duration: 0.4, ease: "easeInOut" }, // Duration 0.4s
  },
  initial: { x: 0 }
};

export default function ScheduleCallForm({ onFormSubmit }) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false); // Added isLoading state
  const [showConfetti, setShowConfetti] = useState(false); // For confetti
  const [animateForm, setAnimateForm] = useState(false); // For shake animation trigger

  const form = useForm({
    resolver: zodResolver(scheduleCallFormSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = async (data) => {
    setIsLoading(true);
    setAnimateForm(false); // Reset shake

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log("Schedule Call Form Submitted:", data);
    toast({
      title: "Call Scheduled!",
      description: `We've received your request for ${format(data.preferredDate, "PPP")} at ${data.preferredTime}. We'll be in touch soon!`,
    });
    setShowConfetti(true); // Trigger confetti
    form.reset();
    if (onFormSubmit) {
      onFormSubmit();
    }
    setIsLoading(false);
  };

  const onInvalidSubmit = () => {
    setAnimateForm(true); // Trigger shake animation
    setTimeout(() => setAnimateForm(false), 500); // Reset shake after animation
  };

  return (
    <Form {...form}>
      <motion.form
        onSubmit={form.handleSubmit(onSubmit, onInvalidSubmit)}
        className="space-y-6"
        variants={shakeVariants}
        animate={animateForm ? "shake" : "initial"} // Control shake animation
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} disabled={isLoading} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email Address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john.doe@example.com" {...field} disabled={isLoading} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="preferredDate"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Preferred Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                        disabled={isLoading}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date < new Date(new Date().setHours(0,0,0,0)) || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="preferredTime"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Time</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isLoading}>
                  <FormControl>
                    <SelectTrigger>
                       <Clock className="mr-2 h-4 w-4 opacity-50 inline-block" />
                      <SelectValue placeholder="Select a time slot" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {availableTimes.map((time) => (
                      <SelectItem key={time} value={time}>
                        {time}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground transition-transform hover:scale-105" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Scheduling...
            </>
          ) : (
            "Schedule Call"
          )}
        </Button>
      </motion.form>
      <ConfettiBurst isActive={showConfetti} onAnimationComplete={() => setShowConfetti(false)} />
    </Form>
  );
}