// src/components/layout/AppLayout.jsx
"use client"; // Required for AnimatePresence and motion components

import Header from './Header';
import Footer from './Footer';
import WhatsappIcon from '../ui/WhatsappIcon';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function AppLayout({ children }) {
  const pathname = usePathname();

  // Page transition variants
  // Duration: 0.6s for fade-in, 0.3s for fade-out
  const pageVariants = {
    initial: { opacity: 0 },
    in: { opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } },
    out: { opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={pathname} // Key is important for AnimatePresence to track components
          variants={pageVariants}
          initial="initial"
          animate="in"
          exit="out"
          className="flex-grow" // Removed animate-fadeIn opacity-0 as Framer Motion handles it
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
      <WhatsappIcon />
    </div>
  );
}