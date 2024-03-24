import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar"

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
        <Navbar />
        {children}
        </body>
    </html>
  );
}
