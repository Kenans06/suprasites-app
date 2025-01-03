import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";

const newRodin = localFont({ src: "./fonts/new-rodin.otf" });

export const metadata: Metadata = {
  title: "Supra Sites",
  description: "Under Construction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          "flex flex-col h-screen justify between " + newRodin.className
        }
      >
        <Header />
        <main className="m-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
