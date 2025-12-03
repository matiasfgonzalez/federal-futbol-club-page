"use client";
import { motion } from "framer-motion";
import {
  Trophy,
  Star,
  Target,
  Shield,
  ChevronRight,
  Calendar,
  Swords,
  Medal,
  Crown,
  Sparkles,
  Award,
} from "lucide-react";
import Link from "next/link";
import { caminoGloriaData, estadisticasTorneo } from "@/data/camino-gloria";
import HeaderNavFechas from "@/components/components-ui/header-nav-fechas";

const CaminoGloriaPage = () => {
  // Función para obtener el color según el resultado
  const getResultColor = (resultado: string) => {
    switch (resultado) {
      case "victoria":
        return "from-green-500 to-emerald-600";
      case "empate":
        return "from-amber-400 to-amber-500";
      case "derrota":
        return "from-red-500 to-red-600";
      default:
        return "from-gray-400 to-gray-500";
    }
  };

  // Función para obtener el ícono según la instancia
  const getInstanciaIcon = (instancia: string) => {
    switch (instancia) {
      case "Final":
        return Crown;
      case "Semifinal":
        return Medal;
      default:
        return Target;
    }
  };

  // Función para obtener el texto del resultado
  const getResultText = (resultado: string) => {
    switch (resultado) {
      case "victoria":
        return "Victoria";
      case "empate":
        return "Empate";
      case "derrota":
        return "Derrota";
      default:
        return "";
    }
  };

  return (
    <>
      <HeaderNavFechas />
      <main className="min-h-screen bg-gradient-to-b from-[#1b2f62] via-[#152347] to-[#0d1a33]">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
          {/* Fondo decorativo */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2348a7]/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/5 rounded-full blur-3xl" />
          </div>

          {/* Patrón de fondo */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-[10%] text-8xl">🏆</div>
            <div className="absolute top-40 right-[15%] text-6xl">⚽</div>
            <div className="absolute bottom-20 left-[20%] text-7xl">🥇</div>
            <div className="absolute bottom-40 right-[25%] text-5xl">🏅</div>
            <div className="absolute top-1/3 left-[5%] text-4xl">⭐</div>
            <div className="absolute top-1/2 right-[8%] text-5xl">🎯</div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              {/* Badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400/20 to-amber-500/20 backdrop-blur-sm border border-amber-400/30 text-amber-400 font-semibold px-6 py-2 rounded-full text-sm mb-6"
              >
                <Trophy className="w-4 h-4" />
                <span>Clausura UNER 2025</span>
                <Trophy className="w-4 h-4" />
              </motion.div>

              {/* Título principal */}
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4"
              >
                Camino a la{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 drop-shadow-lg">
                  Gloria
                </span>
              </motion.h1>

              {/* Subtítulo */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-8"
              >
                La historia de cómo Federal Futbol Club conquistó el campeonato
                con valentía, pasión y gloria
              </motion.p>

              {/* Escudo animado */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="relative inline-block"
              >
                <div className="absolute inset-0 bg-amber-400/30 rounded-full blur-2xl animate-pulse" />
                <img
                  src="/img/escudo-federal-futbol-club-sin-fondo.webp"
                  alt="Federal FC"
                  className="h-28 md:h-36 relative z-10 drop-shadow-2xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Estadísticas del Torneo */}
        <section className="py-12 md:py-16 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
            >
              {[
                {
                  label: "Partidos",
                  value: estadisticasTorneo.partidosJugados,
                  icon: Calendar,
                },
                {
                  label: "Victorias",
                  value: estadisticasTorneo.victorias,
                  icon: Trophy,
                },
                {
                  label: "Empates",
                  value: estadisticasTorneo.empates,
                  icon: Shield,
                },
                {
                  label: "Derrotas",
                  value: estadisticasTorneo.derrotas,
                  icon: Target,
                },
                {
                  label: "Goles a Favor",
                  value: estadisticasTorneo.golesFavor,
                  icon: Swords,
                },
                {
                  label: "Porterías Invictas",
                  value: estadisticasTorneo.porteriaInvicta,
                  icon: Shield,
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-all duration-300 group"
                >
                  <stat.icon className="w-6 h-6 text-amber-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-white/60 text-xs md:text-sm">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Timeline de Partidos */}
        <section className="py-16 md:py-24 relative">
          <div className="container mx-auto px-4">
            {/* Título de sección */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/80 font-medium px-4 py-2 rounded-full text-sm mb-4">
                <Swords className="w-4 h-4" />
                Todos los Partidos
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                El Recorrido del <span className="text-amber-400">Campeón</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-500 mx-auto rounded-full" />
            </motion.div>

            {/* Timeline */}
            <div className="relative max-w-4xl mx-auto">
              {/* Línea central */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 via-[#2348a7] to-amber-400 rounded-full transform md:-translate-x-1/2" />

              {/* Partidos */}
              {caminoGloriaData.map((match, index) => {
                const InstanciaIcon = getInstanciaIcon(match.instancia);
                const isLeft = index % 2 === 0;
                const isSpecial =
                  match.instancia === "Final" ||
                  match.instancia === "Semifinal";

                return (
                  <motion.div
                    key={match.id}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`relative flex items-center mb-8 md:mb-12 ${
                      isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Punto en la línea */}
                    <div
                      className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10 ${
                        isSpecial ? "scale-125" : ""
                      }`}
                    >
                      <div
                        className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg ${
                          isSpecial
                            ? "bg-gradient-to-br from-amber-400 to-amber-600"
                            : "bg-gradient-to-br from-[#2348a7] to-[#1b2f62]"
                        } border-4 border-[#152347]`}
                      >
                        <InstanciaIcon
                          className={`w-5 h-5 md:w-6 md:h-6 ${
                            isSpecial ? "text-[#1b2f62]" : "text-white"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Card del partido */}
                    <div
                      className={`w-full md:w-[calc(50%-40px)] ml-16 md:ml-0 ${
                        isLeft ? "md:pr-8" : "md:pl-8"
                      }`}
                    >
                      <div
                        className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-5 md:p-6 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-xl group ${
                          isSpecial
                            ? "border-amber-400/50 ring-1 ring-amber-400/20"
                            : "border-white/10"
                        }`}
                      >
                        {/* Badge de instancia */}
                        {isSpecial && (
                          <div className="absolute -top-3 left-4 bg-gradient-to-r from-amber-400 to-amber-500 text-[#1b2f62] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                            {match.instancia === "Final" ? (
                              <>
                                <Crown className="w-3 h-3" /> GRAN FINAL
                              </>
                            ) : (
                              <>
                                <Medal className="w-3 h-3" /> SEMIFINAL
                              </>
                            )}
                          </div>
                        )}

                        {/* Fecha/Instancia */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-amber-400 font-semibold text-sm">
                            {match.fecha}
                          </span>
                          <span
                            className={`text-xs font-medium px-2 py-1 rounded-full bg-gradient-to-r ${getResultColor(
                              match.resultado
                            )} text-white`}
                          >
                            {getResultText(match.resultado)}
                          </span>
                        </div>

                        {/* Resultado */}
                        <div className="flex items-center justify-center gap-4 mb-4">
                          {/* Federal */}
                          <div className="flex-1 text-right">
                            <p className="text-white font-bold text-sm md:text-base mb-1">
                              Federal FC
                            </p>
                            <div className="flex items-center justify-end gap-2">
                              <img
                                src="/img/escudo-federal-futbol-club-sin-fondo.webp"
                                alt="Federal FC"
                                className="h-8 md:h-10"
                              />
                            </div>
                          </div>

                          {/* Marcador */}
                          <div className="flex items-center gap-2 bg-[#1b2f62] px-4 py-2 rounded-xl">
                            <span className="text-2xl md:text-3xl font-black text-white">
                              {match.golesLocal}
                            </span>
                            <span className="text-white/50 text-lg">-</span>
                            <span className="text-2xl md:text-3xl font-black text-white/70">
                              {match.golesVisitante}
                            </span>
                          </div>

                          {/* Rival */}
                          <div className="flex-1 text-left">
                            <p className="text-white/70 font-bold text-sm md:text-base mb-1">
                              {match.rival}
                            </p>
                            <div className="flex items-center gap-2">
                              <img
                                src={match.escudoRival}
                                alt={match.rival}
                                className="w-8 h-8 md:w-10 md:h-10 object-contain"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Destacado */}
                        {match.destacado && (
                          <div className="flex items-center gap-2 text-white/60 text-sm bg-white/5 rounded-lg px-3 py-2">
                            <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
                            <span>{match.destacado}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Sección Final: El Momento Eterno */}
        <section className="py-20 md:py-32 relative overflow-hidden">
          {/* Fondo especial */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-400/5 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-400/10 rounded-full blur-3xl" />
          </div>

          {/* Confetti decorativo */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  background: i % 2 === 0 ? "#d4af37" : "#2348a7",
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              {/* Título */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <span className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400/20 to-amber-500/20 backdrop-blur-sm border border-amber-400/30 text-amber-400 font-semibold px-6 py-2 rounded-full text-sm mb-6">
                  <Star className="w-4 h-4" />
                  El Momento Eterno
                  <Star className="w-4 h-4" />
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
                  ¡
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500">
                    CAMPEONES
                  </span>
                  !
                </h2>
                <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto">
                  Clausura UNER 2025 - Un logro que quedará grabado para siempre
                  en la historia del club
                </p>
              </motion.div>

              {/* Copa del Campeón */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                className="relative inline-block mb-16"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full blur-3xl opacity-40 animate-pulse" />

                {/* Copa */}
                <div className="relative bg-gradient-to-br from-amber-400 via-yellow-400 to-amber-500 p-8 md:p-12 rounded-full shadow-2xl">
                  <Trophy className="w-24 h-24 md:w-32 md:h-32 text-[#1b2f62] drop-shadow-lg" />
                </div>

                {/* Estrellas decorativas */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0"
                >
                  <Star className="absolute -top-4 left-1/2 w-6 h-6 text-amber-400 fill-amber-400" />
                  <Star className="absolute top-1/2 -right-4 w-5 h-5 text-amber-400 fill-amber-400" />
                  <Star className="absolute -bottom-4 left-1/2 w-6 h-6 text-amber-400 fill-amber-400" />
                  <Star className="absolute top-1/2 -left-4 w-5 h-5 text-amber-400 fill-amber-400" />
                </motion.div>
              </motion.div>

              {/* Foto del Equipo Campeón */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="max-w-4xl mx-auto mb-12"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-400/30 group">
                  {/* Overlay decorativo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1b2f62] via-transparent to-transparent z-10" />

                  {/* Imagen del equipo */}
                  <img
                    src="/img/festejo-campeon.webp"
                    alt="Federal FC - Campeón Clausura UNER 2025"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Badge de campeón */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-[#1b2f62] font-bold px-6 py-3 rounded-full flex items-center gap-2 shadow-lg">
                      <Trophy className="w-5 h-5" />
                      <span>CAMPEÓN CLAUSURA UNER 2025</span>
                      <Trophy className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Texto épico final */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="max-w-3xl mx-auto"
              >
                <blockquote className="text-xl md:text-2xl text-white/80 italic font-light leading-relaxed mb-8">
                  Con sacrificio, unión y pasión, escribimos una página dorada
                  en nuestra historia. Este campeonato es de todos los que
                  llevan el azul en el corazón.
                </blockquote>

                <div className="flex items-center justify-center gap-4">
                  <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-amber-400/50" />
                  <img
                    src="/img/escudo-federal-futbol-club-sin-fondo.webp"
                    alt="Federal FC"
                    className="h-12"
                  />
                  <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-amber-400/50" />
                </div>

                <p className="text-amber-400 font-semibold mt-4">
                  Federal Futbol Club - Más que un equipo, una familia
                </p>
              </motion.div>

              {/* Botón de volver */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="mt-12"
              >
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg border border-white/20 group"
                >
                  <span>Volver al Inicio</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default CaminoGloriaPage;
