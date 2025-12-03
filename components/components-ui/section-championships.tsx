"use client";
import { Trophy, Medal, Award, Target } from "lucide-react";

const championships = [
  {
    year: "2017",
    title: "Campeón",
    subtitle: "Categoría B",
    description: "Primer título del club y ascenso a la máxima categoría",
    icon: Trophy,
    isChampion: true,
    color: "from-amber-400 to-amber-500",
  },
  {
    year: "2018",
    title: "Semi Finales",
    subtitle: "Categoría A",
    description: "Primera participación en la categoría máxima",
    icon: Medal,
    isChampion: false,
    color: "from-slate-400 to-slate-500",
  },
  {
    year: "2023",
    title: "Sub Campeón",
    subtitle: "Categoría A",
    description: "Final disputada con gran desempeño",
    icon: Award,
    isChampion: false,
    color: "from-gray-300 to-gray-400",
  },
  {
    year: "2024",
    title: "Cuartos de Final",
    subtitle: "Categoría A",
    description: "Temporada competitiva",
    icon: Target,
    isChampion: false,
    color: "from-[#2348a7] to-[#3a5dc9]",
  },
  {
    year: "2025",
    title: "¡CAMPEÓN!",
    subtitle: "Clausura UNER",
    description: "Bicampeones históricos del torneo universitario",
    icon: Trophy,
    isChampion: true,
    color: "from-amber-400 to-amber-500",
  },
];

const SectionChampionships = () => {
  return (
    <section id="trophies" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1b2f62] via-[#1b2f62] to-[#152347]"></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-50"></div>
      <div className="absolute top-40 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-0 w-96 h-96 bg-[#2348a7]/20 rounded-full blur-3xl"></div>

      {/* Background Trophy Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-8xl">🏆</div>
        <div className="absolute top-20 right-20 text-6xl">⚽</div>
        <div className="absolute bottom-20 left-1/4 text-7xl">🥇</div>
        <div className="absolute bottom-40 right-1/4 text-5xl">🏅</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-amber-400/20 backdrop-blur-sm text-amber-400 font-medium px-4 py-2 rounded-full text-sm mb-4">
            <Trophy className="w-4 h-4" />
            Nuestros Logros
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Palmarés del <span className="text-amber-400">Club</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Un recorrido por los logros más importantes en la historia del
            Federal Futbol Club
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Championships Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {championships.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center transition-all duration-500 hover:bg-white/10 hover:-translate-y-2 hover:shadow-2xl ${
                item.isChampion ? "ring-2 ring-amber-400/50" : ""
              }`}
            >
              {/* Champion Badge */}
              {item.isChampion && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-500 text-[#1b2f62] text-xs font-bold px-3 py-1 rounded-full">
                  ⭐ CAMPEÓN
                </div>
              )}

              {/* Icon */}
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon
                  className={`w-8 h-8 ${
                    item.isChampion ? "text-[#1b2f62]" : "text-white"
                  }`}
                />
              </div>

              {/* Year */}
              <div className="text-4xl font-black text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                {item.year}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-1">
                {item.title}
              </h3>
              <p className="text-amber-400 font-medium text-sm mb-3">
                {item.subtitle}
              </p>

              {/* Description */}
              <p className="text-white/60 text-sm">{item.description}</p>

              {/* Bottom Gradient Line */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-16 bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-black text-amber-400 mb-2">
                2
              </p>
              <p className="text-white/70 text-sm">Campeonatos</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-white mb-2">
                1
              </p>
              <p className="text-white/70 text-sm">Subcampeonato</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-white mb-2">
                8
              </p>
              <p className="text-white/70 text-sm">Años de Historia</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black text-white mb-2">
                ∞
              </p>
              <p className="text-white/70 text-sm">Pasión</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionChampionships;
