import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "@/components/Common/Layout";
import { ThemeProvider } from "@/contexts/ThemeProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
