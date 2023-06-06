import React, { useState } from "react";

const Navbar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
        <form className="form d-flex" onSubmit={handleSubmit}>
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </nav>
    </>
  );
};

export default Navbar;
