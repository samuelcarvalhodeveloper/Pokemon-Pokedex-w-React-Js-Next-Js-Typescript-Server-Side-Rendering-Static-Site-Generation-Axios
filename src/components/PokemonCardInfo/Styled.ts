import styled from "styled-components";

const PokemonCardInfoStyled = styled.article`
  width: 100%;
  max-width: 25rem;
  min-width: 18.8rem;
  border: .1rem solid #AA9B9B;
  border-radius: .8rem;
  overflow: hidden;

  .article__link {
    text-decoration: none;
  }

  .article__illustration {
    width: 100%;
    height: 17.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3.2rem;
  }

  .article__image {
    height: 100%;
  }

  .article__info {
    background: #EAE1E1;
    padding: .8rem 1.6rem 2.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-top: .1rem solid #E0D3D3;
  }

  .article__content {
    display: flex;
    flex-flow: column wrap;
    width: 100%;
  }

  .article__id {
    color: #AA9B9B;
    font-size: 1.2rem;
    font-weight: 900;
    line-height: 150%;
    text-decoration: none;
  }

  .article__name {
    line-height: 125%;
    font-size: 3.2rem;
    font-weight: 600;
    color: #291F1F;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-transform: capitalize;
    margin-bottom: .8rem;
  }

  .article__list {
    display: flex;
    flex-flow: row wrap;
    list-style-type: none;
    gap: .8rem;
  }

  .article__item {
    line-height: 150%;
    font-size: 1.6rem;
    font-weight: 700;
    border-radius: .4rem;
    color: #EAE1E1;
    padding: 0 .8rem;
    text-transform: capitalize;
  }
`;

export default PokemonCardInfoStyled;
