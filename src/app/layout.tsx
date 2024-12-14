import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Exo } from "next/font/google";
import { type Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { TRPCReactProvider } from "~/trpc/react";
import { cn } from "~/lib/utils";
import { Navbar } from "~/components/navbar";
import FloatingContactButton from "~/components/floating-contact-button";

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
    >
      <body className="relative mx-4 flex max-h-dvh min-h-[calc(100dvh-3rem)] flex-col pt-12 antialiased">
        <TRPCReactProvider>
          <Navbar />
          <main className="mx-auto mt-12 flex-grow px-9 lg:min-w-[60ch] lg:max-w-[60ch] lg:px-0">
            {children}
          </main>
          <FloatingContactButton />
          <NextTopLoader color="#fff" />
        </TRPCReactProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
