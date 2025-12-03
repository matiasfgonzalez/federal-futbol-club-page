import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import FooterComponent from "@/components/components-ui/footer";
import SocialShare from "@/components/components-ui/social-share";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Federal Futbol Club | Más que un equipo",
  description:
    "Página oficial del Federal Futbol Club - Tradición, pasión y gloria desde 2017. Conocé nuestra historia, jugadores legendarios y sigue el torneo.",
  keywords: [
    "Federal Futbol Club",
    "fútbol",
    "Entre Ríos",
    "UNER",
    "torneo universitario",
  ],
  openGraph: {
    title: "Federal Futbol Club",
    description: "Más que un equipo - Tradición, pasión y gloria",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#1b2f62] via-[#1b2f62] to-[#152347] text-white overflow-x-hidden">
          {children}
          <SocialShare />
          <FooterComponent />
        </div>
      </body>
    </html>
  );
}
