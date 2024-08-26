import { Button } from "@/components/ui/button";

const SectionPrincipal = () => {
  return (
    <section id="home" className="bg-[#1b2f62] py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Federal Futbol Club
          </h1>
          <p className="text-xl mb-6">Mas que un equipo</p>
          <Button className="bg-[#2348a7] hover:bg-[#ffffff] hover:text-[#1b2f62]">
            Próximamente...
          </Button>
        </div>
        <div className="md:w-1/2">
          <img
            src="/img/equipo-titular-jugador.webp?height=400&width=600"
            alt="Camp Nou"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionPrincipal;
