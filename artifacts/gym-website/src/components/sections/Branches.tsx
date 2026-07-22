import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { branches } from "@/data/branches";
import { MapPin, Clock, Phone, Star, X } from "lucide-react";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

// Real images for first two, placeholders for rest
import branchCentroImg from "@assets/branch-centro.jpg";
import branchNorteImg from "@assets/branch-norte.jpg";

const galleryImages: Record<string, string[]> = {
  centro: [branchCentroImg, branchNorteImg, branchCentroImg], // Resusing images just to have a gallery
  norte: [branchNorteImg, branchCentroImg, branchNorteImg],
};

function Lightbox({ images, initialIndex, onClose }: { images: string[], initialIndex: number, onClose: () => void }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm">
      <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
      >
        <X className="w-8 h-8" />
      </button>
      
      <div className="relative max-w-5xl w-full aspect-video">
        <img 
          src={images[currentIndex]} 
          alt="Gallery" 
          className="w-full h-full object-contain"
        />
        
        {images.length > 1 && (
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4">
            <button 
              onClick={() => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
              className="w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-primary transition-colors border border-white/20"
            >
              &larr;
            </button>
            <button 
              onClick={() => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
              className="w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-primary transition-colors border border-white/20"
            >
              &rarr;
            </button>
          </div>
        )}
      </div>
      
      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-colors ${
                idx === currentIndex ? "bg-primary" : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function Branches() {
  const [lightboxData, setLightboxData] = useState<{images: string[], index: number} | null>(null);

  return (
    <section id="sucursales" className="py-32 bg-[#111111]">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-[1px] bg-primary"></div>
            <span className="text-primary tracking-[0.2em] text-xs font-semibold uppercase">Nuestras Sedes</span>
            <div className="w-8 h-[1px] bg-primary"></div>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">Encuentra tu Apex</h2>
        </div>

        <div className="space-y-32">
          {branches.map((branch, index) => {
            const isEven = index % 2 === 0;
            const images = galleryImages[branch.id] || [];
            const hasImages = images.length > 0;
            
            return (
              <motion.div 
                key={branch.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                {/* Separator line for all but the first */}
                {index > 0 && (
                  <div className="absolute -top-16 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
                )}
                
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-white/10 gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-primary/10 text-primary px-3 py-1 text-xs font-bold tracking-wider uppercase border border-primary/20">
                        Sede {index + 1}
                      </span>
                    </div>
                    <h3 className="font-serif text-3xl md:text-4xl font-bold text-white tracking-wide">
                      {branch.name}
                    </h3>
                  </div>
                  
                  <div className="flex gap-2">
                    <a href={branch.whatsappUrl} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-[#25D366] text-white hover:bg-[#20bd5a] transition-colors rounded-sm">
                      <FaWhatsapp className="w-6 h-6" />
                    </a>
                    <a href={branch.mapsUrl} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-[#1A1A1A] border border-white/10 text-white hover:border-primary hover:text-primary transition-colors rounded-sm">
                      <MapPin className="w-5 h-5" />
                    </a>
                    <a href={branch.facebookUrl} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-[#1A1A1A] border border-white/10 text-white hover:border-primary hover:text-primary transition-colors rounded-sm">
                      <FaFacebookF className="w-5 h-5" />
                    </a>
                    <a href={branch.instagramUrl} target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center bg-[#1A1A1A] border border-white/10 text-white hover:border-primary hover:text-primary transition-colors rounded-sm">
                      <FaInstagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
                  
                  {/* Left Column (or Right if odd): Images & Info */}
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    {/* Gallery */}
                    <div className="flex gap-4 overflow-x-auto pb-4 mb-6 snap-x hide-scrollbar">
                      {hasImages ? (
                        images.map((img, i) => (
                          <div 
                            key={i} 
                            className="min-w-[80%] md:min-w-[60%] aspect-video relative group cursor-pointer snap-center shrink-0"
                            onClick={() => setLightboxData({ images, index: i })}
                          >
                            <img src={img} alt={`${branch.name} ${i+1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                          </div>
                        ))
                      ) : (
                        // Skeleton placeholders
                        [1, 2].map((i) => (
                          <div key={i} className="min-w-[80%] md:min-w-[60%] aspect-video bg-[#1A1A1A] border border-white/5 flex items-center justify-center snap-center shrink-0">
                            <span className="text-muted-foreground/30 font-serif tracking-widest uppercase">Próximamente</span>
                          </div>
                        ))
                      )}
                    </div>
                    
                    {/* Info Grid */}
                    <div className="bg-[#161616] border border-white/5 p-6 space-y-4">
                      <div className="flex items-start gap-4">
                        <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground">{branch.address}</span>
                      </div>
                      <div className="flex items-start gap-4">
                        <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground">{branch.hours}</span>
                      </div>
                      <div className="flex items-start gap-4">
                        <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-foreground">{branch.phone}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Column (or Left if odd): Pricing */}
                  <div className={isEven ? '' : 'lg:col-start-1'}>
                    <h4 className="font-serif text-2xl text-white mb-6 uppercase tracking-wider">Planes de Membresía</h4>
                    <div className="space-y-4">
                      {branch.plans.map((plan, i) => (
                        <div 
                          key={i} 
                          className={`p-6 border relative transition-all duration-300 hover:-translate-y-1 ${
                            plan.isPopular 
                              ? 'bg-primary/5 border-primary' 
                              : 'bg-[#161616] border-white/5 hover:border-primary/50'
                          }`}
                        >
                          {plan.isPopular && (
                            <div className="absolute -top-3 left-6 bg-primary text-black text-xs font-bold uppercase tracking-wider px-3 py-1 flex items-center gap-1">
                              <Star className="w-3 h-3 fill-black" />
                              Más Popular
                            </div>
                          )}
                          <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-4">
                            <h5 className="font-serif text-xl font-bold text-white">{plan.name}</h5>
                            <span className="text-lg font-bold text-primary">{plan.price}</span>
                          </div>
                          <ul className="space-y-2">
                            {plan.features.map((feature, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0"></div>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxData && (
          <Lightbox 
            images={lightboxData.images} 
            initialIndex={lightboxData.index} 
            onClose={() => setLightboxData(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}
