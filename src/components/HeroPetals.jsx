import React from 'react';
import { motion } from 'framer-motion';

export default function HeroPetals() {
  // Static configuration of floating rose / marigold petals
  const petals = [
    { id: 1, left: '8%', size: 14, delay: 0, duration: 11, rotate: 45, color: '#E87A5D' },
    { id: 2, left: '22%', size: 18, delay: 3, duration: 13, rotate: 120, color: '#F2A93B' },
    { id: 3, left: '38%', size: 12, delay: 1.5, duration: 10, rotate: 80, color: '#E87A5D' },
    { id: 4, left: '60%', size: 16, delay: 4, duration: 14, rotate: 200, color: '#DFB258' },
    { id: 5, left: '76%', size: 14, delay: 2, duration: 12, rotate: 30, color: '#E87A5D' },
    { id: 6, left: '88%', size: 20, delay: 5, duration: 15, rotate: 160, color: '#F2A93B' },
  ];

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1
      }}
    >
      {/* Warm Diya Radial Glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(500px, 90vw)',
          height: 'min(500px, 90vw)',
          background: 'radial-gradient(circle, rgba(200, 147, 46, 0.18) 0%, rgba(91, 26, 24, 0.08) 50%, transparent 75%)',
          filter: 'blur(40px)',
          borderRadius: '50%',
          animation: 'diyaPulse 6s ease-in-out infinite alternate'
        }}
      />

      {/* Floating Petals */}
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{ y: -40, opacity: 0, rotate: 0 }}
          animate={{
            y: ['0vh', '105vh'],
            x: [0, 25, -20, 15, 0],
            opacity: [0, 0.75, 0.85, 0.6, 0],
            rotate: [petal.rotate, petal.rotate + 180, petal.rotate + 360]
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear'
          }}
          style={{
            position: 'absolute',
            left: petal.left,
            top: -20,
            width: petal.size,
            height: petal.size * 1.4,
            background: `radial-gradient(ellipse at 30% 30%, ${petal.color}, #9C2A20)`,
            borderRadius: '50% 50% 50% 0',
            filter: 'drop-shadow(0 2px 4px rgba(91,26,24,0.15))'
          }}
        />
      ))}

      <style>{`
        @keyframes diyaPulse {
          0% { transform: translate(-50%, -50%) scale(0.92); opacity: 0.6; }
          100% { transform: translate(-50%, -50%) scale(1.08); opacity: 0.95; }
        }
      `}</style>
    </div>
  );
}

