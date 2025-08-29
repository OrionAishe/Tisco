import type { Metadata } from "next";
import "./globals.scss";
import Header from "@/components/Molecules/Header/Header";
import Footer from "@/components/Molecules/Footer/Footer";

export const metadata: Metadata = {
  title: "TISCO",
  description: "PETISCO, CERVEJA & CACHAÇA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
