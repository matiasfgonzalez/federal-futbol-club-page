// Datos de ejemplo para los jugadores
export const players = [
  {
    id: 1,
    name: "Kevin Boujon",
    position: "Centrocampista",
    country: "Concepción del Uruguay",
    imgFace: "/img/face/kevin-sin-fondo-face.webp",
    imgBody: "/img/body/kevin.webp",
    imgBodySinFondo: "/img/body/kevin.webp",
    numero: 10,
    stats: { goles: 5, asistencias: 8, partidos: 15 },
  },
  {
    id: 2,
    name: "Brian Sosa",
    position: "Lateral",
    country: "Villaguay",
    imgFace: "/img/face/brian-sin-fondo-face.webp",
    imgBody: "/img/body/brian.webp",
    imgBodySinFondo: "/img/body/brian-sin-fondo.png",
    numero: 3,
    stats: { goles: 1, asistencias: 4, partidos: 14 },
  },
  {
    id: 3,
    name: "Gonzalo Barsi",
    position: "Defensor Central",
    country: "Federal",
    imgFace: "/img/face/gonza-sin-fondo-face.webp",
    imgBody: "/img/body/gonza.webp",
    imgBodySinFondo: "/img/body/gonza-sin-fondo.webp",
    numero: 4,
    stats: { goles: 2, asistencias: 1, partidos: 16 },
  },{
    id: 4,
    name: "Rodrigo Navarro",
    position: "Defensor Central",
    country: "Bovril",
    imgFace: "/img/face/Rodrigo-Navarro.webp",
    imgBody: "/img/body/Rodrigo-Navarro.webp",
    imgBodySinFondo: "/img/body/Rodrigo-Navarro-SF.webp",
    numero: 4,
    stats: { goles: 2, asistencias: 1, partidos: 16 },
  },
];

// Tipo para los jugadores
export interface Player {
  id: number;
  name: string;
  position: string;
  country: string;
  imgFace: string;
  imgBody: string;
  imgBodySinFondo: string;
  numero: number;
  stats: {
    goles: number;
    asistencias: number;
    partidos: number;
  };
}
