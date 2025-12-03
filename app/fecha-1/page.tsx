"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Table2, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import HeaderNavFechas from "@/components/components-ui/header-nav-fechas";
import { ILeagueTableSection, IResultsSection } from "@/interfaces/inteface";
import { leagueTable } from "@/data/leagueTable";
import { matchResults } from "@/data/match-results/fecha1";
import { compareTeams } from "@/functions/compare-teams";

leagueTable.zoneA.sort(compareTeams);
leagueTable.zoneB.sort(compareTeams);

const FechaUno = () => {
  const ResultsSection = ({ zoneResults, zoneName }: IResultsSection) => (
    <div className="mb-10">
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#2348a7]/20"></div>
        <h2 className="text-xl md:text-2xl font-bold text-[#1b2f62] flex items-center gap-2">
          <Calendar className="w-5 h-5 text-amber-500" />
          Resultados - {zoneName}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#2348a7]/20"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {zoneResults.map((match, index) => (
          <Card
            key={index}
            className="group bg-white border-0 shadow-lg shadow-gray-100 hover:shadow-xl hover:shadow-[#2348a7]/10 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
          >
            <CardContent className="p-4 md:p-5">
              <div className="flex justify-between items-center">
                <div className="text-right flex-1 flex items-center justify-end gap-2 md:gap-3">
                  <p className="font-semibold text-sm md:text-base text-[#1b2f62] hidden min-[500px]:block truncate max-w-[100px] md:max-w-[140px]">
                    {match.homeTeam}
                  </p>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gray-50 p-1 flex items-center justify-center">
                    <Image
                      src={match.homeTeamLogo}
                      alt={`${match.homeTeam} logo`}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="mx-3 md:mx-5 flex flex-col items-center">
                  <div className="flex items-center gap-2 bg-gradient-to-r from-[#1b2f62] to-[#2348a7] text-white px-4 py-2 rounded-xl shadow-md">
                    <span className="text-lg md:text-xl font-bold">
                      {match.score.split(" - ")[0]}
                    </span>
                    <span className="text-white/50">-</span>
                    <span className="text-lg md:text-xl font-bold">
                      {match.score.split(" - ")[1]}
                    </span>
                  </div>
                </div>
                <div className="text-left flex-1 flex items-center gap-2 md:gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gray-50 p-1 flex items-center justify-center">
                    <Image
                      src={match.awayTeamLogo}
                      alt={`${match.awayTeam} logo`}
                      width={40}
                      height={40}
                      className="object-contain"
                    />
                  </div>
                  <p className="font-semibold text-sm md:text-base text-[#1b2f62] hidden min-[500px]:block truncate max-w-[100px] md:max-w-[140px]">
                    {match.awayTeam}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const LeagueTableSection = ({ zoneTable, zoneName }: ILeagueTableSection) => (
    <div className="mb-10">
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#2348a7]/20"></div>
        <h2 className="text-xl md:text-2xl font-bold text-[#1b2f62] flex items-center gap-2">
          <Table2 className="w-5 h-5 text-amber-500" />
          Tabla - {zoneName}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#2348a7]/20"></div>
      </div>
      <Card className="bg-white border-0 shadow-xl shadow-gray-100 rounded-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-gradient-to-r from-[#1b2f62] to-[#2348a7] hover:from-[#1b2f62] hover:to-[#2348a7]">
                <TableHead className="text-white font-semibold text-center w-12">
                  #
                </TableHead>
                <TableHead className="text-white font-semibold">
                  Equipo
                </TableHead>
                <TableHead className="text-white font-semibold text-center">
                  PJ
                </TableHead>
                <TableHead className="text-white font-semibold text-center hidden sm:table-cell">
                  G
                </TableHead>
                <TableHead className="text-white font-semibold text-center hidden sm:table-cell">
                  E
                </TableHead>
                <TableHead className="text-white font-semibold text-center hidden sm:table-cell">
                  P
                </TableHead>
                <TableHead className="text-white font-semibold text-center hidden md:table-cell">
                  GF
                </TableHead>
                <TableHead className="text-white font-semibold text-center hidden md:table-cell">
                  GC
                </TableHead>
                <TableHead className="text-white font-semibold text-center">
                  <span className="bg-amber-400 text-[#1b2f62] px-2 py-1 rounded-lg text-xs font-bold">
                    PTS
                  </span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {zoneTable.map((team, index) => (
                <TableRow
                  key={index}
                  className={`transition-colors duration-200 ${
                    team.team.toLowerCase().includes("federal")
                      ? "bg-amber-50 hover:bg-amber-100"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <TableCell className="text-center">
                    <span
                      className={`inline-flex items-center justify-center w-7 h-7 rounded-lg text-sm font-bold ${
                        index === 0
                          ? "bg-amber-400 text-[#1b2f62]"
                          : index < 4
                          ? "bg-[#2348a7]/10 text-[#2348a7]"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {index + 1}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gray-50 p-0.5 flex items-center justify-center">
                        <Image
                          src={team.teamLogo}
                          alt={`${team.team} logo`}
                          width={28}
                          height={28}
                          className="object-contain"
                        />
                      </div>
                      <span
                        className={`font-medium text-sm md:text-base ${
                          team.team.toLowerCase().includes("federal")
                            ? "text-[#1b2f62] font-bold"
                            : "text-gray-700"
                        }`}
                      >
                        {team.team}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center text-gray-600">
                    {team.played}
                  </TableCell>
                  <TableCell className="text-center text-gray-600 hidden sm:table-cell">
                    {team.won}
                  </TableCell>
                  <TableCell className="text-center text-gray-600 hidden sm:table-cell">
                    {team.drawn}
                  </TableCell>
                  <TableCell className="text-center text-gray-600 hidden sm:table-cell">
                    {team.lost}
                  </TableCell>
                  <TableCell className="text-center text-gray-600 hidden md:table-cell">
                    {team.goalsFor}
                  </TableCell>
                  <TableCell className="text-center text-gray-600 hidden md:table-cell">
                    {team.goalsAgainst}
                  </TableCell>
                  <TableCell className="text-center">
                    <span className="inline-flex items-center justify-center min-w-[2rem] bg-[#1b2f62] text-white px-2 py-1 rounded-lg text-sm font-bold">
                      {team.points}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <HeaderNavFechas />

      <main className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 bg-[#1b2f62]/10 text-[#1b2f62] font-medium px-4 py-2 rounded-full text-sm mb-4">
              <Trophy className="w-4 h-4 text-amber-500" />
              Torneo UNER 2024
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1b2f62] mb-3">
              Fecha 1
            </h1>
            <p className="text-gray-600 max-w-xl mx-auto">
              Resultados y tabla de posiciones del torneo universitario
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-[#2348a7] to-amber-400 mx-auto rounded-full mt-4"></div>
          </motion.div>

          {/* Tabs */}
          <Tabs defaultValue="results" className="max-w-5xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8 bg-white shadow-lg shadow-gray-100 rounded-2xl p-1.5 h-auto">
              <TabsTrigger
                value="results"
                className="rounded-xl py-3 text-sm md:text-base font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#1b2f62] data-[state=active]:to-[#2348a7] data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
              >
                <Calendar className="w-4 h-4 mr-2" />
                Resultados
              </TabsTrigger>
              <TabsTrigger
                value="standings"
                className="rounded-xl py-3 text-sm md:text-base font-semibold data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#1b2f62] data-[state=active]:to-[#2348a7] data-[state=active]:text-white data-[state=active]:shadow-md transition-all duration-300"
              >
                <Table2 className="w-4 h-4 mr-2" />
                Tabla de Posiciones
              </TabsTrigger>
            </TabsList>

            <TabsContent value="results">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ResultsSection
                  zoneResults={matchResults.zoneA}
                  zoneName="Zona A"
                />
                <ResultsSection
                  zoneResults={matchResults.zoneB}
                  zoneName="Zona B"
                />
              </motion.div>
            </TabsContent>

            <TabsContent value="standings">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <LeagueTableSection
                  zoneTable={leagueTable.zoneA}
                  zoneName="Zona A"
                />
                <LeagueTableSection
                  zoneTable={leagueTable.zoneB}
                  zoneName="Zona B"
                />
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default FechaUno;
