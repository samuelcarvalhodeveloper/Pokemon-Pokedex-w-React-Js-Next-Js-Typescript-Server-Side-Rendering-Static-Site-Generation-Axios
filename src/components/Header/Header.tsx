import Image from "next/image";
import Link from "next/link";
import HeaderStyled from "./Styled";
import SamuelCarvalhoLogo from "../../assets/img/SamuelCarvalhoLogo.svg";

function Header() {
  return (
    <HeaderStyled>
      <div className="header__center">
        <Link
          href="/"
          className="header__link">
          <Image
            src={SamuelCarvalhoLogo}
            width={40}
            height={40}
            alt="Samuel Carvalho Logo"
            className="header__logo"
          />
        </Link>
      </div>
    </HeaderStyled>
  );
}

export default Header;
