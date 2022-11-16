import Head from "next/head";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import SmoothScrolling from "../../components/SmoothScrolling/SmoothScrolling";
import PokemonSection from "../../components/PokemonSection/PokemonSection";
import type { IndexContainerProps } from "../../../types";

function Index(props: IndexContainerProps) {
  return (
    <>
      <Head>
        <title>Pokédex - Samuel Carvalho</title>
      </Head>
      <Header />
      <Banner />
      <PokemonSection data={props.data} />
      <SmoothScrolling />
    </>
  );
}

export default Index;
