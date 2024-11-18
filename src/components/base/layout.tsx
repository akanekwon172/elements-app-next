import { BIZ_UDPGothic } from "next/font/google";

import { ThemeProvider } from "next-themes";

import Header from "@/components/base/header";
import { cn } from "@/lib/utils";
// import localFont from "next/font/local";

const bizUDP = BIZ_UDPGothic({ subsets: ["latin"], weight: ["400"] });
/* const geistSans = localFont({
  src: "@/pages/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
}); */

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${cn(
        bizUDP.className,
        "min-h-svh bg-slate-100 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-50",
      )}`}
    >
      <ThemeProvider attribute="class" defaultTheme="system">
        <Header />
        <div>{children}</div>
      </ThemeProvider>
    </div>
  );
}
