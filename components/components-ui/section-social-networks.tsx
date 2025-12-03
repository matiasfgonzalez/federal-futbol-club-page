"use client";
import Instagram from "@/public/svg/instagram";
import { Share2 } from "lucide-react";

const SectionSocialNetworks = () => {
  return (
    <section
      id="social-media"
      className="relative py-16 md:py-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#152347] via-[#1b2f62] to-[#1b2f62]"></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-30"></div>
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Header */}
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white font-medium px-4 py-2 rounded-full text-sm mb-6">
            <Share2 className="w-4 h-4 text-amber-400" />
            Conectate con nosotros
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Seguinos en <span className="text-amber-400">Redes Sociales</span>
          </h2>

          <p className="text-white/70 mb-10 max-w-lg mx-auto">
            Mantenete al día con las últimas novedades, partidos y momentos del
            Federal Futbol Club
          </p>

          {/* Social Icons */}
          <div className="flex justify-center">
            <a
              href="https://www.instagram.com/federal_futbol/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 scale-110"></div>

              {/* Button */}
              <div className="relative flex items-center gap-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-1">
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <Instagram />
                </div>
                <div className="text-left">
                  <p className="text-xs text-white/80">Seguinos en</p>
                  <p className="text-lg font-bold">Instagram</p>
                </div>
                <svg
                  className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </a>
          </div>

          {/* Instagram Handle */}
          <p className="mt-6 text-white/50 text-sm">@federal_futbol</p>
        </div>
      </div>
    </section>
  );
};

export default SectionSocialNetworks;
