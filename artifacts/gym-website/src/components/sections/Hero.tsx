import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImg from "@assets/hero.jpg";

export function Hero() {
  const scrollToAbout = () => {
    document.querySelector("#nosotros")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBranches = () => {
    document.querySelector("#sucursales")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBenefits = () => {
    document.querySelector("#beneficios")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative h-screen w-full flex items-center overflow-hidden bg-black">
      {/* Background Image with Parallax-like feel via absolute positioning */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60 scale-105"
        style={{ backgroundImage: `url(${heroImg})` }}
      />
      
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-tr from-black/90 via-black/60 to-transparent" />
      
      {/* Content */}
      <div className="container relative z-20 mx-auto px-6 md:px-12 mt-16">
        <div className="max-w-4xl">
          <div className="overflow-hidden mb-2">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white text-shadow leading-tight"
            >
              FORJA TU
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8 pb-4">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white text-shadow leading-tight"
            >
              <span className="relative inline-block">
                MEJOR VERSIÓN
                <span className="absolute -bottom-2 left-0 w-full h-2 bg-primary"></span>
              </span>
            </motion.h1>
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-foreground/80 font-light mb-12 max-w-xl text-shadow-sm"
          >
            7 sucursales de excelencia. Un estilo de vida premium.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
            <button 
              onClick={scrollToBranches}
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold tracking-wider uppercase text-sm hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
            >
              Conoce Nuestras Sucursales
            </button>
            <button 
              onClick={scrollToBenefits}
              className="px-8 py-4 border border-white text-white font-semibold tracking-wider uppercase text-sm hover:bg-white hover:text-black transition-all hover:scale-105 active:scale-95"
            >
              Ver Beneficios
            </button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
        onClick={scrollToAbout}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
