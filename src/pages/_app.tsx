import '@/styles/globals.css';

import type { AppProps } from 'next/app';

import Layout from '@/components/Common/Layout';
import { ThemeProvider } from '@/context/ThemeProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="theme">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
