"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

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

  const handleDateChange = (value: string) => {
    if (value != "fecha") {
      setSelectedDate(value);
      router.push(`/${value}`);
    }
  };

  return (
    <header className="bg-[#1b2f62] text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => handleDateChange("/")}
        >
          <img
            src="/img/escudo-federal-futbol-club-sin-fondo.webp?height=50&width=50"
            alt="Federal FC"
            className="h-12"
          />
        </div>
        <nav className="flex items-center">
          <Select value={selectedDate} onValueChange={handleDateChange}>
            <SelectTrigger className="w-[180px] bg-white text-[#1b2f62]">
              <SelectValue placeholder="Seleccionar fecha" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="fecha">Seleccione una opción</SelectItem>
              {Object.entries(Fechas).map(([key, value]) => (
                <SelectItem key={key} value={value}>
                  {key
                    .replace(/([a-z])([A-Z])/g, "$1 $2")
                    .replace(/fecha/, "Fecha ")}{" "}
                  {/* Esto es opcional para transformar "fecha1" a "Fecha 1" */}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </nav>
      </div>
    </header>
  );
};

export default HeaderNavFechas;
