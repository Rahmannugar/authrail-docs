import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import Script from "next/script";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
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
    <html lang="en" className={spaceGrotesk.variable} suppressHydrationWarning>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-CJ7X6VERRN"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-CJ7X6VERRN');
        `}
      </Script>
      <body className="bg-black text-zinc-200 antialiased font-sans dark">
        {children}
      </body>
    </html>
  );
}
