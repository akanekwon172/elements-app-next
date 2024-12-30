import { BIZ_UDPGothic } from 'next/font/google';

import Header from '@/components/Common/Header';
import { cn } from '@/lib/utils';
// import localFont from "next/font/local";

const bizUDP = BIZ_UDPGothic({ subsets: ['latin'], weight: ['400'] });
/* const geistSans = localFont({
  src: "@/pages/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
}); */

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${cn(bizUDP.className, 'min-h-svh antialiased ')}`}>
      <Header />
      <div>{children}</div>
    </div>
  );
}
