"use client";
import { motion } from "framer-motion";
import { Trophy, Calendar, MapPin, ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { getTodosLosTorneos } from "@/data/torneos";

const getEstadoStyle = (estado: string) => {
  switch (estado) {
    case "EN_CURSO": return "bg-green-500/20 text-green-400 border-green-400/30";
    case "FINALIZADO": return "bg-amber-400/20 text-amber-400 border-amber-400/30";
    default: return "bg-blue-500/20 text-blue-400 border-blue-400/30";
  }
};

const getEstadoText = (estado: string) => {
  switch (estado) {
    case "EN_CURSO": return "En Curso";
    case "FINALIZADO": return "Finalizado";
    default: return "Próximo";
  }
};

export default function TorneosPage() {
  const torneos = getTodosLosTorneos();

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1b2f62] via-[#152347] to-[#0d1a33]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#1b2f62]/95 backdrop-blur-lg shadow-lg shadow-black/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors">
              <div className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:-translate-x-0.5">
                <ArrowLeft className="w-5 h-5" />
              </div>
            </Link>
            <Link href="/" className="flex items-center gap-3 group">
              <img src="/img/escudo-federal-futbol-club-sin-fondo.webp" alt="Federal FC" className="h-10 md:h-12" />
              <div className="hidden sm:block">
                <h1 className="font-bold text-white text-lg">Federal FC</h1>
                <p className="text-amber-400/80 text-xs font-medium">Torneos</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="h-0.5 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
      </header>

      {/* Hero */}
      <section className="relative pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-500">Torneos</span>
          </h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">Todos los torneos de Federal Futbol Club</p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-500 mx-auto rounded-full mt-6" />
        </div>
      </section>

      {/* Tournament Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {torneos.map((torneo, i) => (
              <motion.div key={torneo.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link href={`/torneo/${torneo.id}`} className="group block bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 hover:-translate-y-2 hover:shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <Trophy className="w-8 h-8 text-amber-400" />
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${getEstadoStyle(torneo.estado)}`}>
                      {getEstadoText(torneo.estado)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">{torneo.nombre}</h3>
                  <div className="space-y-2 text-white/60 text-sm mb-4">
                    <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-amber-400/60" />{torneo.sede}</div>
                    <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-amber-400/60" />Temporada {torneo.temporada}</div>
                  </div>
                  <div className="flex items-center gap-1 text-amber-400 text-sm font-semibold group-hover:gap-2 transition-all">
                    <span>Ver torneo</span>
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
