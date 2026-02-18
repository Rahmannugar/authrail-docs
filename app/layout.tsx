import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://authrail.vercel.app"),
  title: {
    default: "Authrail Docs",
    template: "%s - Authrail Docs",
  },
  description:
    "Framework-agnostic, deterministic policy engine for web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-black text-zinc-200 antialiased font-sans">
        <div>{children}</div>
      </body>
    </html>
  );
}
