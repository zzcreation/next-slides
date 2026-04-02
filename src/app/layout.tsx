import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "OpenClaw 小龙虾 - Claude Code 源码分析",
  description: "OpenClaw 小龙虾 - Claude Code 源码分析",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#ffffff] text-[#1f2937] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}