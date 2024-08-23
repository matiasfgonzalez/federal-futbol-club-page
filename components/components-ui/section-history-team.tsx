const SectionHistoryTeam = () => {
  return (
    <section id="history" className="bg-[#1b2f62] text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Historia del Equipo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4">
              El Federal Futbol Club, también conocido como El F, fue fundado en
              2019 por un grupo de amigos.
            </p>
            <p className="mb-4">
              A lo largo de su historia, el equipo se ha convertido en uno de
              los equipos más competitivos y reconocidos de Oro Verde.
            </p>
          </div>
          <div>
            <img
              src="/img/historia.jpeg?height=300&width=500"
              alt="Fundación del Federal Futbol Club"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionHistoryTeam;
