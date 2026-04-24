"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  MapPin,
  Trophy,
  Target,
  Handshake,
  Calendar,
  Star,
  ChevronRight,
} from "lucide-react";
import { players, Player } from "@/data/players";
import HeaderNavFechas from "@/components/components-ui/header-nav-fechas";
import Link from "next/link";

// Componente de tarjeta 3D con efecto hover
const PlayerCard3D = ({ player, index }: { player: Player; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Si imgBody e imgBodySinFondo son iguales, usar efecto de zoom en lugar de levantamiento
  const hasSeparateImage = player.imgBody !== player.imgBodySinFondo;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // Support for touch devices
      onClick={() => setIsHovered(!isHovered)}
    >
      <div className="relative w-[280px] sm:w-[300px] h-[400px] cursor-pointer group">
        {/* Fondo con imagen */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden bg-gradient-to-br from-[#1b2f62] to-[#0f1a36] shadow-2xl shadow-[#1b2f62]/40 border border-white/5 transition-all duration-500 group-hover:border-[#d4af37]/30 group-hover:shadow-[0_0_40px_rgba(212,175,55,0.2)]">
          <motion.img
            src={player.imgBody}
            alt={player.name}
            className="absolute inset-0 w-full h-full object-cover"
            animate={{
              opacity: hasSeparateImage ? (isHovered ? 0 : 1) : 1,
              scale: !hasSeparateImage && isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.4 }}
          />
          {/* Overlay gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/40 to-transparent"
            animate={{ opacity: isHovered ? 0.7 : 0.4 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Imagen sin fondo que se eleva - solo si hay imagen separada */}
        {hasSeparateImage && (
          <motion.img
            src={player.imgBodySinFondo}
            alt={player.name}
            className="absolute bottom-0 left-1/2 w-full h-auto max-h-[110%] object-contain z-10 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] pointer-events-none"
            style={{
              maskImage: "linear-gradient(black 75%, transparent)",
              WebkitMaskImage: "linear-gradient(black 75%, transparent)",
              transformOrigin: "bottom center",
            }}
            initial={{ opacity: 0, y: 0, x: "-50%" }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? "-15%" : 0,
              x: "-50%",
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        )}

        {/* Número del jugador */}
        <motion.div
          className="absolute top-4 right-4 z-20 pointer-events-none"
          animate={{
            opacity: isHovered ? 0 : 1,
            scale: isHovered ? 0.8 : 1,
            y: isHovered ? -10 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-gradient-to-br from-[#d4af37] to-[#b8960c] text-[#1b2f62] w-14 h-14 rounded-2xl flex items-center justify-center font-black text-2xl shadow-[0_8px_16px_rgba(0,0,0,0.4)] border border-[#f4d58d]/50">
            {player.numero}
          </div>
        </motion.div>

        {/* Badge de posición */}
        <motion.div
          className="absolute top-4 left-4 z-20 pointer-events-none"
          animate={{ 
            opacity: isHovered ? 0 : 1,
            x: isHovered ? -10 : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-black/40 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
            {player.position}
          </div>
        </motion.div>

        {/* Nombre del jugador - aparece en hover */}
        <motion.div
          className="absolute bottom-4 left-0 right-0 z-20 px-4 pointer-events-none"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            y: isHovered ? 0 : 20,
          }}
          transition={{ duration: 0.3, delay: isHovered ? 0.1 : 0 }}
        >
          <div className="bg-[#0a1628]/80 backdrop-blur-md rounded-2xl p-5 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            <h3 className="text-white font-black text-2xl tracking-tight mb-1">{player.name}</h3>
            <div className="flex items-center gap-2 text-[#d4af37] text-sm font-medium mb-3">
              <MapPin className="w-4 h-4" />
              <span>{player.country}</span>
            </div>

            {/* Mini stats */}
            <div className="flex justify-between items-center bg-white/5 rounded-xl p-3 border border-white/5">
              <div className="text-center flex-1">
                <span className="text-white font-bold text-xl block leading-none mb-1">
                  {player.stats.goles}
                </span>
                <p className="text-white/40 text-[10px] uppercase tracking-wider font-bold">Goles</p>
              </div>
              <div className="w-px h-8 bg-white/10 mx-2" />
              <div className="text-center flex-1">
                <span className="text-white font-bold text-xl block leading-none mb-1">
                  {player.stats.asistencias}
                </span>
                <p className="text-white/40 text-[10px] uppercase tracking-wider font-bold">Asist.</p>
              </div>
              <div className="w-px h-8 bg-white/10 mx-2" />
              <div className="text-center flex-1">
                <span className="text-[#d4af37] font-bold text-xl block leading-none mb-1">
                  {player.stats.partidos}
                </span>
                <p className="text-[#d4af37]/60 text-[10px] uppercase tracking-wider font-bold">PJ</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Indicador de hover - solo visible sin hover */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
          animate={{ opacity: isHovered ? 0 : 1, y: isHovered ? 10 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="bg-black/40 backdrop-blur-md text-white/80 px-4 py-2 rounded-full text-xs font-medium flex items-center gap-2 border border-white/10 shadow-lg whitespace-nowrap">
            <span>Toca para ver más</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Estadísticas del plantel
const PlantelStats = () => {
  const stats = [
    {
      icon: Users,
      label: "Jugadores",
      value: players.length.toString(),
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Trophy,
      label: "Títulos 2025",
      value: "1",
      color: "from-amber-500 to-amber-600",
    },
    {
      icon: Target,
      label: "Goles Torneo",
      value: "12",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Calendar,
      label: "Partidos",
      value: "9",
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
          className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-colors"
        >
          <div
            className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}
          >
            <stat.icon className="w-6 h-6 text-white" />
          </div>
          <span className="text-3xl font-black text-white">{stat.value}</span>
          <p className="text-white/60 text-sm mt-1">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

const PlantelPage = () => {
  return (
    <>
      <HeaderNavFechas />
      <main className="min-h-screen bg-gradient-to-br from-[#0a1628] via-[#1b2f62] to-[#0a1628] relative overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Patrón de campo de fútbol sutil */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] border-2 border-white/5 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border-2 border-white/5 rounded-full" />

          {/* Blur decorativo */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#2348a7]/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1b2f62]/30 rounded-full blur-[150px]" />
        </div>

        {/* Contenido principal */}
        <div className="relative z-10 container mx-auto px-4 py-8">
          {/* Header de la sección */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#d4af37]/20 to-[#d4af37]/10 border border-[#d4af37]/30 rounded-full text-[#d4af37] text-sm font-medium mb-6"
            >
              <Star className="w-4 h-4" />
              <span>Campeones Clausura UNER 2025</span>
              <Star className="w-4 h-4" />
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
              Nuestro{" "}
              <span className="bg-gradient-to-r from-[#d4af37] via-[#f4d58d] to-[#d4af37] bg-clip-text text-transparent">
                Plantel
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Los guerreros que conquistaron el Clausura UNER 2025 y escribieron
              una nueva página de gloria
            </p>
          </motion.div>

          {/* Estadísticas del plantel */}
          <PlantelStats />

          {/* Grid de jugadores con tarjetas 3D */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 lg:gap-12 mb-16"
          >
            {players.map((player, index) => (
              <PlayerCard3D key={player.id} player={player} index={index} />
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-[#1b2f62]/80 to-[#2348a7]/80 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
              <Trophy className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">
                ¡Campeones del Clausura UNER 2025!
              </h3>
              <p className="text-white/60 mb-6">
                Revive el camino hacia la gloria de nuestro equipo campeón
              </p>
              <Link
                href="/camino-a-la-gloria"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#d4af37] to-[#b8960c] text-[#1b2f62] px-6 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-[#d4af37]/30 transition-all duration-300 hover:scale-105"
              >
                Ver Camino a la Gloria
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          {/* Escudo decorativo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.05, scale: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-10 right-10 pointer-events-none hidden lg:block"
          >
            <img
              src="/img/escudo-federal-futbol-club-sin-fondo.webp"
              alt=""
              className="w-64 h-64 object-contain"
            />
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default PlantelPage;
