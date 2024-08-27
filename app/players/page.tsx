"use client";
import { useState } from "react";
import { players } from "@/data/players";

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
      <main className="flex-grow flex items-center justify-center bg-gradient-to-b from-primary/20 to-primary/5 p-4 bg-[#1b2f62]">
        <Carousel className="w-full max-w-md mx-auto">
          <CarouselContent>
            {players.map((player) => (
              <CarouselItem
                key={player.id}
                className="md:basis-11/12 lg:basis-10/12"
              >
                <div className="p-1">
                  <Card
                    style={{
                      backgroundImage: `url(${player.imgBody})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                    className={`cursor-pointer transition-transform duration-500 ${
                      flippedCard === player.id
                        ? "[transform:rotateY(180deg)]"
                        : ""
                    }`}
                    onClick={() => handleCardClick(player.id)}
                  >
                    <CardContent className="flex flex-col items-center justify-center p-6 h-[500px]">
                      <div className="w-full h-full flex flex-col justify-between">
                        <div
                          className={`flex-grow ${
                            flippedCard === player.id
                              ? "[transform:rotateY(180deg)]"
                              : ""
                          }`}
                        >
                          {flippedCard !== player.id && (
                            // Frente de la tarjeta
                            <>
                              <Avatar className="w-24 h-24 mx-auto mb-4 bg-white">
                                <AvatarImage
                                  src={player.imgFace + `?height=96&width=96`}
                                  alt={player.name}
                                />
                                <AvatarFallback>
                                  {player.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>
                            </>
                          )}
                        </div>
                        <div className="text-center text-[#1b2f62] p-2 bg-white opacity-75 rounded-md">
                          {flippedCard !== player.id ? (
                            <>
                              <h3 className="text-lg font-semibold text-center mb-2 text-[#1b2f62]">
                                {player.name}
                              </h3>
                              <p className="text-sm text-center text-[#1b2f62]">
                                {player.position}
                              </p>
                              <div className="flex justify-center">
                                <img
                                  src="/img/escudo-federal-futbol-club-sin-fondo.webp?height=50&width=50"
                                  alt="Federal FC"
                                  className="h-12 text-center"
                                />
                              </div>
                            </>
                          ) : (
                            <div className=" [transform:rotateY(180deg)]">
                              <h3 className="text-lg font-semibold text-center  mb-2  text-[#1b2f62]">
                                {player.name}
                              </h3>
                              <p className="text-sm text-center mb-1 text-[#1b2f62]">
                                {player.country}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious variant="ghost" />
          <CarouselNext variant="ghost" />
        </Carousel>
      </main>
    </>
  );
};

export default PlayerPage;
