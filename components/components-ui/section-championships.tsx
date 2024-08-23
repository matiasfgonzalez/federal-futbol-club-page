const SectionChampionships = () => {
  return (
    <section id="trophies" className="bg-[#1b2f62] text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Campeonatos</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">2017</h3>
            <p>Campeón Categoría B</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">2018</h3>
            <p>Semi Finales Categoría A</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">2023</h3>
            <p>Sub Campeón Categoría A</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">2024</h3>
            <p>Eliminado en Cuartos Categoría A</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionChampionships;
