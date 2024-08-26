const SectionHistoryTeam = () => {
  return (
    <section id="history" className="bg-[#1b2f62] text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Historia del Equipo
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4 text-justify">
              El Federal Futbol Club, también conocido como
              <strong> El F</strong>, fue fundado en 2017 por un grupo de amigos
              provenientes mayoritariamente de la ciudad de Federal - Entre
              Ríos.
            </p>
            <p className="mb-4 text-justify">
              En su primer año, El F compitió en la categoría B del torneo de la
              Universidad Nacional de Entre Ríos (UNER). A pesar de ser un
              equipo recién formado destacar rápidamente. Al final de la
              temporada, lograron coronarse campeones de la categoría B, un
              logro que les aseguró el ascenso a la categoría A del torneo de
              UNER.
            </p>
            <p className="mb-4 text-justify">
              Desde entonces, El Federal Futbol Club ha mantenido su lugar en la
              categoría A, enfrentando a los equipos que han participado del
              torneo. Cada temporada ha sido un desafío, pero El F ha demostrado
              ser un equipo resiliente, manteniéndose competitivo y
              consolidándose como uno de los equipos más reconocidos y
              respetados del torneo de UNER.
            </p>
          </div>
          <div>
            <img
              src="/img/historia.webp?height=300&width=500"
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
