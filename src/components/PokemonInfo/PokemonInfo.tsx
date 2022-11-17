import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PokemonInfoStyled from "./Styled";
import BackHomeUnderline from "../../assets/img/BackHomeUnderline.svg";
import BackHome from "../../assets/img/BackHome.svg";
import type { PokemonInfoProps } from "../../../types";
import PokemonCardInfo from "../PokemonCardInfo/PokemonCardInfo";

function PokemonInfo(props: PokemonInfoProps) {
  const [underline, setUnderline] = useState(false);

  function handleMouseEnter(): any {
    return setUnderline(true);
  }

  function handleMouseLeave(): any {
    return setUnderline(false);
  }

  return (
    <PokemonInfoStyled>
      <div className="main__container">
        <div className="main__center">
          <div className="main__content">
            <PokemonCardInfo name={props.name} />
            <p className="main__info">
              This is an educational project made with next js, that uses
              technologies like server side rendering and server side rendering
              with static site generation, styled-components and react paginate.
              Powered by pokeapi.co.{" "}
            </p>
            <Link
              href="/"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <Image
                src={underline ? BackHomeUnderline : BackHome}
                width={138}
                height={49}
                alt="Back to home link"
              />
            </Link>
          </div>
        </div>
      </div>
    </PokemonInfoStyled>
  );
}

export default PokemonInfo;
