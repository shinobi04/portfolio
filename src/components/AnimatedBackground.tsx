"use client";

import { motion } from 'framer-motion';

export default function AnimatedBackground() {
  return (
    <div className="bg-blobs">
      <motion.div 
        className="blob" 
        style={{ 
          top: '5%', 
          left: '10%', 
          background: 'radial-gradient(circle, rgba(255, 0, 150, 0.3), transparent 70%)' 
        }}
        animate={{ 
          x: [0, 30, 0], 
          y: [0, -30, 0],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 18, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="blob" 
        style={{ 
          top: '15%', 
          right: '5%', 
          background: 'radial-gradient(circle, rgba(0, 100, 255, 0.3), transparent 70%)' 
        }}
        animate={{ 
          x: [0, -40, 0], 
          y: [0, 20, 0],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 24, 
          ease: "easeInOut" 
        }}
      />
      <motion.div 
        className="blob" 
        style={{ 
          bottom: '5%', 
          left: '25%', 
          background: 'radial-gradient(circle, rgba(100, 255, 200, 0.3), transparent 70%)' 
        }}
        animate={{ 
          x: [0, 20, 0], 
          y: [0, -20, 0],
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 22, 
          ease: "easeInOut" 
        }}
      />
    </div>
  );
}