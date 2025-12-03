"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Users } from "lucide-react";

const players = [
  {
    name: "Diego Steimbrecher",
    image: "/img/leyendas/leyenda-02.webp",
    position: "Leyenda",
  },
  {
    name: "Fernando Goette",
    image: "/img/leyendas/leyenda-01.webp",
    position: "Leyenda",
  },
  {
    name: "Eduardo Teze",
    image: "/img/leyendas/leyenda-03.webp",
    position: "Leyenda",
  },
  {
    name: "Los Palomos",
    image: "/img/leyendas/leyenda-04.webp",
    position: "Leyenda",
  },
  {
    name: "Emanuel Molina",
    image: "/img/leyendas/leyenda-05.webp",
    position: "Leyenda",
  },
  {
    name: "Manuel Krafft",
    image: "/img/leyendas/leyenda-06.webp",
    position: "Leyenda",
  },
];

const SectionLegendaryPlayers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % players.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + players.length) % players.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section id="players" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white"></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2348a7] to-transparent"></div>
      <div className="absolute top-20 left-0 w-72 h-72 bg-[#2348a7]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-[#1b2f62]/10 text-[#1b2f62] font-medium px-4 py-2 rounded-full text-sm mb-4">
            <Star className="w-4 h-4 text-amber-500" />
            Hall de la Fama
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1b2f62] mb-4">
            Jugadores{" "}
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Legendarios
            </span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Los héroes que escribieron la historia de El Federal Futbol Club
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2348a7] to-amber-400 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-[#1b2f62] to-[#2348a7] rounded-3xl p-8 md:p-12 shadow-2xl shadow-[#1b2f62]/20 overflow-hidden">
              {/* Background Pattern */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>

              <div className="relative flex flex-col md:flex-row items-center gap-8">
                {/* Image */}
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/30 to-amber-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-2 border border-white/10">
                    <img
                      src={players[currentSlide].image}
                      alt={players[currentSlide].name}
                      className="w-56 h-72 md:w-64 md:h-80 object-cover rounded-xl shadow-lg transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>

                  {/* Player Number Badge */}
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-[#1b2f62] font-bold text-lg">
                      #{currentSlide + 1}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-400 font-medium px-3 py-1.5 rounded-full text-sm mb-4">
                    <Star className="w-4 h-4" />
                    {players[currentSlide].position}
                  </div>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3">
                    {players[currentSlide].name}
                  </h3>
                  <p className="text-white/70 mb-6">
                    Un ícono del Federal Futbol Club que dejó su huella en la
                    historia del equipo.
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10">
                      <p className="text-amber-400 font-bold text-xl">∞</p>
                      <p className="text-white/60 text-xs">Partidos</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10">
                      <p className="text-amber-400 font-bold text-xl">⭐</p>
                      <p className="text-white/60 text-xs">Leyenda</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10">
                      <p className="text-amber-400 font-bold text-xl">💛</p>
                      <p className="text-white/60 text-xs">Pasión</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full w-10 h-10 md:w-12 md:h-12 transition-all duration-300 hover:scale-110"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-full w-10 h-10 md:w-12 md:h-12 transition-all duration-300 hover:scale-110"
                onClick={nextSlide}
              >
                <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
              </Button>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-8">
              {players.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === currentSlide
                      ? "w-8 h-3 bg-gradient-to-r from-[#2348a7] to-amber-500"
                      : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Ir al jugador ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex justify-center gap-4 mt-8 overflow-x-auto pb-4 no-scrollbar">
            {players.map((player, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  index === currentSlide
                    ? "border-amber-400 scale-105 shadow-lg shadow-amber-400/20"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-14 h-14 md:w-16 md:h-16 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionLegendaryPlayers;
