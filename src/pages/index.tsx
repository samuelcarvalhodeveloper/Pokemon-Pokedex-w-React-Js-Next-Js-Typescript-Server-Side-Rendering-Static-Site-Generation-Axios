import { GetStaticProps } from "next";
import IndexComponent from "../containers/Index/Index";
import type { PokemonArray, IndexDataProps } from "../../types";

function Index({ data }: IndexDataProps) {
  return <IndexComponent data={data} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151",
  );
  const data: Promise<PokemonArray> = await res.json();

  return {
    props: {
      data,
    },
  };
};

export default Index;
