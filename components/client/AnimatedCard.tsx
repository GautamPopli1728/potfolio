'use client';
import { motion } from 'framer-motion';

export function AnimatedCard({ children, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
    >
      {children}
    </motion.div>
  );
} 