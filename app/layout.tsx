import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Lobster } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";


const lobster = Lobster({
  weight: "400",
  subsets:["latin"],
  variable: "--font-caption",
});

export const metadata: Metadata = {
  title: "ZOO-ARCADIA",
  description: "Information of Zoo and animals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(GeistSans.variable, lobster.variable, GeistMono.variable, "font-sans")}>
        <Header/>
        {children}
      </body>
    </html>
  );
}