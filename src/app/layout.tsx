"use client";
import Header from "@/components/Header";
import GlobalStyles from "./GlobalStyles";
import { Comic_Neue } from "next/font/google";
import Footer from "@/components/Footer";

const comicSans = Comic_Neue({
  subsets: ["latin"],
  weight: ["300", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={comicSans.className}>
        <Header />
        <GlobalStyles />
        {children}
        <Footer />
      </body>
    </html>
  );
}
