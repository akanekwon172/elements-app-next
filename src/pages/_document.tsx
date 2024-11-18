import type { Metadata } from "next";
import { Html, Head, Main, NextScript } from "next/document";

export const metadata: Metadata = {
  title: "元素周期表",
};

export default function Document() {
  return (
    <Html lang="ja">
      <Head />
      <body>
        <Main />
        <NextScript></NextScript>
      </body>
    </Html>
  );
}
