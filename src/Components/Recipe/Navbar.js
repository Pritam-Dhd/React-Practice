import React, { useState } from "react";

const Navbar = ({ searching }) => {
  const [search, setSearch] = useState("");

  const searchRecipe = (e) => {
    e.preventDefault();
    setSearch(e.target.value);

  };
  const handleSearch = (e) => {
    e.preventDefault();
    searching(search);
    setSearch("");
  };
  

  return (
    <>
      <div className="container mt-5 j">
        <div className="row d-flex">
          <div className="col">
            <p className="Search-heading">Search the food</p>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
        <form className="form d-flex search" onSubmit={handleSearch}>
          <input
            className="form-control mr-sm-2 input border-dark"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={search}
            onChange={(e) => searchRecipe(e)}
     
          />
          <button
            className="btn btn-outline-primary"
            type="submit"
            onClick={() => searching(search)}
          >
            Search
          </button>
        </form>
      </nav>
    </>
  );
};

export default Navbar;
