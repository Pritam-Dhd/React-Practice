import React, { useEffect, useState } from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import Loading from "./Loading";
// import Generation from "./Generation";
import axios from "axios";
import "./Pokemon.css";

const Home = () => {
  const url = "https://pokeapi.co/api/v2/";
  const [pokemonList, setPokemonList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonPerPage] = useState(20);
  const [filteredPokemonList, setFilteredPokemonList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isNextPageLoading, setIsNextPageLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(`${url}pokemon/?offset=0&limit=2000`);
      const { results } = response.data;
      setPokemonList(results);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const fetchNextPageData = async () => {
    try {
      setIsNextPageLoading(true);
      const nextPage = currentPage + 1;
      const response = await axios.get(
        `${url}pokemon/?offset=${
          (nextPage - 1) * pokemonPerPage
        }&limit=${pokemonPerPage}`
      );
      const { results } = response.data;

      if (results.length === 0) {
        setHasNextPage(false);
      } else {
        setPokemonList((prevList) => [...prevList, ...results]);
        setCurrentPage(nextPage);
      }
      setIsNextPageLoading(false);
    } catch (error) {
      console.log(error);
      setIsNextPageLoading(false);
    }
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm !== "") {
      const filteredList = pokemonList.filter((pokemon) =>
        pokemon.name.includes(searchTerm.toLowerCase())
      );
      setFilteredPokemonList(filteredList);
    } else {
      setFilteredPokemonList([]);
    }
    setCurrentPage(1);
  };

  const displayPokemonList =
    searchTerm !== "" ? filteredPokemonList : pokemonList;

  // Pagination
  const indexOfLastPokemon = currentPage * pokemonPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
  const currentPokemonList = displayPokemonList.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  const totalPages = Math.ceil(displayPokemonList.length / pokemonPerPage);

  const navigateToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const goToPreviousPage = () => {
    navigateToPage(currentPage - 1);
  };

  const goToNextPage = () => {
    if (hasNextPage) {
      fetchNextPageData();
    }
  };

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <div className="container">
        <div className="row justify-content-center">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {currentPokemonList.length > 0 ? (
                currentPokemonList.map((pokemon, index) => (
                  <div
                    className="col-lg-2 col-sm-7 col-md-3 m-2 poke_card"
                    key={index}
                  >
                    <Card name={pokemon.name} url={pokemon.url} />
                  </div>
                ))
              ) : (
                <div className="col-12 text-center">
                  <p>No Pokémon found.</p>
                </div>
              )}
            </>
          )}
        </div>
        <div className="row justify-content-center">
          {displayPokemonList.length > pokemonPerPage && (
            <div className="col-12 text-center">
              <nav aria-label="Pagination">
                <ul className="pagination">
                  <li
                    className={`page-item ${
                      currentPage === 1 ? "disabled" : ""
                    }`}
                  >
                    <button className="page-link" onClick={goToPreviousPage}>
                      &laquo;
                    </button>
                  </li>

                  {Array.from({ length: totalPages }, (_, index) => {
                    if (
                      index > 0 &&
                      index < totalPages - 1 &&
                      (index < currentPage - 2 || index > currentPage + 2)
                    ) {
                      return null;
                    }
                    return (
                      <li
                        className={`page-item ${
                          index + 1 === currentPage ? "active" : ""
                        }`}
                        key={index + 1}
                      >
                        <button
                          className="page-link"
                          onClick={() => navigateToPage(index + 1)}
                        >
                          {index + 1}
                        </button>
                      </li>
                    );
                  })}

                  <li
                    className={`page-item ${
                      currentPage === totalPages ? "disabled" : ""
                    }`}
                  >
                    {isNextPageLoading ? (
                      <Loading />
                    ) : (
                      <button className="page-link" onClick={goToNextPage}>
                        &raquo;
                      </button>
                    )}
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
