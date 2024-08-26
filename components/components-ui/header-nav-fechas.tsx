"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const HeaderNavFechas = () => {
  const [selectedDate, setSelectedDate] = useState("fecha-1");
  const router = useRouter();

  const handleDateChange = (value: string) => {
    setSelectedDate(value);
    router.push(`/${value}`);
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
              <SelectItem value="fecha-1">Fecha 1</SelectItem>
            </SelectContent>
          </Select>
        </nav>
      </div>
    </header>
  );
};

export default HeaderNavFechas;
