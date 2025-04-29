import type { Metadata } from "next";
import { Red_Hat_Display, Red_Hat_Text } from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
