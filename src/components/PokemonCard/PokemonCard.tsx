import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import PokemonCardStyled from "./Styled";
import type { PokemonCardProps, PokemonData } from "../../../types";

function PokemonCard(props: PokemonCardProps) {
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);

  function numberCorrect(): string {
    if (pokemonData && pokemonData?.data?.id < 10)
      return `#00${pokemonData?.data.id}`;

    if (
      pokemonData &&
      pokemonData?.data?.id > 10 &&
      pokemonData?.data?.id < 100
    )
      return `#0${pokemonData?.data.id}`;

    return `#${pokemonData?.data.id}`;
  }

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${props.name}/`)
      .then((res) => setPokemonData(res));
    numberCorrect();
  }, [pokemonData]);

  return (
    <PokemonCardStyled>
      <Link
        href={`/pokemon/${props.name}`}
        className="article__link">
        <div
          className={`article__illustration article__illustration--${pokemonData?.data.types[0].type.name}`}>
          {pokemonData ? (
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokemonData.data.id}.gif`}
              alt="Pokemon Image"
              className="article__image"
            />
          ) : (
            false
          )}
        </div>
        <div className="article__info">
          <div className="article__content">
            <h5 className="article__id">
              {pokemonData ? numberCorrect() : false}
            </h5>
            <h4 className="article__name">
              {pokemonData?.data.name ? pokemonData.data.name : false}
            </h4>
            <ul className="article__list">
              {pokemonData?.data.types.map((item, index) => (
                <li
                  className={`article__item article__item--${item.type.name}`}
                  key={index}>
                  {item.type.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Link>
    </PokemonCardStyled>
  );
}

export default PokemonCard;
