'use client';
import { Sparkles, ExternalLink, Star } from 'lucide-react';

const newSponsors = [
  {
    name: 'ADN Criminalística',
    logo: '/img/sponsors/adnc.jpeg',
    description:
      'Laboratorio de criminalística y ciencias forenses de excelencia.',
    url: 'https://adncriminalistica.com/',
    category: 'Ciencia & Tecnología',
  },
  {
    name: 'Botines Goleadores',
    logo: '/img/sponsors/botines-goleadores.jpeg',
    description:
      'Marca líder en calzado deportivo, especializada en botines de fútbol.',
    url: 'https://www.instagram.com/botines.goleadores',
    category: 'Equipamiento Deportivo',
  },
  {
    name: 'El refugio de rodica',
    logo: '/img/sponsors/el-refugio-de-rodica.jpeg',
    description:
      'Delicias caseras para llevar, con el sabor de la comida de mamá. Viandas, guisos y postres que reconfortan el alma.',
    url: 'https://www.instagram.com/elrefugioderodica.buffet',
    category: 'Buffet y Viandas',
  },
];

const SectionNewSponsors = () => {
  return (
    <section
      id="new-sponsors"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f1d3d] via-[#1b2f62] to-[#152347]"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-amber-400/10 rounded-full blur-[120px] animate-pulse-soft"></div>
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-[#2348a7]/20 rounded-full blur-[120px] animate-pulse-soft [animation-delay:1s]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/5 rounded-full blur-[100px]"></div>
      </div>

      {/* Decorative Top Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent"></div>

      {/* Floating Stars Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-16 left-[15%] text-amber-400 animate-float">
          <Star className="w-6 h-6 fill-current" />
        </div>
        <div className="absolute top-32 right-[20%] text-amber-400 animate-float [animation-delay:0.5s]">
          <Star className="w-4 h-4 fill-current" />
        </div>
        <div className="absolute bottom-24 left-[30%] text-amber-400 animate-float [animation-delay:1.5s]">
          <Star className="w-5 h-5 fill-current" />
        </div>
        <div className="absolute bottom-40 right-[35%] text-amber-400 animate-float [animation-delay:2s]">
          <Star className="w-3 h-3 fill-current" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400/20 to-amber-500/20 backdrop-blur-sm text-amber-400 font-semibold px-5 py-2.5 rounded-full text-sm mb-6 border border-amber-400/20">
            <Sparkles className="w-4 h-4" />
            Nuevos Aliados
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Bienvenidos a la{' '}
            <span className="bg-gradient-to-r from-amber-400 to-amber-500 bg-clip-text text-transparent">
              Familia Federal
            </span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Nuevos patrocinadores que se suman a acompañarnos en este camino
            lleno de pasión y gloria
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-500 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Sponsors Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {newSponsors.map((sponsor, index) => (
            <div key={index} className="group relative">
              {/* Card Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-400/30 via-[#2348a7]/30 to-amber-400/30 rounded-3xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500"></div>

              {/* Card */}
              <div className="relative bg-white/[0.07] backdrop-blur-md border border-white/10 rounded-3xl p-8 h-full flex flex-col items-center text-center transition-all duration-500 hover:bg-white/[0.12] hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-400/10">
                {/* NEW Badge */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full blur-md opacity-50"></div>
                    <span className="relative inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-400 to-amber-500 text-[#1b2f62] text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                      <Sparkles className="w-3 h-3" />
                      NUEVO
                    </span>
                  </div>
                </div>

                {/* Category Tag */}
                <div className="mt-4 mb-6">
                  <span className="text-[11px] font-semibold tracking-widest uppercase text-amber-400/70 bg-amber-400/10 px-3 py-1 rounded-full">
                    {sponsor.category}
                  </span>
                </div>

                {/* Logo Container */}
                <div className="relative w-28 h-28 md:w-32 md:h-32 mb-6 flex items-center justify-center">
                  {/* Logo Background Ring */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 group-hover:border-amber-400/30 transition-colors duration-500"></div>
                  <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-amber-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                  <img
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    className="relative w-20 h-20 md:w-24 md:h-24 object-contain rounded-xl transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Name */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
                  {sponsor.name}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                  {sponsor.description}
                </p>

                {/* CTA Link */}
                {sponsor.url ? (
                  <a
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-semibold text-sm transition-all duration-300 group/link"
                  >
                    <span>Visitar sitio</span>
                    <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 text-white/40 text-sm">
                    <Star className="w-4 h-4" />
                    Sponsor Oficial
                  </span>
                )}

                {/* Bottom Gradient Line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full group-hover:w-2/3 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom decorative text */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
            <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse-soft"></div>
            <p className="text-white/50 text-sm font-medium">
              ¿Querés sumarte como sponsor?{' '}
              <a
                href="https://www.instagram.com/federal_futbol/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 transition-colors duration-300 underline underline-offset-2"
              >
                Contactanos
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionNewSponsors;
