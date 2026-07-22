import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { Link } from 'wouter';
import { branches } from '@/data/branches';

export default function SucursalesPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Section 1 — Branch listing grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-bold mb-4"
            >
              NUESTRAS <span className="text-primary">SUCURSALES</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 max-w-2xl mx-auto text-lg"
            >
              Encuentra la sucursal más cercana y descubre nuestras instalaciones de primer nivel, diseñadas para potenciar tu entrenamiento.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {branches.map((branch, i) => (
              <motion.div
                key={branch.id}
                initial={{ opacity: 0, y: 30 }} 
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={`/sucursales/${branch.id}`} className={`group block relative overflow-hidden rounded-sm ${branch.imageAspect} bg-black ${branch.accentGlow}`}>
                  {/* Gray placeholder image area */}
                  <div className="w-full h-full bg-zinc-900 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                    <span className="text-zinc-700 text-sm font-heading tracking-wider uppercase">Foto Sucursal</span>
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10 group-hover:from-black/95 transition-colors duration-500" />
                  
                  {/* Card content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-between">
                    {/* Top: logo circle + branch name */}
                    <div className="flex items-center gap-3">
                      <div className={`w-11 h-11 rounded-full overflow-hidden border-2 border-white/20 bg-zinc-800 ${branch.accentGlow}`} />
                      <h3 className="text-xl font-heading font-bold text-white tracking-wide drop-shadow-lg">
                        {branch.name}
                      </h3>
                    </div>
                    {/* Bottom: address + hours + CTA */}
                    <div>
                      <div className="flex items-start gap-2 text-gray-300 text-sm mb-2 max-w-sm">
                        <MapPin className="text-primary shrink-0 mt-0.5" size={16} />
                        <span>{branch.address}</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-300 text-sm mb-4">
                        <Clock className="text-primary shrink-0 mt-0.5" size={16} />
                        <span>{branch.hours}</span>
                      </div>
                      <span className="inline-flex items-center gap-2 text-primary font-bold tracking-wider text-sm uppercase group-hover:gap-3 transition-all">
                        Ver Sucursal <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Contact & Social */}
      <section className="py-24 bg-[#080808]">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-heading font-bold mb-4"
            >
              CONTACTO Y <span className="text-primary">REDES SOCIALES</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 max-w-2xl mx-auto text-lg"
            >
              Escríbenos por WhatsApp o síguenos en redes para conocer promociones, horarios y novedades.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
            <motion.a
              href="https://wa.me/0000000000" 
              target="_blank"
              className="lg:col-span-2 glass-card rounded-sm p-8 flex flex-col justify-between gap-6 group relative overflow-hidden hover:border-primary/40 transition-colors"
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }}
            >
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
              <div>
                <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center mb-6 group-hover:bg-primary/25 transition-colors">
                  <FaWhatsapp className="text-primary" size={30} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-white mb-2">WhatsApp Principal</h3>
                <p className="text-gray-400 text-sm mb-4">Consultas, inscripciones y promociones en todas nuestras sucursales.</p>
                <p className="text-primary text-xl font-bold tracking-wide">+00 000 000-0000</p>
              </div>
              <span className="inline-flex items-center justify-center gap-2 bg-primary text-black font-bold tracking-wider py-3 px-6 rounded-sm group-hover:bg-white transition-colors">
                CHATEAR AHORA
              </span>
            </motion.a>
            
            <motion.div
              className="lg:col-span-3 h-64 lg:h-auto rounded-sm overflow-hidden border border-white/10 relative"
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-63.18%2C-17.78%2C-63.16%2C-17.76&layer=mapnik"
                width="100%" height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(80%) contrast(120%)" }}
                allowFullScreen 
                loading="lazy"
                title="Mapa Principal"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}