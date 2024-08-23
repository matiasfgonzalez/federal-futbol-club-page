const sponsors = [
  {
    name: "CAMPO FERTIL",
    logo: "/img/sponsors/campo-fertil.jpeg?height=100&width=100",
  },
  {
    name: "VIVA LA MAÑANA",
    logo: "/img/sponsors/viva-la-mañana.jpeg?height=100&width=100",
  },
  {
    name: "LG POLLERIA",
    logo: "/img/sponsors/polleria-lg.jpeg?height=100&width=100",
  },
  {
    name: "VIVERO ORO VERDE",
    logo: "/img/sponsors/vivero-oro-verde.jpeg?height=100&width=100",
  },
  {
    name: "JM - DECO MUEBLES",
    logo: "/img/sponsors/jm-deco-muebles.jpeg?height=100&width=100",
  },
];

const SectionSponsors = () => {
  return (
    <section id="sponsors" className="bg-white text-[#1b2f62] py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Nuestros Patrocinadores
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                className="w-16 h-16 md:w-24 md:h-24 object-contain mb-2"
              />
              <p className="text-center text-sm md:text-base">{sponsor.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionSponsors;
