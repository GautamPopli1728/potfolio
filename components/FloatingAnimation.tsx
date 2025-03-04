'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FloatingAnimationProps {
  children: ReactNode;
  delay?: number;
}

export default function FloatingAnimation({ children, delay = 0 }: FloatingAnimationProps) {
  return (
    <motion.div
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        delay,
      }}
    >
      {children}
    </motion.div>
  );
} 