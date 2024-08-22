import type { Metadata } from "next";
import "./globals.css";

import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";


const poppins = Poppins( {
  weight: "400",
  subsets: ["latin"],

});

export const metadata: Metadata = {
  title: "Ben | Portfolio",
  description: "Ben Cheung's personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scrollbar-hide" style={{scrollBehavior: 'smooth'}}>
      <body className={poppins.className}>{children}
        <Toaster />
      </body>
    </html>
  );
}
