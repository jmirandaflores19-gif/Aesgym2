export interface Plan {
  name: string;
  price: string;
  desc: string;
  highlight?: boolean;
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  hours: string;
  phone: string;
  whatsappUrl: string;
  mapsUrl: string;
  mapEmbedUrl: string;
  instagramUrl: string;
  instagramHandle: string;
  facebookUrl?: string;
  tiktokUrl?: string;
  accentColor: string;
  accentGlow: string;
  imageAspect: string;
  promo?: string;
  promoPrice?: string;
  plans: Plan[];
}

const defaultPlans: Plan[] = [
  { name: "1 Mes",    price: "000", desc: "Acceso total a la sucursal" },
  { name: "3 Meses",  price: "000", desc: "Ahorra frente al plan mensual" },
  { name: "5 Meses",  price: "000", desc: "Ideal para constancia" },
  { name: "1 Año",    price: "000", desc: "El mejor precio por mes", highlight: true },
];

export const branches: Branch[] = [
  {
    id: "norte",
    name: "AESGYM BOLIVIA — NORTE",
    address: "Calle Ejemplo 123, Zona Norte, Ciudad",
    hours: "06:00 a.m. – 10:00 p.m.",
    phone: "+00 9 00 0000-0000",
    whatsappUrl: "https://wa.me/0000000000",
    mapsUrl: "https://maps.google.com",
    mapEmbedUrl: "https://www.openstreetmap.org/export/embed.html?bbox=-63.18%2C-17.78%2C-63.17%2C-17.77&layer=mapnik",
    instagramUrl: "#",
    instagramHandle: "@sucursal_norte",
    facebookUrl: "#",
    accentColor: "bg-yellow-400",
    accentGlow: "shadow-[0_0_30px_rgba(212,175,55,0.2)]",
    imageAspect: "aspect-[4/3]",
    promo: "Promoción 2x1",
    promoPrice: "18.000",
    plans: defaultPlans,
  },
  {
    id: "sur",
    name: "AESGYM BOLIVIA — SUR",
    address: "Calle Ejemplo 456, Zona Sur, Ciudad",
    hours: "06:00 a.m. – 10:00 p.m.",
    phone: "+00 9 00 0000-0000",
    whatsappUrl: "https://wa.me/0000000000",
    mapsUrl: "https://maps.google.com",
    mapEmbedUrl: "https://www.openstreetmap.org/export/embed.html?bbox=-63.18%2C-17.78%2C-63.17%2C-17.77&layer=mapnik",
    instagramUrl: "#",
    instagramHandle: "@sucursal_sur",
    accentColor: "bg-blue-500",
    accentGlow: "shadow-[0_0_30px_rgba(59,130,246,0.2)]",
    imageAspect: "aspect-[9/10]",
    plans: defaultPlans,
  },
  {
    id: "este",
    name: "AESGYM BOLIVIA — ESTE",
    address: "Calle Ejemplo 789, Zona Este, Ciudad",
    hours: "06:00 a.m. – 10:00 p.m.",
    phone: "+00 9 00 0000-0000",
    whatsappUrl: "https://wa.me/0000000000",
    mapsUrl: "https://maps.google.com",
    mapEmbedUrl: "https://www.openstreetmap.org/export/embed.html?bbox=-63.18%2C-17.78%2C-63.17%2C-17.77&layer=mapnik",
    instagramUrl: "#",
    instagramHandle: "@sucursal_este",
    accentColor: "bg-red-500",
    accentGlow: "shadow-[0_0_30px_rgba(239,68,68,0.2)]",
    imageAspect: "aspect-[4/3]",
    plans: defaultPlans,
  },
  {
    id: "oeste",
    name: "AESGYM BOLIVIA — OESTE",
    address: "Calle Ejemplo 101, Zona Oeste, Ciudad",
    hours: "06:00 a.m. – 10:00 p.m.",
    phone: "+00 9 00 0000-0000",
    whatsappUrl: "https://wa.me/0000000000",
    mapsUrl: "https://maps.google.com",
    mapEmbedUrl: "https://www.openstreetmap.org/export/embed.html?bbox=-63.18%2C-17.78%2C-63.17%2C-17.77&layer=mapnik",
    instagramUrl: "#",
    instagramHandle: "@sucursal_oeste",
    accentColor: "bg-green-500",
    accentGlow: "shadow-[0_0_30px_rgba(34,197,94,0.2)]",
    imageAspect: "aspect-[4/3]",
    plans: defaultPlans,
  },
  {
    id: "centro",
    name: "AESGYM BOLIVIA — CENTRO",
    address: "Avenida Central 202, Centro, Ciudad",
    hours: "06:00 a.m. – 11:00 p.m.",
    phone: "+00 9 00 0000-0000",
    whatsappUrl: "https://wa.me/0000000000",
    mapsUrl: "https://maps.google.com",
    mapEmbedUrl: "https://www.openstreetmap.org/export/embed.html?bbox=-63.18%2C-17.78%2C-63.17%2C-17.77&layer=mapnik",
    instagramUrl: "#",
    instagramHandle: "@sucursal_centro",
    accentColor: "bg-purple-500",
    accentGlow: "shadow-[0_0_30px_rgba(168,85,247,0.2)]",
    imageAspect: "aspect-[4/3]",
    promo: "Matrícula Gratis",
    promoPrice: "0",
    plans: defaultPlans,
  },
  {
    id: "palermo",
    name: "AESGYM BOLIVIA — PALERMO",
    address: "Calle Palermo 303, Ciudad",
    hours: "06:00 a.m. – 10:00 p.m.",
    phone: "+00 9 00 0000-0000",
    whatsappUrl: "https://wa.me/0000000000",
    mapsUrl: "https://maps.google.com",
    mapEmbedUrl: "https://www.openstreetmap.org/export/embed.html?bbox=-63.18%2C-17.78%2C-63.17%2C-17.77&layer=mapnik",
    instagramUrl: "#",
    instagramHandle: "@sucursal_palermo",
    accentColor: "bg-pink-500",
    accentGlow: "shadow-[0_0_30px_rgba(236,72,153,0.2)]",
    imageAspect: "aspect-[4/3]",
    plans: defaultPlans,
  },
  {
    id: "belgrano",
    name: "AESGYM BOLIVIA — BELGRANO",
    address: "Avenida Belgrano 404, Ciudad",
    hours: "06:00 a.m. – 10:00 p.m.",
    phone: "+00 9 00 0000-0000",
    whatsappUrl: "https://wa.me/0000000000",
    mapsUrl: "https://maps.google.com",
    mapEmbedUrl: "https://www.openstreetmap.org/export/embed.html?bbox=-63.18%2C-17.78%2C-63.17%2C-17.77&layer=mapnik",
    instagramUrl: "#",
    instagramHandle: "@sucursal_belgrano",
    accentColor: "bg-orange-500",
    accentGlow: "shadow-[0_0_30px_rgba(249,115,22,0.2)]",
    imageAspect: "aspect-[4/3]",
    plans: defaultPlans,
  }
];