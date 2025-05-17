
"use client"; 

import Header from './Header';
import Footer from './Footer';
import WhatsappIcon from '../ui/WhatsappIcon';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const AppLayout = ({ children }) => {
  const pathname = usePathname();

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
          key={pathname} 
          variants={pageVariants}
          initial="initial"
          animate="in"
          exit="out"
          className="flex-grow"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
      <WhatsappIcon />
    </div>
  );
};

export default AppLayout;
