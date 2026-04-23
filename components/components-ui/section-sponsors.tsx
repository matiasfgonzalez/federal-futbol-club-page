"use client";
import { Heart, Handshake } from "lucide-react";
import Link from "next/link";

const sponsors = [
  {
    name: "ADN Criminalística",
    logo: "/img/sponsors/adnc.jpeg",
    url: "https://adncriminalistica.com/",
  },
  {
    name: "Campo Fértil",
    logo: "/img/sponsors/campo-fertil.jpeg",
  },
  {
    name: "Viva la Mañana",
    logo: "/img/sponsors/viva-la-maniana.webp",
  },
  {
    name: "LG Pollería",
    logo: "/img/sponsors/polleria-lg.webp",
  },
  {
    name: "Vivero Oro Verde",
    logo: "/img/sponsors/vivero-oro-verde.webp",
  },
  {
    name: "JM Deco Muebles",
    logo: "/img/sponsors/jm-deco-muebles.webp",
  },
];

const SectionSponsors = () => {
  return (
    <section id="sponsors" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white"></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2348a7] to-transparent"></div>
      <div className="absolute top-20 right-0 w-72 h-72 bg-[#2348a7]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-amber-400/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-[#1b2f62]/10 text-[#1b2f62] font-medium px-4 py-2 rounded-full text-sm mb-4">
            <Handshake className="w-4 h-4 text-amber-500" />
            Colaboradores
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1b2f62] mb-4">
            Nuestros{" "}
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Patrocinadores
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Gracias a quienes hacen posible que sigamos adelante
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2348a7] to-amber-400 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 mb-12">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 shadow-lg shadow-gray-100 border border-gray-100 flex flex-col items-center justify-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#2348a7]/10 hover:border-[#2348a7]/20"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2348a7]/5 to-amber-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Logo Container */}
              <div className="relative w-20 h-20 md:w-24 md:h-24 mb-4 flex items-center justify-center">
                <img
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  className="w-full h-full object-contain rounded-xl transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Name */}
              <p className="text-center text-sm md:text-base font-semibold text-[#1b2f62] group-hover:text-[#2348a7] transition-colors duration-300">
                {sponsor.name}
              </p>

              {/* Bottom Accent Line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#2348a7] to-amber-400 rounded-full group-hover:w-1/2 transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-[#1b2f62] to-[#2348a7] rounded-3xl p-8 md:p-10 shadow-xl shadow-[#1b2f62]/20">
          <div className="w-16 h-16 bg-amber-400/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-amber-400" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Querés ser parte del equipo?
          </h3>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            Si te interesa apoyar al Federal Futbol Club y ser uno de nuestros
            patrocinadores, ¡nos encantaría conocerte!
          </p>
          <a
            href="https://www.instagram.com/federal_futbol/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-[#1b2f62] font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/25 hover:-translate-y-0.5"
          >
            <span>Contactanos</span>
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SectionSponsors;
