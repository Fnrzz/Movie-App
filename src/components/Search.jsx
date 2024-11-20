import { useDispatch } from "react-redux";
import { useState } from "react";
import { fetchApiMovies } from "../store/actions";
import PropTypes from "prop-types";
const Search = ({ setTitle }) => {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();

  const changeSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchApiMovies(search));
    setTitle(search);
    setSearch("");
  };

  return (
    <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          Movie App
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form
            className="d-flex ms-auto"
            role="search"
            onSubmit={handleSubmit}
          >
            <input
              className="form-control me-2"
              type="search"
              value={search}
              onChange={changeSearch}
              name="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

Search.propTypes = {
  setTitle: PropTypes.func,
};

export default Search;
