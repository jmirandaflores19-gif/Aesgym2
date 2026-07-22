export interface Plan {
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface Branch {
  id: string;
  name: string;
  address: string;
  hours: string;
  phone: string;
  whatsappUrl: string;
  mapsUrl: string;
  facebookUrl: string;
  instagramUrl: string;
  tiktokUrl: string;
  plans: Plan[];
}

export const branches: Branch[] = [
  {
    id: "centro",
    name: "APEX FITNESS — CENTRO",
    address: "Av. Principal 1234, Centro, Ciudad",
    hours: "Lun-Vie 5:00am–11:00pm | Sáb-Dom 7:00am–9:00pm",
    phone: "+54 9 11 2345-6789",
    whatsappUrl: "https://wa.me/5491123456789",
    mapsUrl: "https://maps.google.com",
    facebookUrl: "https://facebook.com/apexfitness",
    instagramUrl: "https://instagram.com/apexfitness",
    tiktokUrl: "https://tiktok.com/@apexfitness",
    plans: [
      {
        name: "Básico",
        price: "$15.000/mes",
        features: ["Acceso sala", "Vestuarios", "App Apex"]
      },
      {
        name: "Premium",
        price: "$22.000/mes",
        features: ["Todo Básico", "Clases grupales", "Nutrición básica"],
        isPopular: true
      },
      {
        name: "Elite",
        price: "$35.000/mes",
        features: ["Todo Premium", "Entrenador personal", "Recuperación"]
      }
    ]
  },
  {
    id: "norte",
    name: "APEX FITNESS — NORTE",
    address: "Blvd. Norte 567, Barrio Norte, Ciudad",
    hours: "Lun-Vie 5:00am–11:00pm | Sáb-Dom 7:00am–9:00pm",
    phone: "+54 9 11 3456-7890",
    whatsappUrl: "https://wa.me/5491134567890",
    mapsUrl: "https://maps.google.com",
    facebookUrl: "https://facebook.com/apexfitnessnorte",
    instagramUrl: "https://instagram.com/apexfitnessnorte",
    tiktokUrl: "https://tiktok.com/@apexfitnessnorte",
    plans: [
      {
        name: "Básico",
        price: "$15.000/mes",
        features: ["Acceso sala", "Vestuarios", "App Apex"]
      },
      {
        name: "Premium",
        price: "$22.000/mes",
        features: ["Todo Básico", "Clases grupales", "Nutrición básica"],
        isPopular: true
      },
      {
        name: "Elite",
        price: "$35.000/mes",
        features: ["Todo Premium", "Entrenador personal", "Recuperación"]
      }
    ]
  },
  {
    id: "sur",
    name: "APEX FITNESS — SUR",
    address: "Calle Sur 890, Barrio Sur, Ciudad",
    hours: "Lun-Vie 5:00am–11:00pm | Sáb-Dom 7:00am–9:00pm",
    phone: "+54 9 11 4567-8901",
    whatsappUrl: "https://wa.me/5491145678901",
    mapsUrl: "https://maps.google.com",
    facebookUrl: "https://facebook.com/apexfitnesssur",
    instagramUrl: "https://instagram.com/apexfitnesssur",
    tiktokUrl: "https://tiktok.com/@apexfitnesssur",
    plans: [
      {
        name: "Básico",
        price: "$15.000/mes",
        features: ["Acceso sala", "Vestuarios", "App Apex"]
      },
      {
        name: "Premium",
        price: "$22.000/mes",
        features: ["Todo Básico", "Clases grupales", "Nutrición básica"],
        isPopular: true
      },
      {
        name: "Elite",
        price: "$35.000/mes",
        features: ["Todo Premium", "Entrenador personal", "Recuperación"]
      }
    ]
  },
  {
    id: "este",
    name: "APEX FITNESS — ESTE",
    address: "Av. Este 234, Barrio Este, Ciudad",
    hours: "Lun-Vie 5:00am–11:00pm | Sáb-Dom 7:00am–9:00pm",
    phone: "+54 9 11 5678-9012",
    whatsappUrl: "https://wa.me/5491156789012",
    mapsUrl: "https://maps.google.com",
    facebookUrl: "https://facebook.com/apexfitnesseste",
    instagramUrl: "https://instagram.com/apexfitnesseste",
    tiktokUrl: "https://tiktok.com/@apexfitnesseste",
    plans: [
      {
        name: "Básico",
        price: "$15.000/mes",
        features: ["Acceso sala", "Vestuarios", "App Apex"]
      },
      {
        name: "Premium",
        price: "$22.000/mes",
        features: ["Todo Básico", "Clases grupales", "Nutrición básica"],
        isPopular: true
      },
      {
        name: "Elite",
        price: "$35.000/mes",
        features: ["Todo Premium", "Entrenador personal", "Recuperación"]
      }
    ]
  },
  {
    id: "oeste",
    name: "APEX FITNESS — OESTE",
    address: "Ruta Oeste 456, Barrio Oeste, Ciudad",
    hours: "Lun-Vie 5:00am–11:00pm | Sáb-Dom 7:00am–9:00pm",
    phone: "+54 9 11 6789-0123",
    whatsappUrl: "https://wa.me/5491167890123",
    mapsUrl: "https://maps.google.com",
    facebookUrl: "https://facebook.com/apexfitnessoeste",
    instagramUrl: "https://instagram.com/apexfitnessoeste",
    tiktokUrl: "https://tiktok.com/@apexfitnessoeste",
    plans: [
      {
        name: "Básico",
        price: "$15.000/mes",
        features: ["Acceso sala", "Vestuarios", "App Apex"]
      },
      {
        name: "Premium",
        price: "$22.000/mes",
        features: ["Todo Básico", "Clases grupales", "Nutrición básica"],
        isPopular: true
      },
      {
        name: "Elite",
        price: "$35.000/mes",
        features: ["Todo Premium", "Entrenador personal", "Recuperación"]
      }
    ]
  },
  {
    id: "palermo",
    name: "APEX FITNESS — PALERMO",
    address: "Thames 1234 esq. Santa Fe, Palermo, Ciudad",
    hours: "Lun-Vie 5:00am–11:00pm | Sáb-Dom 7:00am–9:00pm",
    phone: "+54 9 11 7890-1234",
    whatsappUrl: "https://wa.me/5491178901234",
    mapsUrl: "https://maps.google.com",
    facebookUrl: "https://facebook.com/apexfitnesspalermo",
    instagramUrl: "https://instagram.com/apexfitnesspalermo",
    tiktokUrl: "https://tiktok.com/@apexfitnesspalermo",
    plans: [
      {
        name: "Básico",
        price: "$15.000/mes",
        features: ["Acceso sala", "Vestuarios", "App Apex"]
      },
      {
        name: "Premium",
        price: "$22.000/mes",
        features: ["Todo Básico", "Clases grupales", "Nutrición básica"],
        isPopular: true
      },
      {
        name: "Elite",
        price: "$35.000/mes",
        features: ["Todo Premium", "Entrenador personal", "Recuperación"]
      }
    ]
  },
  {
    id: "belgrano",
    name: "APEX FITNESS — BELGRANO",
    address: "Av. Cabildo 2890, Belgrano, Ciudad",
    hours: "Lun-Vie 5:00am–11:00pm | Sáb-Dom 7:00am–9:00pm",
    phone: "+54 9 11 8901-2345",
    whatsappUrl: "https://wa.me/5491189012345",
    mapsUrl: "https://maps.google.com",
    facebookUrl: "https://facebook.com/apexfitnessbelgrano",
    instagramUrl: "https://instagram.com/apexfitnessbelgrano",
    tiktokUrl: "https://tiktok.com/@apexfitnessbelgrano",
    plans: [
      {
        name: "Básico",
        price: "$15.000/mes",
        features: ["Acceso sala", "Vestuarios", "App Apex"]
      },
      {
        name: "Premium",
        price: "$22.000/mes",
        features: ["Todo Básico", "Clases grupales", "Nutrición básica"],
        isPopular: true
      },
      {
        name: "Elite",
        price: "$35.000/mes",
        features: ["Todo Premium", "Entrenador personal", "Recuperación"]
      }
    ]
  }
];
