import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  html, body {
    height: 100%;
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    background: #E0D3D3;
    font-family: 'Inter', sans-serif;
  }

  :focus {
    outline: .3rem solid #007bff;
  }

  :active {
    outline: none;
  }
`;

export default GlobalStyle;
