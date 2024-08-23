import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

import { Calendar, MapPin } from "lucide-react";

const nextMatch = {
  opponent: "Evasores",
  date: "24 de Agosto, 2024",
  time: "14:30 PM",
  venue: "Cancha de UNER - Oro Verde",
  opponentLogo: "/img/team-rand-sin-fondo.png?height=120&width=120",
};

const SectionNextMatch = () => {
  return (
    <section id="next-match" className="bg-white text-[#1b2f62] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Próximo Partido</h2>
        <Card className="bg-[#2348a7] text-white mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="flex items-center mb-4 md:mb-0">
                <img
                  src="/img/escudo-federal-futbol-club-sin-fondo.png?height=120&width=120"
                  alt="Federal Futbol Club"
                  className="w-16 h-16 md:w-24 md:h-24 object-contain"
                />
                <span className="text-2xl md:text-3xl font-bold mx-2 md:mx-4">
                  VS
                </span>
                <img
                  src={nextMatch.opponentLogo}
                  alt={nextMatch.opponent}
                  className="w-16 h-16 md:w-24 md:h-24 object-contain"
                />
              </div>
              <div className="text-center md:text-right">
                <h3 className="text-lg md:text-xl font-semibold mb-2">{`Federal Futbol Club vs ${nextMatch.opponent}`}</h3>
                <p className="flex items-center justify-center md:justify-end mb-1 text-sm md:text-base">
                  <Calendar className="mr-2" /> {nextMatch.date} -{" "}
                  {nextMatch.time}
                </p>
                <p className="flex items-center justify-center md:justify-end text-sm md:text-base">
                  <MapPin className="mr-2" /> {nextMatch.venue}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="text-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="bg-[#2348a7] text-white hover:bg-[#1b2f62]"
              >
                Ver Listado de Buena Fe
              </Button>
            </DialogTrigger>
            {/*<DialogContent className="max-w-[95vw] w-full max-h-[90vh] p-0 overflow-hidden">
          <div className="overflow-auto h-full w-full">
            <img
              src="/img/lista-buena-fe.jpeg"
              alt="Listado de Buena Fe"
              className="w-full h-auto"
            />
          </div>
        </DialogContent>*/}
            <DialogContent className="max-w-[95vw] w-full max-h-[90vh] p-0 overflow-hidden">
              <div className="overflow-auto max-h-[90vh] w-full">
                <img
                  src="/img/lista-buena-fe.jpeg"
                  alt="Listado de Buena Fe"
                  className="w-full h-auto"
                />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default SectionNextMatch;
