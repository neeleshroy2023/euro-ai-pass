import type { Metadata } from "next";
import { Red_Hat_Display, Red_Hat_Text } from "next/font/google";
import "./globals.css";
import PrelineScriptWrapper from "@/components/PrelineScriptWrapper";
import Navigation from "@/components/navigation";

const redhatDisplay = Red_Hat_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

const redHatText = Red_Hat_Text({
  variable: "--font-text",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Euro AI Pass",
  description: "AI Resume Builder for European Job Seekers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${redhatDisplay.variable} ${redHatText.variable} antialiased`}
      >
        <Navigation />
        <div className="container mx-auto px-4">{children}</div>
      </body>
      <PrelineScriptWrapper />
    </html>
  );
}
