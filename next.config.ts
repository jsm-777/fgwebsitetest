import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/index.php", destination: "/", permanent: true },
      { source: "/index.php~", destination: "/", permanent: true },
      { source: "/site.html", destination: "/", permanent: true },
      { source: "/services.html", destination: "/services", permanent: true },
      { source: "/benefits.html", destination: "/services/bookkeeping", permanent: true },
      { source: "/music.html", destination: "/who-we-serve/creative-businesses", permanent: true },
      { source: "/personal.html", destination: "/services/tax", permanent: true },
      { source: "/business.html", destination: "/services", permanent: true },
      { source: "/rates.html", destination: "/services", permanent: true },
      { source: "/resources.html", destination: "/resources", permanent: true },
      { source: "/about.html", destination: "/about", permanent: true },
      { source: "/testimonials.html", destination: "/client-stories", permanent: true },
      { source: "/contact.html", destination: "/contact", permanent: true },
    ];
  },
};

export default nextConfig;
