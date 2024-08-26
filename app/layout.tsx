import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

import { cn } from "@/lib/utils";
import FooterComponent from "@/components/components-ui/footer";
import SocialShare from "@/components/components-ui/social-share";
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Federal Futbol Club Page",
  description: "Página de futbol",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="flex flex-col min-h-screen bg-[#1b2f62] text-white">
          {children}
          <SocialShare />
          <FooterComponent />
        </div>
      </body>
    </html>
  );
}
