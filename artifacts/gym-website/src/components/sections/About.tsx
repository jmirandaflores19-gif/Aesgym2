import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import aboutImg from "@assets/about.jpg";

function AnimatedCounter({ end, duration = 2, suffix = "" }: { end: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        // easeOutQuart
        const easeOut = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOut * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export function About() {
  return (
    <section id="nosotros" className="relative py-32 bg-[#111111] overflow-hidden">
      {/* Large background decorative number */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 text-[30vw] font-serif font-bold text-white/[0.02] leading-none select-none pointer-events-none z-0">
        2018
      </div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-primary"></div>
              <span className="text-primary tracking-[0.2em] text-xs font-semibold uppercase">Nuestra Historia</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Más que un gimnasio.<br/>Una filosofía de vida.
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              Desde 2018, Apex Fitness ha redefinido el estándar del fitness premium en la región. Con equipamiento de última generación, entrenadores certificados internacionalmente y una comunidad de alto rendimiento, te ofrecemos el entorno perfecto para alcanzar tu máximo potencial.
            </p>
            
            <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
              <div>
                <div className="text-3xl md:text-4xl font-serif text-primary font-bold mb-2">
                  <AnimatedCounter end={7} />
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Sucursales</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-serif text-primary font-bold mb-2">
                  <AnimatedCounter end={15000} suffix="+" />
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Miembros</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-serif text-primary font-bold mb-2">
                  <AnimatedCounter end={6} />
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">Años de Excelencia</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full max-w-xl lg:max-w-none mx-auto relative"
          >
            <div className="aspect-[4/5] overflow-hidden relative">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10"></div>
              <img 
                src={aboutImg} 
                alt="Apex Fitness Trainer" 
                className="object-cover w-full h-full grayscale-[0.2] contrast-125"
              />
              <div className="absolute inset-0 border border-primary/30 z-20 m-4"></div>
            </div>
            {/* Decorative gold block */}
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary -z-10"></div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
