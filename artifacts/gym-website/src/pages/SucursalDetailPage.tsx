import React from 'react';
import { useParams, Link, useLocation } from 'wouter';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, ArrowLeft } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';
import { branches } from '@/data/branches';

export default function SucursalDetailPage() {
  const params = useParams<{ id: string }>();
  const [, setLocation] = useLocation();
  
  const branch = branches.find(b => b.id === params.id);
  
  if (!branch) {
    setLocation('/sucursales');
    return null;
  }

  return (
    <section className="py-24 bg-[#050505] min-h-screen">
      <div className="container mx-auto px-6">
        <Link href="/sucursales" className="inline-flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm font-medium tracking-wide mb-12">
          <ArrowLeft size={16} /> VOLVER A SUCURSALES
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col lg:flex-row gap-10"
        >
          {/* LEFT COLUMN */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <div className={`relative w-full overflow-hidden rounded-sm bg-zinc-900 ${branch.imageAspect} ${branch.accentGlow}`}>
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-zinc-600 font-heading tracking-wider uppercase text-sm">Foto de Sucursal</span>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent" />
              
              {branch.promo && (
                <div className="absolute top-4 right-4 bg-primary text-black font-bold px-3 py-1 text-sm rounded-sm tracking-wide shadow-lg">
                  {branch.promo}
                </div>
              )}
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h1 className="text-2xl md:text-3xl font-heading font-bold text-white tracking-wide">
                  {branch.name}
                </h1>
              </div>
            </div>
            
            <div className="glass-card rounded-sm p-5 flex items-start gap-3 mt-2">
              <MapPin className="text-primary shrink-0 mt-0.5" size={20} />
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Dirección</p>
                <p className="text-white text-sm">{branch.address}</p>
              </div>
            </div>
            
            <div className="glass-card rounded-sm p-5 flex items-start gap-3">
              <Clock className="text-primary shrink-0 mt-0.5" size={20} />
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Horario</p>
                <p className="text-white text-sm">{branch.hours}</p>
              </div>
            </div>
            
            <div className="glass-card rounded-sm p-5 flex items-start gap-3">
              <Phone className="text-primary shrink-0 mt-0.5" size={20} />
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Teléfono</p>
                <p className="text-white text-sm">{branch.phone}</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-4">
              <a href={branch.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-primary text-black font-bold py-3 px-4 rounded-sm hover:bg-white transition-colors text-sm tracking-wide">
                <FaWhatsapp size={16} /> WHATSAPP
              </a>
              <a href={branch.instagramUrl} target="_blank" rel="noopener noreferrer" className="glass-card flex items-center gap-2 rounded-sm py-3 px-4 text-gray-300 hover:text-primary hover:border-primary/40 transition-colors text-sm tracking-wide">
                <FaInstagram size={16} /> {branch.instagramHandle}
              </a>
              {branch.facebookUrl && (
                <a href={branch.facebookUrl} target="_blank" rel="noopener noreferrer" className="glass-card flex items-center gap-2 rounded-sm py-3 px-4 text-gray-300 hover:text-primary hover:border-primary/40 transition-colors text-sm tracking-wide">
                  <FaFacebook size={16} /> Facebook
                </a>
              )}
              <a href={branch.mapsUrl} target="_blank" rel="noopener noreferrer" className="glass-card flex items-center gap-2 rounded-sm py-3 px-4 text-gray-300 hover:text-primary hover:border-primary/40 transition-colors text-sm tracking-wide">
                <MapPin size={16} /> Ver en Maps
              </a>
            </div>
          </div>
          
          {/* RIGHT COLUMN */}
          <div className="flex-1 flex flex-col gap-6">
            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">Membresías</p>
              <h2 className="text-2xl font-heading font-bold text-white">Elige tu Plan</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {branch.plans.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} 
                  transition={{ delay: i * 0.08 }}
                  className={`relative rounded-sm p-5 flex flex-col gap-3 ${plan.highlight ? 'bg-primary/10 border border-primary/60' : 'glass-card'}`}
                >
                  {plan.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-black text-xs font-bold tracking-wider px-3 py-1 rounded-sm shadow-md">
                      MEJOR PRECIO
                    </div>
                  )}
                  <div className={plan.highlight ? 'mt-2' : ''}>
                    <p className={`text-sm font-medium tracking-wide ${plan.highlight ? 'text-primary' : 'text-gray-400'}`}>{plan.name}</p>
                    <p className="text-3xl font-heading font-black text-white">
                      ${plan.price}
                      <span className="text-base font-normal text-gray-500">/mes prom.</span>
                    </p>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">{plan.desc}</p>
                  <a href={branch.whatsappUrl} target="_blank" rel="noopener noreferrer"
                     className={`mt-auto inline-flex items-center justify-center py-2.5 px-4 rounded-sm text-sm font-bold tracking-wider transition-colors ${plan.highlight ? 'bg-primary text-black hover:bg-white' : 'border border-white/20 text-white hover:border-primary hover:text-primary'}`}
                  >
                    CONSULTAR
                  </a>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-4">
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">Ubicación</p>
              <div className="h-64 rounded-sm overflow-hidden border border-white/10 relative">
                <iframe
                  src={branch.mapEmbedUrl}
                  width="100%" height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(80%) contrast(120%)" }}
                  allowFullScreen 
                  loading="lazy"
                  title={`Mapa de ${branch.name}`}
                />
              </div>
            </div>
            
            {branch.promo && (
              <div className="glass-card rounded-sm p-5 border-l-2 border-primary flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-wider text-primary mb-1">{branch.promo}</p>
                  <p className="text-white font-medium text-sm">Trae a un amigo y ambos entrenan juntos. Consulta disponibilidad.</p>
                </div>
                <a href={branch.whatsappUrl} target="_blank" rel="noopener noreferrer"
                   className="shrink-0 w-full sm:w-auto text-center bg-primary text-black font-bold py-2 px-4 rounded-sm text-sm hover:bg-white transition-colors tracking-wide">
                  APLICAR
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}