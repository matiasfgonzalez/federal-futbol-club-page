"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Trophy, Users, Calendar } from "lucide-react";
import Link from "next/link";

const stats = [
  { icon: Users, label: "Amigos", value: "Fundado por" },
  { icon: Trophy, label: "Cat. B", value: "Campeón 2017" },
  { icon: Trophy, label: "Cat. A", value: "Campeón 2025" },
  { icon: Calendar, label: "Desde", value: "2017" },
];

const SectionPrincipal = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1b2f62] via-[#1b2f62] to-[#2348a7]"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#2348a7]/30 to-transparent"></div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2348a7]/20 rounded-full blur-3xl"></div>

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400/20 to-amber-500/20 backdrop-blur-sm border border-amber-400/30 rounded-full px-4 py-2 mb-6 animate-fade-in-down">
              <span className="text-amber-400">🏆</span>
              <span className="text-sm font-semibold text-amber-400">
                Campeones Clausura UNER 2025
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
              <span className="text-white">Federal</span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 bg-clip-text text-transparent">
                Futbol Club
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-xl md:text-2xl text-white/80 mb-8 max-w-lg mx-auto lg:mx-0 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Más que un equipo, somos una{" "}
              <span className="text-amber-400 font-semibold">familia</span>.
              Tradición, pasión y gloria desde 2017.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <Link
                href="/camino-a-la-gloria"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-[#1b2f62] font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-amber-400/25 hover:-translate-y-1"
              >
                <Trophy className="w-5 h-5" />
                <span>Camino a la Gloria</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#history"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg"
              >
                Conocer Historia
              </a>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-4 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-all duration-300"
                >
                  <stat.icon className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                  <p className="text-lg font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 animate-fade-in-left">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 via-[#2348a7]/30 to-amber-400/20 rounded-3xl blur-2xl"></div>

              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-2 backdrop-blur-sm border border-white/10">
                <img
                  src="/img/equipo-titular-jugador.webp"
                  alt="Equipo Federal Futbol Club"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-amber-400 to-amber-500 text-[#1b2f62] font-bold px-6 py-3 rounded-2xl shadow-lg animate-float">
                  <span className="text-lg">⚽ El F</span>
                </div>
              </div>

              {/* Decorative Shield */}
              <div
                className="absolute -top-6 -left-6 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 flex items-center justify-center animate-float"
                style={{ animationDelay: "0.5s" }}
              >
                <img
                  src="/img/escudo-federal-futbol-club-sin-fondo.webp"
                  alt="Escudo Federal FC"
                  className="w-14 h-14 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#next-match"
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
        >
          <span className="text-xs font-medium">Scroll</span>
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default SectionPrincipal;
