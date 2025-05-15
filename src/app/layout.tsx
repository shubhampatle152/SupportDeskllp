import ContactForm from "@/components/forms/ContactForm";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { COMPANY_NAME } from "@/lib/constants";

export default function ContactPage() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fadeInUp opacity-0">Get In Touch</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fadeInUp opacity-0 animation-delay-200">
            We're here to help and answer any question you might have. We look forward to hearing from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Card className="bg-card shadow-lg animate-fadeInLeft opacity-0 animation-delay-300">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Contact Us</CardTitle>
              <CardDescription>Fill out the form and our team will get back to you within 24 hours.</CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>

          <div className="space-y-8">
            <Card className="bg-card shadow-lg animate-fadeInRight opacity-0 animation-delay-400">
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  <Mail className="mr-3 h-6 w-6 text-accent" /> Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Send your inquiries to: <a href="mailto:support@supportdeskllp.com" className="text-accent hover:underline">support@supportdeskllp.com</a>
                </p>
                 <p className="text-sm text-muted-foreground mt-1">We aim to respond within one business day.</p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-lg animate-fadeInRight opacity-0 animation-delay-500">
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  <Phone className="mr-3 h-6 w-6 text-accent" /> Call Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Reach us at: <a href="tel:+18005551234" className="text-accent hover:underline">+1 (800) 555-1234</a>
                </p>
                <p className="text-sm text-muted-foreground mt-1">Available Mon-Fri, 9 AM - 5 PM (EST).</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card shadow-lg animate-fadeInRight opacity-0 animation-delay-700">
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center">
                  <MapPin className="mr-3 h-6 w-6 text-accent" /> Our Office
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  {COMPANY_NAME}<br />
                  123 Innovation Drive<br />
                  Tech City, TX 75001, USA
                </p>
                 <p className="text-sm text-muted-foreground mt-1">Visits by appointment only.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}