import { motion } from "framer-motion";
import { Dumbbell, Medal, Clock, Apple, Users, Smartphone } from "lucide-react";

const benefits = [
  {
    icon: Dumbbell,
    title: "Equipamiento Premium",
    description: "Máquinas de última generación de las mejores marcas del mundo."
  },
  {
    icon: Medal,
    title: "Entrenadores Elite",
    description: "Certificados internacionalmente con experiencia en alto rendimiento."
  },
  {
    icon: Clock,
    title: "Acceso 24/7",
    description: "Entrena cuando quieras, sin restricciones de horario en sedes seleccionadas."
  },
  {
    icon: Apple,
    title: "Nutrición Personalizada",
    description: "Planes nutricionales diseñados para tus objetivos específicos."
  },
  {
    icon: Users,
    title: "Clases Grupales",
    description: "Más de 50 disciplinas semanales: box, yoga, spinning, crossfit y más."
  },
  {
    icon: Smartphone,
    title: "App Exclusiva",
    description: "Seguimiento de progreso, reservas y comunidad desde tu celular."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export function Benefits() {
  return (
    <section id="beneficios" className="py-32 bg-[#0D0D0D]">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-primary"></div>
            <span className="text-primary tracking-[0.2em] text-xs font-semibold uppercase">Por qué elegirnos</span>
            <div className="w-8 h-[1px] bg-primary"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">La diferencia Apex</h2>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-[#1A1A1A] p-10 border border-white/5 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-2 flex flex-col items-start"
            >
              <div className="w-16 h-16 rounded-full bg-black/50 border border-white/10 flex items-center justify-center mb-8 group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                <benefit.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-serif tracking-wide">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
