import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Content404Styled from "./Styled";
import BackHomeUnderline from "../../assets/img/BackHomeUnderline.svg";
import BackHome from "../../assets/img/BackHome.svg";

function Content404() {
  const [underline, setUnderline] = useState(false);

  function handleMouseEnter(): any {
    return setUnderline(true);
  }

  function handleMouseLeave(): any {
    return setUnderline(false);
  }

  useEffect(() => {}, [underline]);

  return (
    <Content404Styled>
      <div className="main__content">
        <div className="main__center">
          <h1 className="main__title inter">Page 404: Not Found.</h1>
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
    </Content404Styled>
  );
}

export default Content404;
