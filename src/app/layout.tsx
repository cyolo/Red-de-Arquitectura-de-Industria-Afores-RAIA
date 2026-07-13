import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "RAIA Service Landscape V14.0 — Value Chain View",
  description: "Mapa de capacidades, dominios de negocio y Service Domains de la industria mexicana de ahorro para el retiro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        <Header />
        <main className="flex-1 flex flex-col min-h-0 relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
