import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CarouselImagen = () => {
  const images = [
    {
      src: "/img/equipo-titular-jugador.webp?height=400&width=600",
      alt: "Imagen 1",
      width: 800,
      height: 600,
    },
    {
      src: "/img/equipo-titular-jugador.webp?height=400&width=600",
      alt: "Imagen 2",
      width: 600,
      height: 800,
    },
    {
      src: "/img/equipo-titular-jugador.webp?height=400&width=600",
      alt: "Imagen 3",
      width: 900,
      height: 500,
    },
  ];
  return (
    <div className="container mx-auto px-4 py-8">
      <Carousel className="w-full max-w-3xl mx-auto">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Card className="border-none">
                <CardContent className="flex aspect-[16/9] items-center justify-center p-0">
                  <div className="relative w-full h-full">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-lg"
                    />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselImagen;
