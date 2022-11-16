import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import PokemonSectionStyled from "./Styled";
import type { PokemonSectionProps, Selected } from "../../../types";
import PokemonCard from "../PokemonCard/PokemonCard";

function PokemonSection(props: PokemonSectionProps) {
  const [search, setSearch] = useState<string>("");
  const [pageNumber, setPageNumber] = useState(0);
  const pokemonPerPage = 12;
  const totalPage = Math.ceil(props.data.results.length / pokemonPerPage);
  const startIndex = pageNumber * pokemonPerPage;

  function handleInputChange(e: any) {
    setSearch(e.target.value);
  }

  function handlePageClick(event: Selected) {
    setPageNumber(event.selected);
    console.log("a");
  }

  useEffect(() => {}, [search]);

  return (
    <PokemonSectionStyled>
      <div className="section__container">
        <div className="section__content">
          <div className="section__center">
            <div className="section__announce">
              <h2 className="section__subtitle">
                Samuel Carvalho's Pokédex: Where the pokémons shine.
              </h2>
            </div>
            <div className="section__search">
              <h3 className="section__label">Search Pokémon's (Name):</h3>
              <input
                type="text"
                className="section__input"
                autoComplete="off"
                value={search}
                onChange={handleInputChange}
              />
            </div>
            <div className="section__pokemon">
              {search ? (
                <ul className="section__list">
                  {props.data.results
                    .filter((item) => {
                      if (!search) return item;
                      return item.name
                        .toLowerCase()
                        .startsWith(search.toLowerCase());
                    })
                    .map((item, index) => (
                      <li
                        className="section__item"
                        key={index}>
                        <PokemonCard name={item.name} />
                      </li>
                    ))}
                </ul>
              ) : (
                <ul className="section__list">
                  {props.data.results
                    .slice(startIndex, startIndex + pokemonPerPage)
                    .map((item, index) => (
                      <li
                        className="section__item"
                        key={index}>
                        <PokemonCard name={item.name} />
                      </li>
                    ))}
                </ul>
              )}
            </div>
            {search ? (
              false
            ) : (
              <ReactPaginate
                onPageChange={handlePageClick}
                pageCount={totalPage}
                marginPagesDisplayed={0}
                previousLabel="< prev"
                nextLabel="next >"
                className="section__pagination"
                previousClassName="section__previous"
                nextClassName="section__next"
                breakClassName="section__break"
              />
            )}
          </div>
        </div>
      </div>
    </PokemonSectionStyled>
  );
}

export default PokemonSection;
