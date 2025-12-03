"use client";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { ArrowLeft, Calendar, Trophy } from "lucide-react";
import Link from "next/link";

enum Fechas {
  fecha1 = "fecha-1",
  fecha2 = "fecha-2",
  fecha3 = "fecha-3",
  fecha4 = "fecha-4",
}

const HeaderNavFechas = () => {
  const router = useRouter();
  let pathname = usePathname();
  pathname = pathname.slice(1);

  const select = Object.values(Fechas).includes(pathname as Fechas)
    ? pathname
    : "fecha";

  const [selectedDate, setSelectedDate] = useState(select);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDateChange = (value: string) => {
    if (value != "fecha") {
      setSelectedDate(value);
      router.push(`/${value}`);
    }
  };

  const getFechaLabel = (fecha: string) => {
    const num = fecha.replace("fecha-", "");
    return `Fecha ${num}`;
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#1b2f62]/95 backdrop-blur-lg shadow-lg shadow-black/10"
          : "bg-gradient-to-r from-[#1b2f62] via-[#1e3570] to-[#1b2f62]"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Back Button & Logo */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <div className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:-translate-x-0.5">
                <ArrowLeft className="w-5 h-5" />
              </div>
            </Link>

            <Link href="/" className="flex items-center gap-3 group">
              <img
                src="/img/escudo-federal-futbol-club-sin-fondo.webp"
                alt="Federal FC"
                className="h-10 md:h-12 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="hidden sm:block">
                <h1 className="font-bold text-white text-lg">Federal FC</h1>
                <p className="text-amber-400/80 text-xs font-medium">
                  Torneo 2024
                </p>
              </div>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-4">
            {/* Current Fecha Badge (visible on larger screens) */}
            {selectedDate !== "fecha" && (
              <div className="hidden md:flex items-center gap-2 bg-amber-400/20 text-amber-400 px-4 py-2 rounded-full">
                <Trophy className="w-4 h-4" />
                <span className="font-semibold text-sm">
                  {getFechaLabel(selectedDate)}
                </span>
              </div>
            )}

            {/* Fecha Selector */}
            <div className="relative">
              <Select value={selectedDate} onValueChange={handleDateChange}>
                <SelectTrigger className="w-[160px] md:w-[180px] bg-white/10 hover:bg-white/20 border-white/20 text-white rounded-xl transition-all duration-300 focus:ring-2 focus:ring-amber-400/50">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-amber-400" />
                    <SelectValue placeholder="Seleccionar fecha" />
                  </div>
                </SelectTrigger>
                <SelectContent className="bg-[#1b2f62] border-white/20 rounded-xl overflow-hidden">
                  <SelectItem
                    value="fecha"
                    className="text-white/70 focus:bg-white/10 focus:text-white"
                  >
                    Seleccionar fecha
                  </SelectItem>
                  {Object.entries(Fechas).map(([key, value]) => (
                    <SelectItem
                      key={key}
                      value={value}
                      className="text-white focus:bg-amber-400/20 focus:text-amber-400"
                    >
                      {getFechaLabel(value)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </nav>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
    </header>
  );
};

export default HeaderNavFechas;
