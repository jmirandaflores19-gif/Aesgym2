import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroAnimation() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hasShown = sessionStorage.getItem('gym-intro-shown');
    if (!hasShown) {
      setShow(true);
      sessionStorage.setItem('gym-intro-shown', 'true');
      
      const timer = setTimeout(() => {
        setShow(false);
      }, 2200);
      
      return () => clearTimeout(timer);
    }
    return () => {};
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div 
              className="flex items-center gap-3 font-heading font-black text-5xl md:text-7xl uppercase overflow-hidden"
              initial={{ opacity: 0, scale: 0.85, letterSpacing: "0.4em" }}
              animate={{ opacity: 1, scale: 1, letterSpacing: "0.15em" }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <motion.span
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
                className="text-white"
              >
                AESGYM
              </motion.span>
              <motion.span
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}
                className="gold-gradient-text"
              >
                BOLIVIA
              </motion.span>
            </motion.div>
            
            <motion.div 
              className="h-[2px] bg-primary/70"
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
            />
            
            <motion.p
              className="text-gray-400 text-xs tracking-[0.3em] uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              BODYBUILDING · DISCIPLINA · RESULTADOS
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}