import type { Metadata } from "next";
import "./globals.scss";

import localFont from "next/font/local";
import { CSSProperties } from "react";
import { BiHeading } from "react-icons/bi";
import Header from "./components/hheader/Header";
import Footer from "./components/footer/Footer";
import HoppingBunny from "./components/HoppingBunny";

export const revalidate = 5;
const hossRound = localFont({
  src: [
    {
      path: "./fonts/hru.otf",
      weight: "400",
      style: "normal",
    },
  ],
});
const anchor = localFont({
  src: [
    {
      path: "./fonts/anchor_medium.otf",
      weight: "400",
    },
    {
      path: "./fonts/anchor_semibold.otf",
      weight: "600",
    },
  ],
});

export const metadata: Metadata = {
  title: "OnKey Expo — East Coast VTuber Convention",
  description:
    "OnKey Expo is a VTuber-centered convention focused on creators, fans, tech, and industry collaboration. With panels, performances, cosplay,  anime, networking events, and cutting-edge showcases, it’s built by and for the community",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
        style={
          {
            "--fontH": hossRound.style.fontFamily,
            "--fontP": anchor.style.fontFamily,
          } as CSSProperties
        }
      >
        <HoppingBunny />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
