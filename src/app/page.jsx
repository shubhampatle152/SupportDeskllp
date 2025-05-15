// src/app/page.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SchedulingModal from "@/components/ui/SchedulingModal";
import LogoCarousel from "@/components/ui/LogoCarousel";
import { ArrowRight, CalendarDays, Zap, Settings, LineChart, CheckCircle } from "lucide-react";
import { COMPANY_NAME } from "@/lib/constants";
import { motion } from "framer-motion";

// Variants for hero text stagger animation
// Duration: 0.6s for each item, stagger children by 0.2s
const heroTextContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger children by 0.2s
      delayChildren: 0.1, // Delay children by 0.1s after parent animates
    },
  },
};

const heroTextItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }, // Duration 0.6s
  },
};

const heroButtonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.6 }, // Delay after text, duration 0.6s
  },
};

export default function HomePage() {
  const [isSchedulingModalOpen, setIsSchedulingModalOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-background overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(https://www.transparenttextures.com/patterns/arabesque.png)"}}></div>
        <motion.div
          className="container mx-auto px-4 md:px-6 text-center relative z-10"
          variants={heroTextContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={heroTextItemVariants}
            className="text-4xl md:text-6xl font-bold text-foreground mb-6" // Removed animate-fadeInUp opacity-0
          >
            Virtual Assistants for <span className="text-primary">Startups</span> and <span className="text-primary">Enterprises</span>
          </motion.h1>
          <motion.p
            variants={heroTextItemVariants}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto" // Removed animate-fadeInUp opacity-0 animation-delay-200
          >
            Elevate your productivity with our expert virtual assistance services. Focus on what you do best, we'll handle the rest.
          </motion.p>
          <motion.div
            variants={heroButtonVariants} // Animate buttons container as a single item after text
            className="flex flex-col sm:flex-row justify-center gap-4" // Removed animate-fadeInUp opacity-0 animation-delay-400
          >
            <motion.div // Wrapper for individual button animation
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, duration: 0.2 }} // Hover scale duration 0.2s
            >
              <Button size="lg" asChild className="bg-primary hover:bg-primary/80 text-primary-foreground">
                <Link href="/services">
                  Explore Services <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
            <motion.div // Wrapper for individual button animation (pulsating CTA)
              animate={{
                scale: [1, 1.03, 1], // Pulsate scale effect
                transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" } // Pulsate duration 1.5s
              }}
              whileHover={{ scale: 1.05 }} // Hover scale duration 0.2s
              transition={{ type: "spring", stiffness: 300, duration: 0.2 }}
            >
              <Button size="lg" variant="outline" onClick={() => setIsSchedulingModalOpen(true)} className="border-accent text-accent hover:bg-accent/10">
                Schedule a Free Consultation <CalendarDays className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Logos Carousel */}
      {/* Original animation classes can be replaced or augmented with Framer Motion if needed */}
      <div className="animate-fadeInUp opacity-0 animation-delay-500">
        <LogoCarousel />
      </div>
      
      {/* How It Works / Benefits Section - using existing CSS animations for now */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12 animate-fadeInUp opacity-0">Why Choose {COMPANY_NAME}?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-shadow duration-300 animate-fadeInUp opacity-0 animation-delay-200">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
                  <Settings className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-semibold">Expert VAs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Access a pool of highly skilled and experienced virtual assistants tailored to your industry.</CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow duration-300 animate-fadeInUp opacity-0 animation-delay-400">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
                 <LineChart className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-semibold">Scalable Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Whether you're a startup or an enterprise, our services scale with your business needs.</CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow duration-300 animate-fadeInUp opacity-0 animation-delay-500">
              <CardHeader>
                 <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl font-semibold">Increased Focus</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Delegate tasks and free up your time to concentrate on core business growth and strategy.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Schedule a Call Section - using existing CSS animations */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="max-w-3xl mx-auto shadow-xl bg-card p-6 md:p-10 animate-fadeInUp opacity-0">
            <CardHeader className="text-center p-0 mb-6">
              <CardTitle className="text-3xl font-bold text-primary">Ready to Boost Your Productivity?</CardTitle>
              <CardDescription className="text-lg text-muted-foreground mt-2">
                Let's discuss how our virtual assistants can help your business thrive. Schedule a no-obligation call with our experts today.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 flex justify-center">
              <Button size="lg" onClick={() => setIsSchedulingModalOpen(true)} className="bg-accent hover:bg-accent/90 text-accent-foreground transition-transform hover:scale-105">
                Schedule Your Call Now
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
