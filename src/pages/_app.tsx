import type { AppProps } from "next/app";
import GlobalStyle from "../assets/css/GlobalStyle";
import "../assets/css/TypeClasses.css";
import "../assets/css/BackgroundClasses.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}
