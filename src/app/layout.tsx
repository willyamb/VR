import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import BootstrapClient from "@/components/BootstrapClient";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Viviana Remolina | Seguridad Química y SST",
  description:
    "Servicios de consultoría para empresas en seguridad química, Seguridad y Salud en el Trabajo y capacitaciones.",

  openGraph: {
    title: "Viviana Remolina | Seguridad Química y SST",
    description:
      "Servicios de consultoría para empresas en seguridad química, Seguridad y Salud en el Trabajo y capacitaciones.",
    type: "website",
    locale: "es_CO",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}