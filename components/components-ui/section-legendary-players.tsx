"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const players = [
  {
    name: "Diego Steimbrecher",
    image: "/img/leyendas/leyenda-02.jpeg?height=400&width=300",
  },
  {
    name: "Fernando Goette",
    image: "/img/leyendas/leyenda-01.jpeg?height=400&width=300",
  },
  {
    name: "Eduardo Teze",
    image: "/img/leyendas/leyenda-03.jpeg?height=400&width=300",
  },
  {
    name: "Los Palomos",
    image: "/img/leyendas/leyenda-04.jpeg?height=400&width=300",
  },
  {
    name: "Emanuel Molina",
    image: "/img/leyendas/leyenda-05.jpeg?height=400&width=300",
  },
  {
    name: "Manuel Krafft",
    image: "/img/leyendas/leyenda-06.jpeg?height=400&width=300",
  },
];

const SectionLegendaryPlayers = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % players.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + players.length) % players.length);
  };
  return (
    <section id="players" className="bg-white text-[#1b2f62] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Jugadores Legendarios
        </h2>
        <div className="relative">
          <div className="flex justify-center">
            <img
              src={players[currentSlide].image}
              alt={players[currentSlide].name}
              className="w-48 h-64 md:w-64 md:h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
          <h3 className="text-xl font-semibold text-center mt-4">
            {players[currentSlide].name}
          </h3>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 left-0 transform -translate-y-1/2"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 right-0 transform -translate-y-1/2"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SectionLegendaryPlayers;
