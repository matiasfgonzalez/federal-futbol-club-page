"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  MapPin,
  Clock,
  ChevronRight,
  FileText,
  Trophy,
} from "lucide-react";
import Link from "next/link";

const nextMatch = {
  opponent: "Montecarlo",
  date: "28 de Septiembre, 2024",
  time: "14:00 hs",
  venue: "Cancha de UNER - Oro Verde",
  opponentLogo: "/img/escudos/montecarlo.webp",
  result: "1 - 0",
  isFinished: true,
};

const SectionNextMatch = () => {
  return (
    <section
      id="next-match"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white"></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#2348a7] to-transparent"></div>
      <div className="absolute top-20 right-0 w-64 h-64 bg-[#2348a7]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-amber-400/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-[#1b2f62]/10 text-[#1b2f62] font-medium px-4 py-2 rounded-full text-sm mb-4">
            <Trophy className="w-4 h-4" />
            Último Partido
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1b2f62] mb-4">
            Resultado del Partido
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#2348a7] to-amber-400 mx-auto rounded-full"></div>
        </div>

        {/* Match Card */}
        <Card className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl shadow-[#1b2f62]/10 overflow-hidden border-0">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-[#1b2f62] via-[#2348a7] to-[#1b2f62] p-4 text-white">
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>{nextMatch.date}</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>{nextMatch.time}</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full"></div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>{nextMatch.venue}</span>
              </div>
            </div>
          </div>

          <CardContent className="p-6 md:p-10">
            {/* Teams & Score */}
            <div className="flex items-center justify-between gap-4">
              {/* Home Team */}
              <div className="flex-1 text-center">
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-[#2348a7]/10 rounded-full blur-xl scale-150"></div>
                  <img
                    src="/img/escudo-federal-futbol-club-sin-fondo.webp"
                    alt="Federal Futbol Club"
                    className="relative w-20 h-20 md:w-28 md:h-28 object-contain mx-auto transition-transform hover:scale-110 duration-300"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#1b2f62]">
                  Federal FC
                </h3>
                <p className="text-sm text-gray-500">Local</p>
              </div>

              {/* Score */}
              <div className="flex flex-col items-center px-4 md:px-8">
                {nextMatch.isFinished && (
                  <span className="text-xs font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full mb-3">
                    FINALIZADO
                  </span>
                )}
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="text-4xl md:text-6xl font-black text-[#1b2f62]">
                    1
                  </span>
                  <span className="text-2xl md:text-3xl font-bold text-gray-300">
                    -
                  </span>
                  <span className="text-4xl md:text-6xl font-black text-gray-400">
                    0
                  </span>
                </div>
                <span className="text-xs text-gray-400 mt-2 uppercase tracking-wider">
                  Resultado Final
                </span>
              </div>

              {/* Away Team */}
              <div className="flex-1 text-center">
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-gray-200 rounded-full blur-xl scale-150"></div>
                  <img
                    src={nextMatch.opponentLogo}
                    alt={nextMatch.opponent}
                    className="relative w-20 h-20 md:w-28 md:h-28 object-contain mx-auto transition-transform hover:scale-110 duration-300"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-700">
                  {nextMatch.opponent}
                </h3>
                <p className="text-sm text-gray-500">Visitante</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="group bg-[#1b2f62] hover:bg-[#2348a7] text-white font-semibold px-6 py-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#1b2f62]/25 hover:-translate-y-0.5">
                <FileText className="w-5 h-5 mr-2" />
                Ver Listado de Buena Fe
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[95vw] w-full max-h-[90vh] p-0 overflow-hidden rounded-2xl">
              <div className="overflow-auto max-h-[90vh] w-full">
                <img
                  src="/img/lista-buena-fe.webp"
                  alt="Listado de Buena Fe"
                  className="w-full h-auto"
                />
              </div>
            </DialogContent>
          </Dialog>

          <Link href="/fecha-4">
            <Button className="group bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-[#1b2f62] font-bold px-6 py-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-400/25 hover:-translate-y-0.5">
              <Trophy className="w-5 h-5 mr-2" />
              Ver Fecha 4 del Torneo
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionNextMatch;
