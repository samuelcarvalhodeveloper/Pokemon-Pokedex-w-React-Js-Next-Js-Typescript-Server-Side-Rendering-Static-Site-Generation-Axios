import styled from "styled-components";

const PokemonSectionStyled = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  top: -10rem;

  .section__container {
    width: 100%;
    max-width: 128.8rem;
    padding: 3.2rem;
    border-radius: 1.6rem;
  }

  .section__content {
    width: 100%;
    background: #EAE1E1;
    border: .1rem solid #BFABAB;
    border-radius: 1.6rem;
    padding: 3.2rem;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .section__center {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column wrap;
  }

  .section__announce {
    width: 100%;
    max-width: 46.6rem;
  }

  .section__subtitle {
    font-size: 1.6rem;
    font-weight: 500;
    color: #877575;
    text-align: center;
    margin-bottom: 4.8rem;
  }

  .section__search {
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: .4rem;
    width: 100%;
    max-width: 43.4rem;
  }

  .section__label {
    font-size: 1.4rem;
    color: #AA9B9B;
    font-weight: 500;
    line-height: 150%;
  }

  .section__input {
    width: 100%;
    border: .1rem solid #AA9B9B;
    background-color: transparent;
    font-size: 1.6rem;
    padding: .8rem 1.6rem;
    border-radius: .4rem;
    line-height: 150%;
    font-weight: 600;
    color: #291F1F;
  }

  .section__pokemon {
    padding: 4.8rem 3.2rem 3.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .section__list {
    width: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 3.2rem;
  }

  .section__item {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .section__pagination {
    display: flex;
    list-style-type: none;
    align-items: center;
    gap: 1.6rem;

    .disabled {
      a{
        color: #170F0F;
        background: #CEBFBF;
        border: none;
      }

      a:hover {
        background: #BFABAB;
        border: none;
      }

      a:active {
        background: #AA9B9B;
        border: none;
      }
    }

  }

  .section__pagination {
    user-select: none;
    margin-top: 3.2rem;

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: row wrap;
      padding: 1rem;
      cursor: pointer;
      border: .1rem solid #CEBFBF;
      min-width: 4.2rem;
      border-radius: 50%;
      text-align: center;
    }

    a:hover {
        background: #E0D3D3;
      }

      a:active {
        background: #CEBFBF;
      }
  }

  .section__previous {
    cursor: pointer;

    a{
      padding: .8rem 1rem;
      border-radius: 3rem;
      font-size: 1.6rem;
      font-weight: 800;
      line-height: 150%;
      color: #EAE1E1;
      background: #170F0F;
      border: .1rem solid #170F0F;
    }

    a:hover {
      background: #1F1616;
      border: .1rem solid #1F1616;
    }

    a:active {
      border: .1rem solid #291F1F;
      background: #291F1F;
    }
  }

  .section__next {
    cursor: pointer;

    a{
      padding: .8rem 1rem;
      border-radius: 3rem;
      font-size: 1.6rem;
      font-weight: 800;
      line-height: 150%;
      color: #EAE1E1;
      background: #170F0F;
      border: .1rem solid #170F0F;
    }

    a:hover {
      background: #1F1616;
      border: .1rem solid #1F1616;
    }

    a:active {
      border: .1rem solid #291F1F;
      background: #291F1F;
    }
  }

  .section__break {
    display: none;
  }

  .section__active {
    background: #E0D3D3;
  }

  @media screen and (min-width: 860px) and (max-width: 1140px) {

    .section__list {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media screen and (min-width: 630px) and (max-width: 860px) {

    .section__list {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (max-width: 630px){

    .section__pokemon {
      padding: 4.8rem 0 3.2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    .section__list {
      grid-template-columns: 1fr;
    }
  }
`;

export default PokemonSectionStyled;
