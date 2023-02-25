import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { Sevillana } from "@next/font/google";

const sevillana = Sevillana({
  subsets: ["latin"],
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={sevillana.className}>
      <Component {...pageProps} />
    </main>
  );
}
