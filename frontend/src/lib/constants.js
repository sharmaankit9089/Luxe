export const BUSINESS = {
  name: "Luxe Caterer & Planners",
  tagline: "Luxe Farms · Catering · Planning",
  phones: ["+91 95601 35069", "+91 83838 03539", "+91 99111 16133"],
  whatsapp: "919560135069",
  primaryPhone: "+919560135069",
  email: "Info@theluxevents.com",
  addresses: [
    "A-21, Block A, Sector 52, Noida, Uttar Pradesh 201307",
    "Tower 10B, 10th Floor, DLF Cybercity, Gurgaon 122002",
  ],
  mapsEmbed:
    "https://maps.google.com/maps?q=A-21+Block+A+Sector+52+Noida+Uttar+Pradesh+201307&t=&z=15&ie=UTF8&iwloc=&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=A-21+Block+A+Sector+52+Noida+Uttar+Pradesh+201307",
  social: {
    facebook: "https://www.facebook.com/people/Luxe-Event-Planners/100094581399960/",
    instagram: "https://www.instagram.com/luxeventplanners/",
  },
  areas: ["Noida", "Greater Noida", "Ghaziabad", "Delhi", "Gurgaon", "Faridabad"],
};

export const IMAGES = {
  hero: "https://images.pexels.com/photos/34079355/pexels-photo-34079355.jpeg?auto=compress&cs=tinysrgb&w=1600&q=70",
  servicesDecor:
    "https://customer-assets.emergentagent.com/job_farm-cater-plan/artifacts/9mol7bai_WhatsApp%20Image%202026-04-27%20at%2010.30.52%20PM%20%283%29.jpeg",
  servicesVenue:
    "https://customer-assets.emergentagent.com/job_farm-cater-plan/artifacts/aj4okzdy_WhatsApp%20Image%202026-04-27%20at%2010.30.52%20PM%20%285%29.jpeg",
  servicesCatering:
    "https://customer-assets.emergentagent.com/job_farm-cater-plan/artifacts/i35qw0p2_WhatsApp%20Image%202026-04-27%20at%2010.30.55%20PM%20%282%29.jpeg",
  gallery: [
    "https://customer-assets.emergentagent.com/job_farm-cater-plan/artifacts/kaj2nxz7_WhatsApp%20Image%202026-04-27%20at%2010.30.55%20PM%20%284%29.jpeg",
    "https://customer-assets.emergentagent.com/job_farm-cater-plan/artifacts/hmn65xfu_WhatsApp%20Image%202026-04-27%20at%2010.30.53%20PM%20%281%29.jpeg",
    "https://customer-assets.emergentagent.com/job_farm-cater-plan/artifacts/3my5pjcs_WhatsApp%20Image%202026-04-27%20at%2010.30.53%20PM.jpeg",
    "https://customer-assets.emergentagent.com/job_farm-cater-plan/artifacts/9bgiksov_WhatsApp%20Image%202026-04-27%20at%2010.30.54%20PM%20%282%29.jpeg",
    "https://customer-assets.emergentagent.com/job_farm-cater-plan/artifacts/1zakccwh_WhatsApp%20Image%202026-04-27%20at%2010.30.54%20PM%20%285%29.jpeg",
  ],
  corporate:
    "https://customer-assets.emergentagent.com/job_farm-cater-plan/artifacts/36c8lrqj_WhatsApp%20Image%202026-04-27%20at%2010.30.54%20PM.jpeg",
  wedding:
    "https://customer-assets.emergentagent.com/job_farm-cater-plan/artifacts/r3wgl051_WhatsApp%20Image%202026-04-27%20at%2010.30.52%20PM%20%286%29.jpeg",
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
