const fs = require('fs');
const path = require('path');

const DOMAIN = 'https://theluxevents.com'; // Replace with actual domain

const SEO_SERVICES = [
  { slug: "wedding-catering", name: "Wedding Catering" },
  { slug: "corporate-events", name: "Corporate Events" },
  { slug: "wedding-planning", name: "Wedding Planning" },
  { slug: "farmhouse-venues", name: "Farmhouse & Venues" },
  { slug: "decor-and-planning", name: "Decor & Planning" },
];

const SEO_CITIES = [
  "Noida",
  "Greater Noida",
  "Ghaziabad",
  "Delhi",
  "Gurgaon",
  "Faridabad"
];

const staticRoutes = [
  '/',
  '/form',
  '/locations'
];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

// Add static routes
staticRoutes.forEach(route => {
  sitemap += `  <url>
    <loc>${DOMAIN}${route}</loc>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>
`;
});

// Add dynamic service/city routes
SEO_CITIES.forEach(city => {
  const citySlug = city.toLowerCase().replace(/ /g, '-');
  SEO_SERVICES.forEach(service => {
    sitemap += `  <url>
    <loc>${DOMAIN}/${service.slug}-in-${citySlug}</loc>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;
  });
});

sitemap += `</urlset>`;

const outputPath = path.join(__dirname, 'public', 'sitemap.xml');
fs.writeFileSync(outputPath, sitemap);

console.log(`Successfully generated sitemap with ${staticRoutes.length + (SEO_CITIES.length * SEO_SERVICES.length)} URLs at ${outputPath}`);
