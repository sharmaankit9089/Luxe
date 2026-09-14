export const BUSINESS = {
  name: "Luxe Caterer & Planners",
  tagline: "Luxe Farms · Catering · Planning",
  phones: ["+91 95601 35069", "+91 83838 03539", "+91 99111 16133"],
  whatsapp: "919560135069",
  primaryPhone: "+919560135069",
  email: "Info@theluxevents.com",
  locations: [
    {
      name: "Luxe Caterers & Event Planner",
      address: "A-21, Noida sector 52, Noida, Uttar Pradesh 201301",
      mapEmbed: "https://maps.google.com/maps?q=A-21,+Noida+sector+52,+Noida,+Uttar+Pradesh+201301&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    {
      name: "Luxe Event Planners",
      address: "C/12, Sector 1, Noida Extension, Bisrakh Jalalpur, Greater Noida, Uttar Pradesh 201318",
      mapEmbed: "https://maps.google.com/maps?q=28.561861,77.450302&t=&z=15&ie=UTF8&iwloc=&output=embed"
    },
    {
      name: "Luxe Farms",
      address: "Farm 1&2, Phase 1A, Green Beauty Farm, Near Old Club, Sector 135, Noida, Uttar Pradesh 201304",
      mapEmbed: "https://maps.google.com/maps?q=28.4833624,77.3852649&t=&z=15&ie=UTF8&iwloc=&output=embed"
    }
  ],
  social: {
    facebook: "https://www.facebook.com/people/Luxe-Event-Planners/100094581399960/",
    instagram: "https://www.instagram.com/luxeventplanners/",
  },
  areas: ["Noida", "Greater Noida", "Ghaziabad", "Delhi", "Gurgaon", "Faridabad"],
};

export const IMAGES = {
  hero: "https://images.pexels.com/photos/34079355/pexels-photo-34079355.jpeg?auto=compress&cs=tinysrgb&w=1600&q=70",
  servicesDecor:
    "https://images.pexels.com/photos/33417236/pexels-photo-33417236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  servicesVenue:
    "https://images.pexels.com/photos/14399476/pexels-photo-14399476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  servicesCatering:
    "https://images.unsplash.com/photo-1738202321539-9ed4a727f735?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1MDZ8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwY2F0ZXJpbmclMjBJbmRpYW4lMjBmb29kJTIwYnVmZmV0fGVufDB8fHx8MTc3NzI4NDUxNnww&ixlib=rb-4.1.0&q=85",
  gallery: [
    "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=compress&cs=tinysrgb&w=800&q=80",
    "https://images.unsplash.com/photo-1708606811579-23b18fc48007?auto=compress&cs=tinysrgb&w=800&q=80",
    "https://images.unsplash.com/photo-1634253539596-5f1627064d68?auto=compress&cs=tinysrgb&w=800&q=80",
    "https://images.unsplash.com/photo-1581546085212-f25477a9d4fb?auto=compress&cs=tinysrgb&w=800&q=80",
    "https://images.unsplash.com/photo-1557693116-fb9cff08f972?auto=compress&cs=tinysrgb&w=800&q=80",
  ],
  corporate:
    "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=compress&cs=tinysrgb&w=800&q=80",
  wedding:
    "https://images.unsplash.com/photo-1519741497674-611481863552?auto=compress&cs=tinysrgb&w=800&q=80",
};

export const VIDEOS = [
  {
    src: "https://customer-assets.emergentagent.com/job_farm-cater-plan/artifacts/3lowv8a8_Luxe%20Event%20Farm.mp4",
    title: "Luxe Farms · Signature Venue",
    caption: "Our 15-acre private farmhouse in Noida.",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_farm-cater-plan/artifacts/g2lvp1ew_GN%20Event.mp4",
    title: "Greater Noida Wedding",
    caption: "From mandap to vidaai — every detail handled.",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_farm-cater-plan/artifacts/01fci0z9_GGN%20Event.mp4",
    title: "Gurgaon Corporate Gala",
    caption: "A 1,000+ guest corporate evening, executed flawlessly.",
  },
  {
    src: "https://customer-assets.emergentagent.com/job_farm-cater-plan/artifacts/k75s40f4_Test%20Event.mp4",
    title: "Signature Celebration",
    caption: "Where catering, decor & planning become one.",
  },
];

export const waLink = (message = "Hello Luxe Caterer & Planners, I'd like to enquire about your services.") =>
  `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(message)}`;

export const telLink = `tel:${BUSINESS.primaryPhone}`;
