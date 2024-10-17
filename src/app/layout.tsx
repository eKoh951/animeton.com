import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import { Providers } from "./providers";
import Header from "@/components/ui/layout/Header";
import Footer from "@/components/ui/layout/Footer";

import "./globals.css";

const exo2 = Exo_2({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Animeton.com",
  description: "La App de Windows para ver anime en Español",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${exo2.className} flex flex-col min-h-screen`}>
        <Providers>
          <div className="flex flex-col min-h-screen purple-dark text-foreground bg-background">
            <Header />
            <main className="flex-grow ">{children}</main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
