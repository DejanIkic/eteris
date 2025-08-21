import type { Metadata } from "next";
import { Geist, Geist_Mono, Forum } from "next/font/google";
import "./globals.css";
import Navbar from "components/navbar";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const forumFont = Forum({
    variable: "--font-forum",
    subsets: ["latin"],
    weight: "400",
});

export const metadata: Metadata = {
    title: "Eteris Events",
    description: "Your event management solution",
};

// Add smooth scrolling behavior
const smoothScroll = `
  html {
    scroll-behavior: smooth;
  }
  
  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
  }
`;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <style dangerouslySetInnerHTML={{ __html: smoothScroll }} />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${forumFont.variable} antialiased
                bg-background font-forum
                `}
            >
                <Navbar>{children}</Navbar>
            </body>
        </html>
    );
}
