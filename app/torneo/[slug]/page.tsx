"use client";
import { motion } from "framer-motion";
import {
  Trophy,
  Calendar,
  MapPin,
  Clock,
  ChevronRight,
  Shield,
  Swords,
  Target,
  FileText,
  ArrowLeft,
  Sparkles,
  AlertTriangle,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { getTorneoPorSlug } from "@/data/torneos";
import { IPartidoTorneo } from "@/interfaces/inteface";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const getEstadoBadge = (estado: string) => {
  switch (estado) {
    case "PROGRAMADO":
      return { text: "Programado", color: "bg-blue-500/20 text-blue-400 border-blue-400/30" };
    case "EN_CURSO":
      return { text: "En Curso", color: "bg-green-500/20 text-green-400 border-green-400/30" };
    case "COMPLETADO":
      return { text: "Finalizado", color: "bg-emerald-500/20 text-emerald-400 border-emerald-400/30" };
    case "POSTERGADO":
      return { text: "Postergado", color: "bg-orange-500/20 text-orange-400 border-orange-400/30" };
    case "SUSPENDIDO":
      return { text: "Suspendido", color: "bg-red-500/20 text-red-400 border-red-400/30" };
    case "CANCELADO":
      return { text: "Cancelado", color: "bg-red-500/20 text-red-400 border-red-400/30" };
    default:
      return { text: estado, color: "bg-gray-500/20 text-gray-400 border-gray-400/30" };
  }
};

const getResultColor = (partido: IPartidoTorneo) => {
  if (partido.estado !== "COMPLETADO" || partido.golesLocal === null || partido.golesVisitante === null) return "";
  const esFederalLocal = partido.equipoLocal.includes("Federal");
  const golesFederal = esFederalLocal ? partido.golesLocal : partido.golesVisitante;
  const golesRival = esFederalLocal ? partido.golesVisitante : partido.golesLocal;
  if (golesFederal > golesRival) return "border-green-500/50 ring-1 ring-green-500/20";
  if (golesFederal < golesRival) return "border-red-500/50 ring-1 ring-red-500/20";
  return "border-amber-400/50 ring-1 ring-amber-400/20";
};

const formatFecha = (fechaStr: string) => {
  const fecha = new Date(fechaStr + "T12:00:00");
  return fecha.toLocaleDateString("es-AR", { weekday: "long", day: "numeric", month: "long" });
};

const PartidoCard = ({ partido, isFederal }: { partido: IPartidoTorneo; isFederal: boolean }) => {
  const badge = getEstadoBadge(partido.estado);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 md:p-6 transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 group ${
        isFederal ? getResultColor(partido) : ""
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-amber-400" />
          <span className="text-white/70 text-sm">{formatFecha(partido.fechaPartido)}</span>
          <span className="text-white/50 text-sm">• {partido.hora} hs</span>
        </div>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${badge.color}`}>
          {badge.text}
        </span>
      </div>

      {/* Teams */}
      <div className="flex items-center justify-center gap-4">
        <div className="flex-1 text-right">
          <p className={`font-bold text-sm md:text-base mb-2 ${partido.equipoLocal.includes("Federal") ? "text-amber-400" : "text-white"}`}>
            {partido.equipoLocal}
          </p>
          <div className="flex items-center justify-end">
            <img src={partido.escudoLocal} alt={partido.equipoLocal} className="h-10 md:h-14 object-contain" />
          </div>
        </div>

        <div className="flex items-center gap-2 bg-[#1b2f62] px-4 py-2 rounded-xl min-w-[80px] justify-center">
          {partido.estado === "COMPLETADO" && partido.golesLocal !== null ? (
            <>
              <span className="text-2xl md:text-3xl font-black text-white">{partido.golesLocal}</span>
              <span className="text-white/50 text-lg">-</span>
              <span className="text-2xl md:text-3xl font-black text-white/70">{partido.golesVisitante}</span>
            </>
          ) : (
            <span className="text-xl md:text-2xl font-black text-white/50">VS</span>
          )}
        </div>

        <div className="flex-1 text-left">
          <p className={`font-bold text-sm md:text-base mb-2 ${partido.equipoVisitante.includes("Federal") ? "text-amber-400" : "text-white"}`}>
            {partido.equipoVisitante}
          </p>
          <div className="flex items-center">
            <img src={partido.escudoVisitante} alt={partido.equipoVisitante} className="h-10 md:h-14 object-contain" />
          </div>
        </div>
      </div>

      {/* Destacado */}
      {isFederal && partido.destacado && (
        <div className="flex items-center gap-2 text-white/60 text-sm bg-white/5 rounded-lg px-3 py-2 mt-4">
          <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
          <span>{partido.destacado}</span>
        </div>
      )}
    </motion.div>
  );
};

export default function TorneoPage() {
  const params = useParams();
  const slug = params.slug as string;
  const torneo = getTorneoPorSlug(slug);

  if (!torneo) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-[#1b2f62] via-[#152347] to-[#0d1a33] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Torneo no encontrado</h1>
          <Link href="/" className="text-amber-400 hover:text-amber-300">Volver al inicio</Link>
        </div>
      </main>
    );
  }

  const estadoTorneo = getEstadoBadge(torneo.estado);
  const partidosCompletados = torneo.partidos.filter((p) => p.estado === "COMPLETADO");
  const victorias = partidosCompletados.filter((p) => p.golesLocal !== null && p.golesVisitante !== null && p.golesLocal > p.golesVisitante).length;
  const empates = partidosCompletados.filter((p) => p.golesLocal !== null && p.golesVisitante !== null && p.golesLocal === p.golesVisitante).length;
  const derrotas = partidosCompletados.filter((p) => p.golesLocal !== null && p.golesVisitante !== null && p.golesLocal < p.golesVisitante).length;
  const golesFavor = partidosCompletados.reduce((acc, p) => acc + (p.golesLocal || 0), 0);
  const golesContra = partidosCompletados.reduce((acc, p) => acc + (p.golesVisitante || 0), 0);

  // Agrupar otros partidos por fecha
  const fechasOtros: Record<string, IPartidoTorneo[]> = {};
  (torneo.otrosPartidos || []).forEach((p) => {
    if (!fechasOtros[p.fecha]) fechasOtros[p.fecha] = [];
    fechasOtros[p.fecha].push(p);
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1b2f62] via-[#152347] to-[#0d1a33]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#1b2f62]/95 backdrop-blur-lg shadow-lg shadow-black/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors">
                <div className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:-translate-x-0.5">
                  <ArrowLeft className="w-5 h-5" />
                </div>
              </Link>
              <Link href="/" className="flex items-center gap-3 group">
                <img src="/img/escudo-federal-futbol-club-sin-fondo.webp" alt="Federal FC" className="h-10 md:h-12 transition-transform duration-300 group-hover:scale-105" />
                <div className="hidden sm:block">
                  <h1 className="font-bold text-white text-lg">Federal FC</h1>
                  <p className="text-amber-400/80 text-xs font-medium">{torneo.nombre}</p>
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <span className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${estadoTorneo.color}`}>
                {estadoTorneo.text}
              </span>
            </div>
          </div>
        </div>
        <div className="h-0.5 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
      </header>

      {/* Hero */}
      <section className="relative pt-16 pb-12 md:pt-24 md:pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2348a7]/20 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400/20 to-amber-500/20 backdrop-blur-sm border border-amber-400/30 text-amber-400 font-semibold px-6 py-2 rounded-full text-sm mb-6">
              <Trophy className="w-4 h-4" />
              <span>{torneo.temporada}</span>
            </motion.div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4">
              {torneo.nombre.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500">
                {torneo.nombre.split(" ").slice(-1)}
              </span>
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-4 text-white/60 text-sm mb-6">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400" />
                <span>{torneo.sede}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Inicio: {formatFecha(torneo.fechaInicio)}</span>
              </div>
            </div>

            {/* Lista de Buena Fe Button */}
            {torneo.listaBuenaFe && (
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 border border-white/20">
                    <FileText className="w-5 h-5 mr-2" />
                    Ver Lista de Buena Fe
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] p-0 overflow-hidden rounded-3xl border-0 bg-gradient-to-b from-[#1b2f62] to-[#152347] shadow-2xl">
                  <div className="bg-gradient-to-r from-[#1b2f62] via-[#2348a7] to-[#1b2f62] p-6 text-center border-b border-white/10">
                    <div className="inline-flex items-center gap-2 bg-amber-400/20 backdrop-blur-sm border border-amber-400/30 text-amber-400 font-semibold px-4 py-2 rounded-full text-sm mb-3">
                      <FileText className="w-4 h-4" />
                      Documento Oficial
                    </div>
                    <DialogTitle className="text-2xl md:text-3xl font-bold text-white">
                      Lista de <span className="text-amber-400">Buena Fe</span>
                    </DialogTitle>
                    <DialogDescription className="text-white/60 text-sm mt-2">
                      {torneo.nombre} - Federal Futbol Club
                    </DialogDescription>
                  </div>
                  <div className="overflow-auto max-h-[calc(90vh-120px)] w-full bg-white/5 p-4">
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
                      <img src={torneo.listaBuenaFe} alt={`Lista de Buena Fe - ${torneo.nombre}`} className="w-full h-auto" />
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </motion.div>
        </div>
      </section>

      {/* Categorías Info */}
      {torneo.categorias && torneo.categorias.length > 0 && (
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {torneo.categorias.map((cat) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`bg-white/5 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 hover:bg-white/10 ${
                    cat.id === torneo.categoriaFederal
                      ? "border-amber-400/30 ring-1 ring-amber-400/10"
                      : "border-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                      <Shield className="w-5 h-5 text-amber-400" />
                      {cat.nombre}
                    </h3>
                    <span className="text-xs text-white/50 bg-white/10 px-3 py-1 rounded-full">
                      {cat.equipos.length} equipos
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.equipos.map((equipo) => (
                      <span
                        key={equipo}
                        className={`text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${
                          equipo.includes("Federal")
                            ? "bg-amber-400/20 text-amber-400 border border-amber-400/30"
                            : "bg-white/10 text-white/70 border border-white/10"
                        }`}
                      >
                        {equipo}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Stats (only if matches played) */}
      {partidosCompletados.length > 0 && (
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { label: "Partidos", value: partidosCompletados.length, icon: Calendar },
                { label: "Victorias", value: victorias, icon: Trophy },
                { label: "Empates", value: empates, icon: Shield },
                { label: "Derrotas", value: derrotas, icon: Target },
                { label: "GF", value: golesFavor, icon: Swords },
                { label: "GC", value: golesContra, icon: Shield },
              ].map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4 text-center hover:bg-white/10 transition-all group">
                  <stat.icon className="w-5 h-5 text-amber-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                  <p className="text-white/60 text-xs">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Federal Matches */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/80 font-medium px-4 py-2 rounded-full text-sm mb-4">
              <Swords className="w-4 h-4" />
              Partidos de Federal
              {torneo.categoriaFederal && (
                <span className="bg-amber-400/20 text-amber-400 text-xs px-2 py-0.5 rounded-full ml-1">
                  Cat. {torneo.categoriaFederal}
                </span>
              )}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Fixture <span className="text-amber-400">Federal FC</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-500 mx-auto rounded-full" />
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {torneo.partidos.map((partido) => (
              <PartidoCard key={partido.id} partido={partido} isFederal={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Other Matches by Category */}
      {(torneo.otrosPartidos || []).length > 0 && (
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
              <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white/80 font-medium px-4 py-2 rounded-full text-sm mb-4">
                <Calendar className="w-4 h-4" />
                Todos los Partidos
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Fixture del <span className="text-amber-400">Torneo</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-500 mx-auto rounded-full" />
            </motion.div>

            {/* Group by category, then by fecha */}
            {(torneo.categorias || [{ id: "default", nombre: "General" }]).map((cat) => {
              const partidosCat = (torneo.otrosPartidos || []).filter(
                (p) => (p.categoria || "default") === cat.id
              );
              if (partidosCat.length === 0) return null;

              // Group by fecha within category
              const fechasCat: Record<string, IPartidoTorneo[]> = {};
              partidosCat.forEach((p) => {
                if (!fechasCat[p.fecha]) fechasCat[p.fecha] = [];
                fechasCat[p.fecha].push(p);
              });

              return (
                <div key={cat.id} className="mb-12 last:mb-0">
                  {/* Category Header */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-6 max-w-3xl mx-auto"
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      cat.id === torneo.categoriaFederal
                        ? "bg-gradient-to-br from-amber-400 to-amber-500"
                        : "bg-gradient-to-br from-[#2348a7] to-[#3a5dc9]"
                    }`}>
                      <Shield className={`w-5 h-5 ${
                        cat.id === torneo.categoriaFederal ? "text-[#1b2f62]" : "text-white"
                      }`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{cat.nombre}</h3>
                      <p className="text-white/50 text-xs">{partidosCat.length} partidos</p>
                    </div>
                    <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent ml-4"></div>
                  </motion.div>

                  {/* Matches grouped by fecha */}
                  {Object.entries(fechasCat).map(([fecha, partidos]) => (
                    <div key={fecha} className="mb-6 last:mb-0">
                      <p className="text-sm font-semibold text-amber-400/70 text-center mb-3">{fecha}</p>
                      <div className="max-w-3xl mx-auto space-y-4">
                        {partidos.map((partido) => (
                          <PartidoCard key={partido.id} partido={partido} isFederal={false} />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Back Button */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <Link href="/" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg border border-white/20 group">
            <span>Volver al Inicio</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  );
}
