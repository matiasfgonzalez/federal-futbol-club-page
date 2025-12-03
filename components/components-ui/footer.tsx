"use client";
import Link from "next/link";
import Instagram from "@/public/svg/instagram";
import Facebook from "@/public/svg/facebook";

const quickLinks = [
  { href: "#home", label: "Inicio" },
  { href: "#next-match", label: "Partidos" },
  { href: "#history", label: "Historia" },
  { href: "#trophies", label: "Campeonatos" },
];

const FooterComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-[#152347] to-[#0f1a30] text-white overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/img/escudo-federal-futbol-club-sin-fondo.webp"
                alt="Federal FC"
                className="h-14 md:h-16"
              />
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-white">
                  Federal Futbol Club
                </h3>
                <p className="text-amber-400 text-sm font-medium">
                  Más que un equipo
                </p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed max-w-md mb-6">
              Fundado en 2017 por un grupo de amigos de Federal, Entre Ríos.
              Campeones de la Categoría B en nuestro primer año y desde entonces
              compitiendo en la máxima categoría del torneo UNER.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/federal_futbol/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              >
                <Instagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                <Facebook />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-amber-400 transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-amber-400 group-hover:w-3 transition-all duration-300 rounded-full"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
              Información
            </h4>
            <ul className="space-y-3 text-white/70">
              <li className="flex items-start gap-2">
                <span className="text-amber-400">📍</span>
                <span>Federal, Entre Ríos, Argentina</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">🏟️</span>
                <span>Torneo UNER - Categoría A</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400">📅</span>
                <span>Fundado en 2017</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-white/50 text-sm">
              © {currentYear} Federal Futbol Club. Todos los derechos
              reservados.
            </p>
            <p className="text-white/40 text-xs">Hecho con 💛 para El F</p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#2348a7]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-48 h-48 bg-amber-400/5 rounded-full blur-3xl"></div>
    </footer>
  );
};

export default FooterComponent;
