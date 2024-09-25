"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import HeaderNavFechas from "@/components/components-ui/header-nav-fechas";
import {
  ILeagueTableSection,
  IResultsSection,
  ITeam,
} from "@/interfaces/inteface";
import { leagueTable } from "@/data/leagueTable";
import { matchResults } from "@/data/match-results/fecha4";
import { compareTeams } from "@/functions/compare-teams";

leagueTable.zoneA.sort(compareTeams);
leagueTable.zoneB.sort(compareTeams);

const FechaCuatro = () => {
  const ResultsSection = ({ zoneResults, zoneName }: IResultsSection) => (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-center text-[#1b2f62] mb-4">
        Resultados - {zoneName}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {zoneResults.map((match, index) => (
          <Card key={index} className="bg-white shadow-lg hover:bg-[#c4d4fc]">
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div className="text-right flex-1 flex items-center justify-end">
                  <p className="font-bold mr-2">{match.homeTeam}</p>
                  <Image
                    src={match.homeTeamLogo}
                    alt={`${match.homeTeam} logo`}
                    width={40}
                    height={40}
                  />
                </div>
                <div className="mx-4 text-xl font-bold text-[#2348a7]">
                  {match.score}
                </div>
                <div className="text-left flex-1 flex items-center">
                  <Image
                    src={match.awayTeamLogo}
                    alt={`${match.awayTeam} logo`}
                    width={40}
                    height={40}
                  />
                  <p className="font-bold ml-2">{match.awayTeam}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const LeagueTableSection = ({ zoneTable, zoneName }: ILeagueTableSection) => (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-center text-[#1b2f62] mb-4">
        Tabla de Posiciones - {zoneName}
      </h2>
      <Card className="bg-white shadow-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#1b2f62] text-white hover:bg-[#2d4b97]">
              <TableHead className="text-white">Pos</TableHead>
              <TableHead className="text-white">Equipo</TableHead>
              <TableHead className="text-white text-center">PJ</TableHead>
              <TableHead className="text-white text-center">G</TableHead>
              <TableHead className="text-white text-center">E</TableHead>
              <TableHead className="text-white text-center">P</TableHead>
              <TableHead className="text-white text-center">GF</TableHead>
              <TableHead className="text-white text-center">GC</TableHead>
              <TableHead className="text-white text-center">Pts</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {zoneTable.map((team, index) => (
              <TableRow key={index} className="hover:bg-gray-100">
                <TableCell className="font-bold">{index + 1}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <Image
                      src={team.teamLogo}
                      alt={`${team.team} logo`}
                      width={30}
                      height={30}
                      className="mr-2"
                    />
                    {team.team}
                  </div>
                </TableCell>
                <TableCell className="text-center">{team.played}</TableCell>
                <TableCell className="text-center">{team.won}</TableCell>
                <TableCell className="text-center">{team.drawn}</TableCell>
                <TableCell className="text-center">{team.lost}</TableCell>
                <TableCell className="text-center">{team.goalsFor}</TableCell>
                <TableCell className="text-center">
                  {team.goalsAgainst}
                </TableCell>
                <TableCell className="text-center font-bold">
                  {team.points}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
  return (
    <div>
      <HeaderNavFechas />
      <main className="flex-grow bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl font-bold text-center text-[#1b2f62] mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Resultados y Tabla de Posiciones
          </motion.h1>

          <Tabs defaultValue="results" className="mb-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="results">Resultados</TabsTrigger>
              <TabsTrigger value="standings">Tabla de Posiciones</TabsTrigger>
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

export default FechaCuatro;
