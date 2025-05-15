// src/components/ui/ServiceCard.jsx
"use client";

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import * as LucideIcons from "lucide-react";
import Link from "next/link";
import { Button } from "./button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";


const getIcon = (name, props) => {
  const IconComponent = LucideIcons[name];
  if (!IconComponent) {
    return <LucideIcons.HelpCircle {...props} />;
  }
  return <IconComponent {...props} />;
};

// Card animation variants
// Fade in from bottom with slight rotation, duration 0.8s
const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -10 }, // Start from bottom, slightly rotated
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.8, ease: "easeOut" }, // Duration 0.8s
  },
};

export default function ServiceCard({ id, title, description, iconName }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible" // Animate when card enters viewport
      viewport={{ once: true, amount: 0.3 }} // Trigger once, when 30% of card is visible
      className="h-full" // Ensure motion.div takes full height for layout
    >
      <Card className="flex flex-col h-full hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
        <CardHeader className="items-center text-center p-6 bg-primary/5">
          <div className="p-4 bg-primary text-primary-foreground rounded-full mb-4 inline-block">
            {getIcon(iconName, { className: "h-10 w-10" })}
          </div>
          <CardTitle className="text-2xl font-semibold text-primary">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow p-6 text-center">
          <CardDescription className="text-base text-muted-foreground mb-6">
            {description}
          </CardDescription>
        </CardContent>
        <div className="p-6 pt-0 mt-auto">
          <Button asChild variant="outline" className="w-full border-accent text-accent hover:bg-accent/10 hover:text-accent-foreground">
            <Link href={`/services#${id}`}>
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}
