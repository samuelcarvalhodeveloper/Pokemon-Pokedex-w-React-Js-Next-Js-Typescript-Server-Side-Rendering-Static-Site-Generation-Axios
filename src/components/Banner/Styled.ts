import styled from "styled-components";
import type { BannerStyledProps } from "../../../types";

const BannerStyled = styled.section<BannerStyledProps>`
  width: 100%;
  background-image: url(${(props) => props.backgroundImage.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  padding: 13.3rem 0;

  .section__center {
    width: 100%;
    max-width: 60.6rem;
    padding: 0 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .section__logo {
    width: 100%;
  }

  @media screen and (max-width: 468px) {
    padding: 8rem 0;
  }
`;

export default BannerStyled;
