import "~/styles/globals.css";

import NextTopLoader from "nextjs-toploader";
import { GeistSans } from "geist/font/sans";
import { Exo } from "next/font/google";
import { type Metadata } from "next";
import { ThemeProvider } from "next-themes";

import { SpeedInsights } from "@vercel/speed-insights/next";

import { cn } from "~/lib/utils";
import FloatingContactButton from "~/components/floating-contact-button";
import { Header } from "~/components/header";

export const metadata: Metadata = {
  title: "Dodycode's Digital Space",
  description:
    "a Fullstack Javascript Developer who loves crafting smooth, user-friendly web experiences with Javascript.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const ExoFont = Exo({
  subsets: ["latin"],
  variable: "--font-exo",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={cn("dark", ExoFont.variable, GeistSans.variable)}
      suppressHydrationWarning
    >
      <body className="relative flex flex-col antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          {children}
          <FloatingContactButton />
          <NextTopLoader color="#fff" showSpinner={false} />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
