import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-primary/20 pt-20 pb-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <h2 className="font-serif text-2xl font-bold tracking-widest text-primary mb-4">
              APEX FITNESS
            </h2>
            <p className="text-muted-foreground font-medium">
              Forja tu mejor versión.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-lg tracking-widest text-foreground mb-6 uppercase">
              Sucursales
            </h3>
            <ul className="space-y-4">
              {["Centro", "Norte", "Sur", "Este", "Oeste", "Palermo", "Belgrano"].map((branch) => (
                <li key={branch}>
                  <a href="#sucursales" className="text-muted-foreground hover:text-primary transition-colors">
                    Apex {branch}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg tracking-widest text-foreground mb-6 uppercase">
              Servicios
            </h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Musculación</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Clases Grupales</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Entrenamiento Personal</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Nutrición</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">App Exclusiva</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-lg tracking-widest text-foreground mb-6 uppercase">
              Contacto
            </h3>
            <ul className="space-y-4 text-muted-foreground">
              <li>info@apexfitness.com</li>
              <li>+54 9 11 2345-6789</li>
              <li className="pt-4 flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all">
                  <FaFacebookF />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all">
                  <FaInstagram />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all">
                  <FaTiktok />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()} Apex Fitness. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Términos y Condiciones</a>
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
