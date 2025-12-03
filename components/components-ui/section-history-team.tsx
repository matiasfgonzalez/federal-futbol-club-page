"use client";
import { BookOpen, Flag, Trophy, Users } from "lucide-react";

const milestones = [
  {
    year: "2017",
    title: "Fundación",
    description: "Un grupo de amigos de Federal, Entre Ríos, funda el equipo.",
    icon: Flag,
  },
  {
    year: "2017",
    title: "Campeones Cat. B",
    description: "En su primer año, logran el campeonato y el ascenso.",
    icon: Trophy,
  },
  {
    year: "2018+",
    title: "Categoría A",
    description: "Consolidación como uno de los equipos más respetados.",
    icon: Users,
  },
  {
    year: "2025",
    title: "¡Campeones Clausura!",
    description: "Conquistan el Clausura UNER 2025. ¡Bicampeones históricos!",
    icon: Trophy,
  },
];

const SectionHistoryTeam = () => {
  return (
    <section id="history" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1b2f62] via-[#1b2f62] to-[#152347]"></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-50"></div>
      <div className="absolute top-40 left-0 w-96 h-96 bg-[#2348a7]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl"></div>

      {/* Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-medium px-4 py-2 rounded-full text-sm mb-4">
            <BookOpen className="w-4 h-4 text-amber-400" />
            Nuestra Trayectoria
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Historia del <span className="text-amber-400">Equipo</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            {/* Main Text Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8">
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                El{" "}
                <strong className="text-amber-400">Federal Futbol Club</strong>,
                también conocido como
                <strong className="text-white"> El F</strong>, fue fundado en
                2017 por un grupo de amigos provenientes mayoritariamente de la
                ciudad de Federal - Entre Ríos.
              </p>
              <p className="text-white/80 leading-relaxed mb-6">
                En su primer año, El F compitió en la categoría B del torneo de
                la Universidad Nacional de Entre Ríos (UNER). A pesar de ser un
                equipo recién formado, destacó rápidamente. Al final de la
                temporada, lograron coronarse{" "}
                <span className="text-amber-400 font-semibold">
                  campeones de la categoría B
                </span>
                , un logro que les aseguró el ascenso a la categoría A.
              </p>
              <p className="text-white/80 leading-relaxed">
                Desde entonces, El Federal Futbol Club ha mantenido su lugar en
                la categoría A, consolidándose como uno de los equipos más
                reconocidos y respetados del torneo de UNER.{" "}
                <span className="text-amber-400 font-semibold">
                  En 2025, coronaron su historia conquistando el Clausura UNER,
                  convirtiéndose en bicampeones del torneo universitario.
                </span>
              </p>
            </div>

            {/* Timeline Milestones */}
            <div className="grid gap-4">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <milestone.icon className="w-6 h-6 text-[#1b2f62]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-amber-400 font-bold">
                        {milestone.year}
                      </span>
                      <span className="text-white/40">•</span>
                      <span className="text-white font-semibold">
                        {milestone.title}
                      </span>
                    </div>
                    <p className="text-white/70 text-sm">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 via-[#2348a7]/30 to-amber-400/20 rounded-3xl blur-2xl"></div>

            {/* Main Image Container */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-2 backdrop-blur-sm border border-white/10">
                <img
                  src="/img/historia-fecha-2.webp"
                  alt="Historia del Federal Futbol Club"
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>

              {/* Stats Badge */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-[#1b2f62] to-[#2348a7] text-white px-6 py-4 rounded-2xl shadow-xl border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-amber-400">2017</p>
                    <p className="text-xs text-white/70">Fundación</p>
                  </div>
                  <div className="w-px h-10 bg-white/20"></div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-amber-400">8</p>
                    <p className="text-xs text-white/70">Años</p>
                  </div>
                  <div className="w-px h-10 bg-white/20"></div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-amber-400">2🏆</p>
                    <p className="text-xs text-white/70">Títulos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHistoryTeam;
