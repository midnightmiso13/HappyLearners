import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar"
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";

export const metadata: Metadata = {
  title: "Happy Learner",
  description: "Supply Sharing App for Teachers",
};

const font = Rubik({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <RegisterModal/>
          <Navbar />
        </ClientOnly>
        {children}
        </body>
    </html>
  );
}
