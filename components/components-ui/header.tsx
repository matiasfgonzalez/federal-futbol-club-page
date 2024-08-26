import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import { Menu } from "lucide-react";

const NavLinks = () => (
  <>
    <li>
      <a href="#home" className="hover:text-white transition duration-300">
        Inicio
      </a>
    </li>
    <li>
      <a
        href="#next-match"
        className="hover:text-white transition duration-300"
      >
        Próximo Partido
      </a>
    </li>
    <li>
      <a href="#history" className="hover:text-white transition duration-300">
        Historia
      </a>
    </li>
    <li>
      <a href="#players" className="hover:text-white transition duration-300">
        Jugadores
      </a>
    </li>
    <li>
      <a href="#trophies" className="hover:text-white transition duration-300">
        Campeonatos
      </a>
    </li>
    <li>
      <a href="#sponsors" className="hover:text-white transition duration-300">
        Patrocinadores
      </a>
    </li>
  </>
);

const HeaderComponent = () => {
  return (
    <header className="bg-[#2348a7] py-4 relative z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <img
          src="/img/escudo-federal-futbol-club-sin-fondo.webp?height=50&width=50"
          alt="Federal FC"
          className="h-12"
        />
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <NavLinks />
          </ul>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4">
              <NavLinks />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default HeaderComponent;
