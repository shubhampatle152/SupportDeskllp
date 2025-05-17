
"use client";

import Link from "next/link";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS, COMPANY_NAME } from "@/lib/constants";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import SchedulingModal from "@/components/ui/SchedulingModal";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSchedulingModalOpen, setIsSchedulingModalOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mobileMenuVariants = {
    hidden: { x: "-100%", opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } },
    visible: { x: "0%", opacity: 1, transition: { duration: 0.4, ease: "easeInOut" } },
  };

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled ? "bg-background/90 shadow-md backdrop-blur-sm" : "bg-transparent"
        )}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-primary hover:opacity-80 transition-opacity">
            <Zap className="h-8 w-8" />
            <span>{COMPANY_NAME}</span>
          </Link>

          {hasMounted && (
            <nav className="hidden items-center gap-6 md:flex">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <Button
                variant="default"
                className="bg-accent hover:bg-accent/90 text-accent-foreground transition-transform hover:scale-105"
                onClick={() => setIsSchedulingModalOpen(true)}
              >
                Let's Connect
              </Button>
            </nav>
          )}

          {hasMounted && (
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(true)}>
                    <Menu className="h-6 w-6 text-foreground" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <AnimatePresence>
                  {isMobileMenuOpen && (
                    <SheetContent
                      side="left" 
                      className="w-full max-w-xs bg-background p-0" 
                      asChild 
                    >
                      <motion.div
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden" 
                        className="flex flex-col h-full p-6"
                      >
                        <div className="flex justify-between items-center mb-4">
                          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                            <Zap className="h-7 w-7" />
                            <span>{COMPANY_NAME}</span>
                          </Link>
                          <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                            <X className="h-6 w-6 text-foreground" />
                            <span className="sr-only">Close menu</span>
                          </Button>
                        </div>
                        {NAV_LINKS.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {link.label}
                          </Link>
                        ))}
                        {hasMounted && (
                          <Button
                            variant="default"
                            size="lg"
                            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mt-auto"
                            onClick={() => {
                              setIsSchedulingModalOpen(true);
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            Let's Connect
                          </Button>
                        )}
                      </motion.div>
                    </SheetContent>
                  )}
                </AnimatePresence>
              </Sheet>
            </div>
          )}
        </div>
      </header>
      {hasMounted && <SchedulingModal isOpen={isSchedulingModalOpen} onOpenChange={setIsSchedulingModalOpen} />}
    </>
  );
};

export default Header;
