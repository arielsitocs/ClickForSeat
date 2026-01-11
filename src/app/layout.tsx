import type { Metadata } from "next";

import { Manrope } from "next/font/google";

import { Toaster } from "sonner";

import "./globals.css";

import NavBar from "../components/ui/navBar";
import Footer from "../components/ui/footer";

// proveedor del contexto de shows //
import { ShowProvider } from "../context/ShowContext";

const manRope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ClickForSeat",
  description: "Seat Reservation App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${manRope.variable} antialiased min-h-screen flex flex-col`}
      >
        <Toaster
          richColors={false}
          position="bottom-right"
          toastOptions={{
            // estilos generales del toast, success y error se definen por separado en global.css //
            style: {
              background: 'var(--gray)',
              color: 'white',
              border: 'none',
            },
            className: 'manrope group'
          }}
        />
        <ShowProvider>
          <NavBar />
          {children}
          <Footer />
        </ShowProvider>
      </body>
    </html>
  );
}
