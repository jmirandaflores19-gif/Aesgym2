import React from 'react';
import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';
import { Link } from 'wouter';
import { branches } from '@/data/branches';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Col 1 */}
          <div>
            <div className="flex items-center gap-1 font-heading font-black tracking-[0.2em] uppercase text-2xl mb-4">
              <span className="text-white">AESGYM</span>
              <span className="gold-gradient-text">BOLIVIA</span>
            </div>
            <p className="text-gray-400 text-sm max-w-sm">
              Placeholder slogan about the gym, pushing boundaries and achieving fitness goals. Reaching new heights every day.
            </p>
          </div>

          {/* Col 2 */}
          <div>
            <h4 className="text-white font-heading font-bold uppercase tracking-wider mb-4">Sucursales</h4>
            <ul className="flex flex-col gap-2">
              {branches.map((branch) => (
                <li key={branch.id}>
                  <Link href={`/sucursales/${branch.id}`} className="text-gray-400 hover:text-primary transition-colors text-sm">
                    {branch.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h4 className="text-white font-heading font-bold uppercase tracking-wider mb-4">Contacto</h4>
            <div className="flex flex-col gap-2 text-sm text-gray-400 mb-6">
              <p>Email: info@nombrefitness.com</p>
              <p>Tel: +00 9 00 0000-0000</p>
              <p>Dirección Principal: Calle Falsa 123, Central</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} AESGYM Bolivia. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              <FaTiktok size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}