"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  MapPin,
  Clock,
  ChevronRight,
  Trophy,
  Zap,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";
import {
  getProximoPartido,
  getUltimoResultado,
  getTorneoActivo,
} from "@/data/torneos";

const SectionNextMatch = () => {
  const proximoData = getProximoPartido();
  const ultimoData = getUltimoResultado();
  const torneoActivo = getTorneoActivo();

  // Determinar qué mostrar: próximo partido o último resultado
  const data = proximoData || ultimoData;

  if (!data) return null;

  const { partido, torneo } = data;
  const isProximo = partido.estado === "PROGRAMADO";
  const isPostergado = partido.estado === "POSTERGADO";
  const isCompletado = partido.estado === "COMPLETADO";

  // Determinar si Federal ganó (para partidos completados)
  const federalGano =
    isCompletado &&
    partido.golesLocal !== null &&
    partido.golesVisitante !== null &&
    partido.golesLocal > partido.golesVisitante;

  // Formatear la fecha para mostrar
  const formatFecha = (fechaStr: string) => {
    const fecha = new Date(fechaStr + "T12:00:00");
    const opciones: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    return fecha.toLocaleDateString("es-AR", opciones);
  };

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
          {isProximo && (
            <>
              <span className="inline-flex items-center gap-2 bg-[#1b2f62]/10 border border-[#1b2f62]/20 text-[#1b2f62] font-semibold px-4 py-2 rounded-full text-sm mb-4">
                <Zap className="w-4 h-4 text-amber-500" />
                {torneo.nombre}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1b2f62] mb-4">
                Próximo{" "}
                <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                  Partido
                </span>
              </h2>
              <p className="text-gray-600 max-w-lg mx-auto mb-4">
                {partido.destacado || `${torneo.nombre} - ${partido.fecha}`}
              </p>
            </>
          )}

          {isPostergado && (
            <>
              <span className="inline-flex items-center gap-2 bg-orange-100 border border-orange-300 text-orange-700 font-semibold px-4 py-2 rounded-full text-sm mb-4">
                <AlertTriangle className="w-4 h-4" />
                PARTIDO POSTERGADO
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1b2f62] mb-4">
                Partido{" "}
                <span className="text-orange-500">Postergado</span>
              </h2>
              <p className="text-gray-600 max-w-lg mx-auto mb-4">
                El partido fue postergado. Se informará la nueva fecha.
              </p>
            </>
          )}

          {isCompletado && (
            <>
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400/20 to-amber-500/20 border border-amber-400/30 text-amber-600 font-semibold px-4 py-2 rounded-full text-sm mb-4">
                <Trophy className="w-4 h-4" />
                {torneo.nombre} - {partido.fecha}
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1b2f62] mb-4">
                {federalGano ? (
                  <>
                    ¡<span className="text-amber-500">Victoria</span>!
                  </>
                ) : (
                  <>
                    Último{" "}
                    <span className="text-amber-500">Resultado</span>
                  </>
                )}
              </h2>
              <p className="text-gray-600 max-w-lg mx-auto mb-4">
                {partido.destacado || `${partido.fecha} del ${torneo.nombre}`}
              </p>
            </>
          )}

          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* Match Card */}
        <Card className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl shadow-[#1b2f62]/10 overflow-hidden border-0">
          {/* Card Header */}
          <div
            className={`p-4 text-white ${
              isPostergado
                ? "bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500"
                : "bg-gradient-to-r from-[#1b2f62] via-[#2348a7] to-[#1b2f62]"
            }`}
          >
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>{formatFecha(partido.fechaPartido)}</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full"></div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>{partido.hora} hs</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-white/50 rounded-full"></div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>{partido.sede}</span>
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
                    src={partido.escudoLocal}
                    alt={partido.equipoLocal}
                    className="relative w-20 h-20 md:w-28 md:h-28 object-contain mx-auto transition-transform hover:scale-110 duration-300"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#1b2f62]">
                  {partido.equipoLocal}
                </h3>
                <p className="text-sm text-gray-500">Local</p>
              </div>

              {/* Score / VS */}
              <div className="flex flex-col items-center px-4 md:px-8">
                {isCompletado &&
                  partido.golesLocal !== null &&
                  partido.golesVisitante !== null && (
                    <>
                      {federalGano && (
                        <span className="text-xs font-bold text-green-700 bg-green-100 px-4 py-1.5 rounded-full mb-3 shadow-sm border border-green-300">
                          ✅ VICTORIA
                        </span>
                      )}
                      <div className="flex items-center gap-3 md:gap-4">
                        <span className="text-4xl md:text-6xl font-black text-[#1b2f62]">
                          {partido.golesLocal}
                        </span>
                        <span className="text-2xl md:text-3xl font-bold text-gray-300">
                          -
                        </span>
                        <span className="text-4xl md:text-6xl font-black text-gray-400">
                          {partido.golesVisitante}
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 font-semibold mt-2 uppercase tracking-wider">
                        Final
                      </span>
                    </>
                  )}

                {isProximo && (
                  <>
                    <div className="flex items-center gap-3 md:gap-4">
                      <span className="text-3xl md:text-5xl font-black bg-gradient-to-b from-[#1b2f62] to-[#2348a7] bg-clip-text text-transparent">
                        VS
                      </span>
                    </div>
                    <span className="text-xs text-amber-600 font-semibold mt-3 uppercase tracking-wider bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                      ⚽ {partido.fecha}
                    </span>
                  </>
                )}

                {isPostergado && (
                  <>
                    <span className="text-xs font-bold text-orange-700 bg-orange-100 px-4 py-1.5 rounded-full mb-3 shadow-sm border border-orange-300">
                      ⚠️ POSTERGADO
                    </span>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl md:text-4xl font-black text-gray-300">
                        VS
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Away Team */}
              <div className="flex-1 text-center">
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-gray-200 rounded-full blur-xl scale-150"></div>
                  <img
                    src={partido.escudoVisitante}
                    alt={partido.equipoVisitante}
                    className="relative w-20 h-20 md:w-28 md:h-28 object-contain mx-auto transition-transform hover:scale-110 duration-300"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-700">
                  {partido.equipoVisitante}
                </h3>
                <p className="text-sm text-gray-500">Visitante</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          {/* Link to Tournament Page */}
          {torneoActivo && (
            <Link
              href={`/torneo/${torneoActivo.id}`}
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#1b2f62] to-[#2348a7] hover:from-[#2348a7] hover:to-[#1b2f62] text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-[#1b2f62]/30 hover:-translate-y-1 border border-white/10"
            >
              <Trophy className="w-5 h-5" />
              Ver Torneo Completo
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}

          {/* Link to Camino a la Gloria */}
          <Link
            href="/camino-a-la-gloria"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-[#1b2f62] font-bold px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-amber-400/30 hover:-translate-y-1"
          >
            <Trophy className="w-5 h-5" />
            Ver Camino a la Gloria
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionNextMatch;
