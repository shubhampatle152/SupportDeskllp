// src/app/services/page.jsx
"use client";

import { useState } from "react";
import ServiceCard from "@/components/ui/ServiceCard";
import SchedulingModal from "@/components/ui/SchedulingModal";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SERVICES_DATA } from "@/lib/constants";
import { CalendarDays } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { motion } from "framer-motion";


// Container for service cards for staggered animation
// Stagger children by 0.15s
const servicesContainerVariants = {
  hidden: { opacity: 1 }, // Parent doesn't need to fade, only stagger children
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Duration for staggering
    },
  },
};

export default function ServicesPage() {
  const [isSchedulingModalOpen, setIsSchedulingModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16">
            {/* Using existing CSS animations for titles for now, can be replaced with Framer Motion */}
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fadeInUp opacity-0">Our Comprehensive Services</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-fadeInUp opacity-0 animation-delay-200">
              We offer a wide range of virtual assistance services designed to streamline your operations, boost productivity, and help your business grow.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={servicesContainerVariants}
            initial="hidden"
            animate="visible" // Animate when the component mounts (or whileInView if preferred for the whole grid)
          >
            {SERVICES_DATA.map((service) => (
              // ServiceCard now has its own motion.div, so no need to wrap it here with another one
              // The staggerChildren in the parent will apply to the motion.div inside ServiceCard
              <ServiceCard
                key={service.id}
                id={service.id}
                title={service.title}
                description={service.description}
                iconName={service.icon}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Schedule a Call Section - using existing CSS animations */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
           <Card className="max-w-3xl mx-auto shadow-xl bg-card p-6 md:p-10 animate-fadeInUp opacity-0">
            <CardHeader className="text-center p-0 mb-6">
              <CardTitle className="text-3xl font-bold text-primary">Ready to Get Started?</CardTitle>
              <CardDescription className="text-lg text-muted-foreground mt-2">
                Find out how our tailored virtual assistant solutions can transform your business. Schedule a free consultation today!
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 flex justify-center">
              <Button size="lg" onClick={() => setIsSchedulingModalOpen(true)} className="bg-accent hover:bg-accent/90 text-accent-foreground transition-transform hover:scale-105">
                Schedule Your Consultation
                <CalendarDays className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <SchedulingModal isOpen={isSchedulingModalOpen} onOpenChange={setIsSchedulingModalOpen} />
    </>
  );
}
