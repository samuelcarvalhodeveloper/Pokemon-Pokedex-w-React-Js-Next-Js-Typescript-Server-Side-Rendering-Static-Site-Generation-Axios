import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../../components/Header/Header";
import PokemonInfoComponent from "../../components/PokemonInfo/PokemonInfo";

function PokemonInfo() {
  let title: string | undefined | null = null;
  const router = useRouter().query.pokemon?.toString();
  const pokemonName: string | undefined = router;
  const firstLetter: string | undefined = router?.charAt(0);
  const firstLetterCap: string | undefined = firstLetter?.toUpperCase();
  const remainingLetters: string | undefined = router?.slice(1);
  if (firstLetterCap && remainingLetters) {
    const capitalizedWord: string | undefined =
      firstLetterCap + remainingLetters;
    title = capitalizedWord;
  }

  return (
    <>
      <Head>
        <title>{title} - Samuel Carvalho</title>
      </Head>
      <Header />
      <PokemonInfoComponent name={pokemonName} />
    </>
  );
}

export default PokemonInfo;
