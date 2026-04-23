"use client";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navItems = [
  { href: "#home", label: "Inicio" },
  { href: "#next-match", label: "Próximo Partido" },
  { href: "#history", label: "Historia" },
  { href: "#players", label: "Jugadores" },
  { href: "#trophies", label: "Campeonatos" },
  {
    href: "/torneo/apertura-uner-2026",
    label: "⚽ Torneo",
    isSpecial: false,
  },
  {
    href: "/plantel",
    label: "📋 Plantel",
    isSpecial: false,
  },
  {
    href: "/camino-a-la-gloria",
    label: "🏆 Camino a la Gloria",
    isSpecial: true,
  },
];

const NavLinks = ({ onClick }: { onClick?: () => void }) => (
  <>
    {navItems.map((item) => (
      <li key={item.href}>
        {item.href.startsWith("/") ? (
          <Link
            href={item.href}
            onClick={onClick}
            className={`relative font-medium transition-all duration-300 py-2 px-1 group ${
              item.isSpecial
                ? "text-amber-400 hover:text-amber-300"
                : "text-white/90 hover:text-white"
            }`}
          >
            {item.label}
            <span
              className={`absolute bottom-0 left-0 w-0 h-0.5 ${
                item.isSpecial
                  ? "bg-gradient-to-r from-amber-300 to-amber-400"
                  : "bg-gradient-to-r from-amber-400 to-amber-500"
              } group-hover:w-full transition-all duration-300 rounded-full`}
            ></span>
          </Link>
        ) : (
          <a
            href={item.href}
            onClick={onClick}
            className="relative text-white/90 hover:text-white font-medium transition-all duration-300 py-2 px-1 group"
          >
            {item.label}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
          </a>
        )}
      </li>
    ))}
  </>
);

const HeaderComponent = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#1b2f62]/95 backdrop-blur-lg shadow-lg shadow-black/10 py-3"
          : "bg-gradient-to-b from-[#1b2f62] to-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="/img/escudo-federal-futbol-club-sin-fondo.webp"
                alt="Federal FC"
                className={`transition-all duration-300 ${
                  isScrolled ? "h-10" : "h-12 md:h-14"
                } group-hover:scale-105`}
              />
              <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <h1
                className={`font-bold text-white transition-all duration-300 ${
                  isScrolled ? "text-lg" : "text-xl"
                }`}
              >
                Federal FC
              </h1>
              <p
                className={`text-amber-400/80 text-xs font-medium tracking-wider transition-all duration-300 ${
                  isScrolled ? "opacity-0 h-0" : "opacity-100"
                }`}
              >
                Más que un equipo
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center space-x-8">
              <NavLinks />
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden text-white hover:bg-white/10 rounded-xl"
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[350px] bg-gradient-to-b from-[#1b2f62] to-[#152347] border-l border-white/10"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center gap-3 mb-8 pt-4">
                  <img
                    src="/img/escudo-federal-futbol-club-sin-fondo.webp"
                    alt="Federal FC"
                    className="h-12"
                  />
                  <div>
                    <h2 className="font-bold text-white text-lg">Federal FC</h2>
                    <p className="text-amber-400/80 text-xs">
                      Más que un equipo
                    </p>
                  </div>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1">
                  <ul className="flex flex-col space-y-2">
                    {navItems.map((item) => (
                      <li key={item.href}>
                        {item.href.startsWith("/") ? (
                          <Link
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center gap-3 font-medium py-3 px-4 rounded-xl transition-all duration-300 group ${
                              item.isSpecial
                                ? "text-amber-400 hover:text-amber-300 bg-amber-400/10 hover:bg-amber-400/20"
                                : "text-white/80 hover:text-white hover:bg-white/5"
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                item.isSpecial
                                  ? "bg-amber-400"
                                  : "bg-amber-400/50 group-hover:bg-amber-400"
                              } transition-colors`}
                            ></span>
                            {item.label}
                          </Link>
                        ) : (
                          <a
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-3 text-white/80 hover:text-white hover:bg-white/5 font-medium py-3 px-4 rounded-xl transition-all duration-300 group"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400/50 group-hover:bg-amber-400 transition-colors"></span>
                            {item.label}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
