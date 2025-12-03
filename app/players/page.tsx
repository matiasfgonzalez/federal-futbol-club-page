"use client";
import { useState } from "react";
import { players } from "@/data/players";
import { motion } from "framer-motion";
import { Users, MapPin, Award, ChevronLeft, ChevronRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import HeaderNavFechas from "@/components/components-ui/header-nav-fechas";

const PlayerPage = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const handleCardClick = (playerId: number) => {
    setFlippedCard(flippedCard === playerId ? null : playerId);
  };

  return (
    <>
      <HeaderNavFechas />
      <main className="min-h-screen bg-gradient-to-br from-[#1b2f62] via-[#2348a7] to-[#1b2f62] relative overflow-hidden">
        {/* Fondo decorativo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d4af37] rounded-full blur-3xl" />
        </div>

        {/* Header de la sección */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="pt-8 pb-4 text-center relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm mb-4">
            <Users className="w-4 h-4" />
            <span>Plantel Profesional</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
            Nuestros <span className="text-[#d4af37]">Jugadores</span>
          </h1>
          <p className="text-white/70 text-sm md:text-base max-w-md mx-auto px-4">
            Conoce a los guerreros que defienden nuestra camiseta
          </p>
        </motion.div>

        {/* Carrusel de jugadores */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center px-4 pb-8 relative z-10"
        >
          <Carousel className="w-full max-w-lg mx-auto">
            <CarouselContent>
              {players.map((player, index) => (
                <CarouselItem key={player.id} className="md:basis-full">
                  <motion.div
                    className="p-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card
                      className={`cursor-pointer transition-all duration-700 transform-gpu perspective-1000 border-0 shadow-2xl overflow-hidden group ${
                        flippedCard === player.id
                          ? "[transform:rotateY(180deg)]"
                          : "hover:scale-[1.02]"
                      }`}
                      style={{ transformStyle: "preserve-3d" }}
                      onClick={() => handleCardClick(player.id)}
                    >
                      {/* Frente de la tarjeta */}
                      <CardContent
                        className={`relative p-0 h-[520px] backface-hidden ${
                          flippedCard === player.id ? "invisible" : ""
                        }`}
                      >
                        {/* Imagen de fondo */}
                        <div
                          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                          style={{ backgroundImage: `url(${player.imgBody})` }}
                        />

                        {/* Overlay gradiente */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#1b2f62] via-[#1b2f62]/40 to-transparent" />

                        {/* Contenido frontal */}
                        <div className="relative h-full flex flex-col justify-between p-6">
                          {/* Avatar y número */}
                          <div className="flex justify-between items-start">
                            <Avatar className="w-20 h-20 border-4 border-white/30 shadow-xl bg-white/90">
                              <AvatarImage
                                src={player.imgFace}
                                alt={player.name}
                                className="object-cover"
                              />
                              <AvatarFallback className="bg-[#1b2f62] text-white text-xl font-bold">
                                {player.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="bg-[#d4af37] text-[#1b2f62] px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                              #{player.id}
                            </div>
                          </div>

                          {/* Info del jugador */}
                          <div className="space-y-4">
                            {/* Nombre y posición */}
                            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl">
                              <h3 className="text-xl md:text-2xl font-bold text-[#1b2f62] mb-1">
                                {player.name}
                              </h3>
                              <div className="flex items-center gap-2 text-[#2348a7]">
                                <Award className="w-4 h-4" />
                                <span className="font-medium">
                                  {player.position}
                                </span>
                              </div>
                            </div>

                            {/* Escudo del club */}
                            <div className="flex justify-center">
                              <img
                                src="/img/escudo-federal-futbol-club-sin-fondo.webp"
                                alt="Federal FC"
                                className="h-14 drop-shadow-lg"
                              />
                            </div>

                            {/* Indicador de interacción */}
                            <p className="text-white/60 text-xs text-center">
                              Toca para ver más información
                            </p>
                          </div>
                        </div>
                      </CardContent>

                      {/* Reverso de la tarjeta */}
                      <CardContent
                        className={`absolute inset-0 p-0 h-[520px] backface-hidden [transform:rotateY(180deg)] ${
                          flippedCard !== player.id ? "invisible" : ""
                        }`}
                      >
                        <div className="h-full bg-gradient-to-br from-[#1b2f62] via-[#2348a7] to-[#1b2f62] p-6 flex flex-col justify-center items-center">
                          {/* Decoración de fondo */}
                          <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-10 right-10 w-32 h-32 border-4 border-white rounded-full" />
                            <div className="absolute bottom-10 left-10 w-24 h-24 border-4 border-[#d4af37] rounded-full" />
                          </div>

                          {/* Avatar grande */}
                          <Avatar className="w-32 h-32 border-4 border-[#d4af37] shadow-2xl mb-6">
                            <AvatarImage
                              src={player.imgFace}
                              alt={player.name}
                              className="object-cover"
                            />
                            <AvatarFallback className="bg-white text-[#1b2f62] text-3xl font-bold">
                              {player.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>

                          {/* Info detallada */}
                          <div className="text-center space-y-4 relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold text-white">
                              {player.name}
                            </h3>

                            <div className="flex items-center justify-center gap-2 text-[#d4af37]">
                              <Award className="w-5 h-5" />
                              <span className="font-semibold text-lg">
                                {player.position}
                              </span>
                            </div>

                            <div className="flex items-center justify-center gap-2 text-white/80">
                              <MapPin className="w-5 h-5" />
                              <span>{player.country}</span>
                            </div>

                            {/* Escudo */}
                            <div className="pt-4">
                              <img
                                src="/img/escudo-federal-futbol-club-sin-fondo.webp"
                                alt="Federal FC"
                                className="h-16 mx-auto drop-shadow-lg"
                              />
                            </div>

                            {/* Indicador */}
                            <p className="text-white/50 text-xs pt-4">
                              Toca para volver
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Botones de navegación personalizados */}
            <CarouselPrevious className="left-0 md:-left-12 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-[#1b2f62] transition-all duration-300" />
            <CarouselNext className="right-0 md:-right-12 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-[#1b2f62] transition-all duration-300" />
          </Carousel>
        </motion.div>

        {/* Indicador de navegación */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center pb-8 relative z-10"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white/70 text-sm">
            <ChevronLeft className="w-4 h-4" />
            <span>Desliza para ver más jugadores</span>
            <ChevronRight className="w-4 h-4" />
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default PlayerPage;
