"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import SchedulingModal from "@/components/ui/SchedulingModal";
import LogoCarousel from "@/components/ui/LogoCarousel";
import { ArrowRight, CalendarDays, Zap, Settings, LineChart, CheckCircle } from "lucide-react"; // Updated icons

export default function HomePage() {
  const [isSchedulingModalOpen, setIsSchedulingModalOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-background">
         <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url(https://www.transparenttextures.com/patterns/arabesque.png)"}}></div> {/* Corrected typo in URL */}
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Virtual Assistants for <span className="text-primary">Startups</span> and <span className="text-primary">Enterprises</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            Elevate your productivity with our expert virtual assistance services. Focus on what you do best, we'll handle the rest.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/80 text-primary-foreground transition-transform hover:scale-105">
              <Link href="/services">
                Explore Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" onClick={() => setIsSchedulingModalOpen(true)} className="border-accent text-accent hover:bg-accent/10 transition-transform hover:scale-105">
              Schedule a Free Consultation <CalendarDays className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Logos Carousel */}
      <LogoCarousel />

      {/* How It Works / Benefits Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Why Choose VirtualAssist Hub?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
                  <Settings className="h-8 w-8" /> {/* Using Lucide icon */}
                </div>
                <CardTitle className="text-xl font-semibold">Expert VAs</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Access a pool of highly skilled and experienced virtual assistants tailored to your industry.</CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
                 <LineChart className="h-8 w-8" /> {/* Using Lucide icon */}
                </div>
                <CardTitle className="text-xl font-semibold">Scalable Solutions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Whether you're a startup or an enterprise, our services scale with your business needs.</CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                 <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full w-fit mb-4">
                  <CheckCircle className="h-8 w-8" /> {/* Using Lucide icon */}
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
      
      {/* Schedule a Call Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="max-w-3xl mx-auto shadow-xl bg-card p-6 md:p-10">
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
