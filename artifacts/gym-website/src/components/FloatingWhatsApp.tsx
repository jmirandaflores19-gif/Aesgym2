import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingWhatsApp() {
  return (
    <a 
      href="https://wa.me/0000000000" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50 w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary text-black flex items-center justify-center shadow-[0_4px_24px_rgba(0,0,0,0.5)] hover:bg-white hover:scale-105 transition-all"
    >
      <FaWhatsapp size={28} className="md:w-8 md:h-8" />
    </a>
  );
}