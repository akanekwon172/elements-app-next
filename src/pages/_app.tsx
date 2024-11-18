import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Layout from "@/components/base/layout";
// "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
