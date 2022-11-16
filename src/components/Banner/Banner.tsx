import Image from "next/image";
import BannerStyled from "./Styled";
import PokemonBackground from "../../assets/img/PokemonBackground.png";
import PokemonLogo from "../../assets/img/PokemonLogo.svg";

function Banner() {
  return (
    <BannerStyled backgroundImage={PokemonBackground}>
      <div className="section__center">
        <Image
          src={PokemonLogo}
          alt="Pokémon Logo"
          className="section__logo"
        />
      </div>
    </BannerStyled>
  );
}

export default Banner;
