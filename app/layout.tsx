import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackgroundMusic from "./BackgroundMusic";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "资本做局器",
  description: "我操！又被资本做局了！",
  other: {
    "itemprop:name": "资本做局器",
    "itemprop:description": "我操！又被资本做局了！",
    "itemprop:image": "/avatar.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/avatar.png" type="image/png" />
        <meta itemProp="name" content="资本做局器" />
        <meta itemProp="description" content="我操！又被资本做局了！" />
        <meta itemProp="image" content="/avatar.png" />
        <meta name="description" content="我操！又被资本做局了！" />
      </head>
      <body
      
      >
        {children}
        <BackgroundMusic />
      </body>
    </html>
  );
}
