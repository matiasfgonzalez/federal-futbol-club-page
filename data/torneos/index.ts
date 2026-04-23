import { ITorneo, IPartidoTorneo } from "@/interfaces/inteface";
import aperturaUner2026 from "./apertura-uner-2026.json";

/**
 * Registro de todos los torneos disponibles.
 * Para agregar un nuevo torneo, importar el JSON y agregarlo acá.
 */
export const torneos: Record<string, ITorneo> = {
  "apertura-uner-2026": aperturaUner2026 as ITorneo,
};

/**
 * Devuelve el torneo activo (EN_CURSO). Si hay varios, devuelve el más reciente.
 */
export function getTorneoActivo(): ITorneo | null {
  const activos = Object.values(torneos).filter((t) => t.estado === "EN_CURSO");
  if (activos.length === 0) return null;
  return activos.sort(
    (a, b) =>
      new Date(b.fechaInicio).getTime() - new Date(a.fechaInicio).getTime()
  )[0];
}

/**
 * Devuelve el próximo partido programado de Federal en el torneo activo.
 */
export function getProximoPartido(): {
  partido: IPartidoTorneo;
  torneo: ITorneo;
} | null {
  const torneo = getTorneoActivo();
  if (!torneo) return null;

  const partido = torneo.partidos.find((p) => p.estado === "PROGRAMADO");
  if (!partido) return null;

  return { partido, torneo };
}

/**
 * Devuelve el último partido completado de Federal en el torneo activo.
 */
export function getUltimoResultado(): {
  partido: IPartidoTorneo;
  torneo: ITorneo;
} | null {
  const torneo = getTorneoActivo();
  if (!torneo) return null;

  const completados = torneo.partidos.filter(
    (p) => p.estado === "COMPLETADO"
  );
  if (completados.length === 0) return null;

  return {
    partido: completados[completados.length - 1],
    torneo,
  };
}

/**
 * Devuelve todos los torneos ordenados por fecha (más reciente primero).
 */
export function getTodosLosTorneos(): ITorneo[] {
  return Object.values(torneos).sort(
    (a, b) =>
      new Date(b.fechaInicio).getTime() - new Date(a.fechaInicio).getTime()
  );
}

/**
 * Obtiene un torneo por su slug/id.
 */
export function getTorneoPorSlug(slug: string): ITorneo | null {
  return torneos[slug] || null;
}
