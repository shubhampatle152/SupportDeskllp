// src/components/ui/ConfettiBurst.jsx
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const NUM_CONFETTI = 30; // Number of confetti pieces
const COLORS = ["#FF7F50", "#008080", "#FFD700", "#FF69B4", "#ADD8E6"]; // Coral, Teal, Gold, Pink, Light Blue


const ConfettiPiece = ({ initialX, initialY, color }) => {
  // Animation: fade out, random horizontal and vertical movement, spin. Duration 1.2s
  const variants = {
    initial: {
      x: initialX,
      y: initialY,
      opacity: 1,
      scale: Math.random() * 0.5 + 0.5, // Random initial scale
      rotate: Math.random() * 360,    // Random initial rotation
    },
    animate: {
      y: initialY - (Math.random() * 100 + 150), // Move upwards
      x: initialX + (Math.random() - 0.5) * 200, // Spread horizontally
      opacity: 0,
      scale: 0,
      rotate: Math.random() * 720 + 360, // More rotation
      transition: {
        duration: 1.2, // Duration 1.2s
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      style={{
        position: "absolute",
        width: "10px",
        height: "10px",
        backgroundColor: color,
        borderRadius: "50%",
        left: 0, // Positioned by Framer Motion x/y
        top: 0,  // Positioned by Framer Motion x/y
      }}
    />
  );
};


export default function ConfettiBurst({ isActive, onAnimationComplete }) {
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    if (isActive) {
      const newPieces = Array.from({ length: NUM_CONFETTI }).map((_, i) => (
        <ConfettiPiece
          key={i}
          initialX={0} // Center of burst (can be adjusted based on trigger element)
          initialY={0} // Center of burst
          color={COLORS[Math.floor(Math.random() * COLORS.length)]}
        />
      ));
      setPieces(newPieces);

      // Notify parent after animation duration (approx 1.2s)
      // Plus a small buffer
      const timer = setTimeout(() => {
        if (onAnimationComplete) {
          onAnimationComplete();
        }
        setPieces([]); // Clear pieces after animation
      }, 1500); // Adjusted to ensure pieces animate out

      return () => clearTimeout(timer);
    }
  }, [isActive, onAnimationComplete]);

  if (!isActive || pieces.length === 0) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed", // Or absolute relative to the form button
        left: "50%", // Example: Center of screen
        top: "50%",  // Example: Center of screen
        width: 0,
        height: 0,
        zIndex: 1000, // Ensure it's on top
      }}
      aria-hidden="true"
    >
      {pieces}
    </div>
  );
}
