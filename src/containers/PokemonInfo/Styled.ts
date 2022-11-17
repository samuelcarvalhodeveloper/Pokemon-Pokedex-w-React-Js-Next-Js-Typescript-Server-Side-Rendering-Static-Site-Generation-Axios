import styled from "styled-components";

const PokemonInfoStyled = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .main__container {
    width: 100%;
    max-width: 75.5rem;
    padding: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .main__center {
    padding: 3.2rem;
    background: #EAE1E1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1.6rem;
    border: .1rem solid #BFABAB;
  }

  .main__content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
  }

  .main__info {
    margin-bottom: 3rem;
  }
`;

export default PokemonInfoStyled;
