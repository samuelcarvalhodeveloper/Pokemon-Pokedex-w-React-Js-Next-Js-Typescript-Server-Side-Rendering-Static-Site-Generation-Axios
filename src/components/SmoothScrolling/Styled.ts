import styled from "styled-components";
import type { SmoothScrollingStyledProps } from "../../../types";

const SmoothScrollingStyled = styled.a<SmoothScrollingStyledProps>`
  position: fixed;
  width: 6rem;
  height: 6rem;
  background-image: url(${(props) => props.backgroundImage.src});
  bottom: 6rem;
  right: 6rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SmoothScrollingStyled;
