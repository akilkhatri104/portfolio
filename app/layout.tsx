import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akil Khatri | Portfolio",
  description: "This is a portfolio made by Akil Khatri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark`}
      >
        {children}

        <footer className="text-center p-2">
          <h1>Designed & Developed by <strong>Akil Khatri</strong></h1>
          <a href="https://github.com/akilkhatri104/portfolio" className="text-blue-500 hover:underline active:text-gray-300" target="_blank">Code (Github)</a>
        </footer>
      </body>
    </html>
  );
}
